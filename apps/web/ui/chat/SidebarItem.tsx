import { SidebarItemProps } from "@/lib/types";
import Link from "next/link";

export function SidebarItem({ onClick, href, label, icon, isActive }: SidebarItemProps) {
  
  const baseClasses =
    "my-2 px-2 rounded-lg w-full flex items-center gap-3 py-2 text-sm font-medium cursor-pointer transition-colors " +
    (isActive ? "bg-neutral-700" : "hover:bg-neutral-700");

  // if href exists rendering a next link otherwise return a button
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={baseClasses}>
        {icon}
        <span className="truncate">{label}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {icon}
      <span className="truncate">{label}</span>
    </button>
  );
}
