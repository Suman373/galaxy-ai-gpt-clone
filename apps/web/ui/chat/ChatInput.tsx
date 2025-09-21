import { ChatInputProps } from "@/lib/types";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoArrowUpOutline } from "react-icons/io5";
import { FaSquare } from "react-icons/fa";

export function ChatInput({ onSend, status }: ChatInputProps) {
  const [inputText, setInputText] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return; // empty 
    onSend(inputText);
    setInputText("");
  }

  return (
    <div className="container xs:w-[20rem] sm:xl lg:w-3xl flex flex-col items-center justify-center mx-auto py-2">
      <form
        onSubmit={handleFormSubmit}
        className="h-14 flex items-center bg-neutral-700 rounded-full w-full px-3 gap-2">
        <button
          type="button"
          className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-neutral-500 cursor-pointer duration-200"
        >
          <FiPlus className="text-lg md:text-xl " />
        </button>
        <input
          className="flex-1 bg-transparent outline-none text-white placeholder-neutral-400"
          type="text"
          placeholder="Ask anything"
          value={inputText}
          disabled={status !== "ready"}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer"
        > {
            status === "streaming" ? <FaSquare
              className="text-lg md:text-xl font-semibold " /> : <IoArrowUpOutline className="text-lg md:text-xl font-semibold " />
          }
        </button>
      </form>
    </div>
  );
}
