
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PDFUploader from "@/components/PDFUploader";
import ChatBox from "@/components/ChatBox";
import ChatHistory from "@/components/ChatHistory";

// Mock data for chat history
const mockChatSessions = [
  {
    id: "1",
    title: "Research Paper Analysis",
    preview: "Can you summarize the key findings?",
    timestamp: Date.now() - 24 * 60 * 60 * 1000, // 1 day ago
  },
  {
    id: "2",
    title: "Machine Learning Book",
    preview: "What are the applications mentioned in chapter 3?",
    timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
  },
];

const Chat: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeSessionId, setActiveSessionId] = useState<string | null>("1");
  const [activePDF, setActivePDF] = useState<string | undefined>();

  const handleUploadSuccess = (fileName: string) => {
    setActivePDF(fileName);
  };

  const handleNewChat = () => {
    setActiveSessionId(null);
    setActivePDF(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        {/* Chat History Sidebar */}
        {showSidebar && (
          <div className="w-64 h-[calc(100vh-70px)] hidden md:block">
            <ChatHistory
              sessions={mockChatSessions}
              activeSessionId={activeSessionId}
              onSessionSelect={setActiveSessionId}
              onNewChat={handleNewChat}
            />
          </div>
        )}

        <div className="flex-1 flex flex-col md:flex-row">
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col h-[calc(100vh-70px)] border-r">
            {/* Toggle sidebar button (mobile only) */}
            <div className="md:hidden border-b p-2">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="p-2 rounded-md hover:bg-muted/50 transition-colors"
              >
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
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>

            {/* Chat area */}
            <div className="flex-1 flex flex-col">
              <ChatBox activeDocument={activePDF} />
            </div>
          </div>

          {/* Right sidebar for PDF upload and info */}
          <div className="w-full md:w-80 p-4 border-t md:border-t-0">
            <PDFUploader onUploadSuccess={handleUploadSuccess} />

            {activePDF && (
              <div className="mt-6 bg-card p-4 rounded-lg border">
                <h3 className="font-medium mb-2">Active Document</h3>
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span className="truncate">{activePDF}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  You can ask questions specific to this document.
                </p>
                <div className="mt-3 space-y-1">
                  <p className="text-xs font-medium">Try asking:</p>
                  <button
                    className="text-xs text-primary block hover:underline"
                    onClick={() => {
                      // This would set the input value in a real app
                      console.log("Clicked suggestion");
                    }}
                  >
                    "Summarize this document for me"
                  </button>
                  <button
                    className="text-xs text-primary block hover:underline"
                    onClick={() => {
                      console.log("Clicked suggestion");
                    }}
                  >
                    "What are the key points?"
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Tips</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Upload PDFs to chat about their contents</li>
                <li>• Ask follow-up questions for more details</li>
                <li>• Request summaries or specific information</li>
                <li>• Your chat history is saved automatically</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
