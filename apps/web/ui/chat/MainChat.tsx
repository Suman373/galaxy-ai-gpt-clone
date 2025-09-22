"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/ui/chat/Sidebar";
import { MessageList } from "@/ui/chat/MessageList";
import { ChatInput } from "@/ui/chat/ChatInput";
import { useChat } from "@ai-sdk/react"
import Header from "./Header";
import { DefaultChatTransport } from "ai";
import { MainChatProps } from "@/lib/types";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { useRouter } from "next/navigation";

export default function MainChat({ chatId: initialId, initialMessages = [] }: MainChatProps) {
  const router = useRouter();

  // using DefaultChatTransport from the Vercel AI SDK UI for response streaming
  const { messages, sendMessage, setMessages, status } = useChat({
    id: initialId,
    messages: initialMessages,
    transport: new DefaultChatTransport({ api: "/api/chat", }),
  });

  const [activeChatId, setActiveChatId] = useState(initialId);

  const handleSendMessage = async (text: string) => {
    await sendMessage({ text });
  }

  return (
    <div className="flex">
      <div>
        <Sidebar
          activeChatId={activeChatId}
          onNewChat={() => {
            setMessages([]);
            router.push(`/c/new`);
          }}
        />
      </div>
      <div className="flex-1 flex flex-col h-screen relative bg-neutral-800 text-gray-200">
        <Header />
        <div className="flex-1 flex flex-col justify-between overflow-hidden">

          {messages?.length === 0 ?
            (<div className="max-w-4xl h-screen mx-auto flex flex-col items-center justify-center gap-4 md:gap-6 ">
              <h2 className="text-2xl md:text-3xl text-gray-200 font-normal px-4">Where should we begin ?</h2>
              <ChatInput
                status={status}
                onSend={(text) => handleSendMessage(text)} />
              <div className="cursor-pointer rounded-full border-[1px] border-neutral-600 px-2 py-1 hover:bg-neutral-600">
                <p className="text-center flex gap-1 items-center">
                  <PiStarFourFill className=" text-indigo-500" />
                  Unlock extra messages, images & more <span className="text-indigo-500 inline-flex items-center">Upgrade plan
                    <MdOutlineArrowRightAlt className="mt-1" />
                  </span>
                </p>
              </div>
            </div>)
            :
            (<>
              <div className="flex-1 overflow-hidden px-2">
                <MessageList messages={messages} />
              </div>
              <div className="bottom-0 w-full pb-6 mx-auto bg-neutral-800">
                <ChatInput onSend={(text) => sendMessage({ text })} status={status} />
                <p className="text-center text-gray-200 text-xs my-1">
                  ChatGPT can make mistakes. Check important info.
                </p>
              </div>
            </>)
          }
        </div>
      </div >
    </div >
  );
}
