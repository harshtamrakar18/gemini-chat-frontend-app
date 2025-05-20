
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto flex flex-col items-center justify-center p-4 md:p-8">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Chat with your PDFs using Gemini AI
          </h1>
          <p className="text-xl text-muted-foreground">
            Upload your PDF documents and get instant insights, summaries, and
            answers to your questions powered by Google's Gemini AI.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg">
              <Link to="/login">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link to="/register">Create Account</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Upload PDFs</h3>
            <p className="text-muted-foreground">
              Simply upload any PDF document to start analyzing its content with
              AI assistance.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Chat Naturally</h3>
            <p className="text-muted-foreground">
              Ask questions, request summaries, or explore specific sections in
              natural language.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Get Instant Answers</h3>
            <p className="text-muted-foreground">
              Receive accurate responses and insights from your documents in
              seconds.
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 GeminiChat. Powered by Google's Gemini AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
