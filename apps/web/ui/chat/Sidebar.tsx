export function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-4 px-2">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.06)]">
          <span className="inline-block w-3 h-3 bg-[var(--accent)] rounded-full" />
          <span className="text-sm font-medium">New chat</span>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-2">
        {/* placeholder for chat history - match spacing */}
        <div className="text-xs text-[var(--dim)] px-2 py-1">Recent</div>
        <div className="space-y-2">
          <div className="px-3 py-2 rounded-md text-sm bg-[rgba(255,255,255,0.02)]">Example chat</div>
        </div>
      </nav>

      <div className="mt-4 px-2 py-3 text-xs text-[var(--dim)] border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        Settings & account
      </div>
    </div>
  );
}
