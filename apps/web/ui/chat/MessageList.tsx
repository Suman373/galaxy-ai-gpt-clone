export function MessageList({ messages }: { messages: any[] }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`px-4 py-2 rounded-lg max-w-lg ${
              msg.role === "user"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}
