"use client";
import { useState } from "react";
import { Sidebar } from "@/ui/chat/Sidebar";
import { MessageList } from "@/ui/chat/MessageList";
import { ChatInput } from "@/ui/chat/ChatInput";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I help you today?" },
  ]);

  const addMessage = (msg: { role: string; content: string }) => {
    setMessages((s) => [...s, msg]);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar hidden md:flex flex-col bg-[var(--sidebar)] text-white p-4">
        <Sidebar />
      </aside>

      <main className="main">
        {/* header */}
        <div className="px-4 py-3 border-b" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-medium text-[var(--text)]">New chat</h2>
          </div>
        </div>

        {/* messages */}
        <div className="message-area bg-[var(--bg)]">
          <div className="max-w-5xl mx-auto">
            <MessageList messages={messages} />
          </div>
        </div>

        {/* input */}
        <div className="px-4 py-4 border-t" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
          <div className="max-w-5xl mx-auto">
            <ChatInput onSend={(text) => addMessage({ role: "user", content: text })} />
          </div>
        </div>
      </main>
    </div>
  );
}
