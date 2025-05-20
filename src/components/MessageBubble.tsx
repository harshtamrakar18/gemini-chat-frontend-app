
import React from "react";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: {
    content: string;
    role: "user" | "assistant";
    timestamp?: number;
  };
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === "user";
  
  return (
    <div
      className={cn(
        "message-bubble p-4 animate-fade-in",
        isUser ? "user-message" : "ai-message"
      )}
    >
      <div className="flex items-start">
        {!isUser && (
          <div className="flex-shrink-0 mr-2 mt-1">
            <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-white text-xs">
              AI
            </div>
          </div>
        )}
        <div>
          <p className="whitespace-pre-wrap">{message.content}</p>
          {message.timestamp && (
            <div
              className={cn(
                "text-xs mt-1",
                isUser ? "text-white/70" : "text-muted-foreground"
              )}
            >
              {new Date(message.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          )}
        </div>
        {isUser && (
          <div className="flex-shrink-0 ml-2 mt-1">
            <div className="h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs">
              You
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
