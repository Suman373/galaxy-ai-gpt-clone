import { useState } from "react";

export function ChatInput({ onSend }: { onSend: (msg: any) => void }) {

  const [input, setInput] = useState("");
  const handleSend = () => {
    if (!input.trim()) return;
    onSend({ role: "user", content: input });
    setInput("");
  };

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-end gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          className="flex-1 resize-none rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          rows={1}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
