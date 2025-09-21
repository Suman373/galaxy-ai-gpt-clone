import Image from "next/image";
import OpenAiLogo from '@/public/openai.png';
import { FiEdit } from "react-icons/fi";
import { SidebarItem } from "./SidebarItem";
import { SidebarProps } from "@/lib/types";


export function Sidebar({ setMessages }: SidebarProps) {

  const userName = "Suman Roy";
  const plan = "Free";

  const createNewChat = () => {

  }

  return (
    <aside className="h-screen max-w-[260px] hidden md:w-[260px] md:flex flex-col bg-neutral-900 text-white p-2 overflow-y-auto">
      <div className="flex flex-col h-full bg-neutral-900">
        <div className="flex items-center justify-between px-1 py-3">
          <Image className="w-6 invert-100" src={OpenAiLogo} alt="openai-logo" />
        </div>
        <SidebarItem
          onClick={createNewChat}
          label="New chat"
          icon={<FiEdit />} />
        <nav className="flex-1 overflow-y-auto px-2">
          {/* chats in history */}
          <div className="text-sm  text-neutral-400 px-2 py-1">Chats</div>
          <div className="space-y-2">
            <SidebarItem
             href="/c/id" 
             label="Example Chat" 
             icon={null} />
          </div>
        </nav>

        <div className="mt-4 py-3 px-2 text-sm  border-t border-neutral-800 rounded-lg hover:bg-neutral-700 cursor-pointer">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-blue-500 text-white grid text-xs place-content-center">
               {userName.split(" ")[0].charAt(0)}{userName.split(" ")[1].charAt(0)}   
              </div>
              <div>
                <p>{userName}</p>
                <p className="text-xs text-gray-200">{plan}</p>
              </div>
            </div>
            <button className="border-[1px] cursor-pointer border-neutral-600 rounded-full px-2 py-1 text-xs bg-neutral-800 hover:bg-neutral-700">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
