
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MessageBubble from "./MessageBubble";

interface Message {
  content: string;
  role: "user" | "assistant";
  timestamp: number;
}

interface ChatBoxProps {
  activeDocument?: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ activeDocument }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage = activeDocument
        ? `I've processed your document "${activeDocument}". What would you like to know about it?`
        : "Hello! I'm your Gemini AI assistant. Upload a PDF document to chat about its contents, or ask me general questions!";
        
      setMessages([
        {
          content: welcomeMessage,
          role: "assistant",
          timestamp: Date.now(),
        },
      ]);
    }
  }, [activeDocument]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      content: input,
      role: "user",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // In a real app, this would call the backend API
      setTimeout(() => {
        // Simulate AI response
        const aiMessage: Message = {
          content: generateMockResponse(input, activeDocument),
          role: "assistant",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  // This function simulates AI responses for the demo
  const generateMockResponse = (query: string, document?: string): string => {
    if (document) {
      // Document-specific responses
      if (query.toLowerCase().includes("summarize")) {
        return `Here's a summary of "${document}":\n\nThis document discusses advanced machine learning techniques with focus on transformers and their applications in natural language processing. It covers architecture details, attention mechanisms, and practical implementation examples.`;
      }
      
      if (query.toLowerCase().includes("key point") || query.toLowerCase().includes("main point")) {
        return `The key points from "${document}" are:\n\n1. Transformer models have revolutionized NLP tasks\n2. Attention mechanisms allow for better context understanding\n3. Fine-tuning pre-trained models yields better results than training from scratch\n4. The document provides code examples for implementation in TensorFlow and PyTorch`;
      }
      
      return `Based on "${document}", I can tell you that ${query.toLowerCase().includes("what") ? "the information you're looking for relates to advanced machine learning concepts." : "this appears to be related to a topic covered in section 3 of the document where transformer architectures are discussed in detail."}`;
    }
    
    // Generic responses
    if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hi")) {
      return "Hello! How can I help you today?";
    }
    
    if (query.toLowerCase().includes("gemini")) {
      return "Gemini is Google's most capable AI model. It's a multimodal model that can understand and combine different types of information like text, code, audio, image, and video.";
    }
    
    return "I'm your AI assistant powered by Gemini. To get the most out of our conversation, consider uploading a PDF document that we can discuss in detail. Otherwise, feel free to ask me any general questions!";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        {isLoading && (
          <div className="ai-message message-bubble p-4 animate-pulse">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-white text-xs">
                AI
              </div>
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 resize-none"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? (
              <span className="animate-spin">◌</span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
