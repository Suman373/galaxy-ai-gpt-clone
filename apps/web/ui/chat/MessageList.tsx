import { MessageListProps } from "@/lib/types";
import { UIMessage } from "ai";
import { useEffect, useLayoutEffect, useRef } from "react";
import { GoCopy } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";

export function MessageList({ messages }: MessageListProps) {

  const msgContainerRef = useRef<HTMLDivElement>(null);


  const handleMsgCopy = async (msg: UIMessage) => {
    const textArr = msg.parts.map((part) => part.type === "text" ? part.text : "");
    console.log(textArr.join(" "));
    await navigator.clipboard.writeText(textArr.join(" "));
  }

  const handleMsgEdit = () => {

  }


  useEffect(() => {
    if(!msgContainerRef.current) return;
    msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div
      className="flex-1 h-full mt-5 overflow-y-auto p-4 space-y-4 px-4 w-full md:px-[20%] pb-[12rem] pt-[4rem] mx-auto"
      ref={msgContainerRef}
    >
      {messages.map((msg,idx) => (
        <div
          key={msg.id}
          className={`flex overflow-visible ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`px-4 py-2 rounded-2xl max-w-lg relative ${msg.role === "user"
              ? "bg-[#303030] text-gray-200 group"
              : "text-white"
              }`}
          >
            <div className="flex flex-col">
              {msg.parts.map((part, index) =>
                part.type === "text" ? <span key={index}>{part.text}</span> : null
              )}
            </div>
            {msg.role === "user" && (
              <div className="h-6  pt-5 absolute -bottom-5 right-3 hidden flex-row items-center gap-4 text-xl group-hover:flex z-10">
                <GoCopy
                  title="Copy"
                  className="cursor-pointer"
                  onClick={() => handleMsgCopy(msg)}
                />
                <MdOutlineEdit
                  title="Edit"
                  className="cursor-pointer"
                  onClick={handleMsgEdit}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
