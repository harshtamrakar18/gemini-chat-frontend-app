
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatSession {
  id: string;
  title: string;
  preview: string;
  timestamp: number;
}

interface ChatHistoryProps {
  sessions: ChatSession[];
  activeSessionId: string | null;
  onSessionSelect: (sessionId: string) => void;
  onNewChat: () => void;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({
  sessions,
  activeSessionId,
  onSessionSelect,
  onNewChat,
}) => {
  return (
    <div className="h-full flex flex-col bg-card border-r">
      <div className="p-4 border-b">
        <Button onClick={onNewChat} className="w-full" variant="default">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          New Chat
        </Button>
      </div>
      <div className="p-2 text-sm font-medium text-muted-foreground">
        Recent Conversations
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {sessions.map((session) => (
            <Button
              key={session.id}
              variant={activeSessionId === session.id ? "secondary" : "ghost"}
              className="w-full justify-start text-left h-auto py-3 px-4"
              onClick={() => onSessionSelect(session.id)}
            >
              <div>
                <div className="font-medium truncate w-full max-w-[200px]">
                  {session.title}
                </div>
                <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                  {session.preview}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(session.timestamp).toLocaleDateString()}
                </p>
              </div>
            </Button>
          ))}
          
          {sessions.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No conversations yet</p>
              <p className="text-xs mt-1">
                Start a new chat to begin
              </p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatHistory;
