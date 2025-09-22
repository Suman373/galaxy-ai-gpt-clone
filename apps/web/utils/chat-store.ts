import { connectToDB } from "@/lib/mongodb";
import { IChat } from "@/lib/types";
import { Chat } from "@/models/chat";
import { generateId, UIMessage } from "ai";

export async function createChat(userId: string): Promise<string> {
  await connectToDB();
  const id = generateId();
  await Chat.create({ id, userId, messages: [] });
  return id;
}

export async function saveChat({chatId,messages}:{chatId:string, messages: UIMessage[]}) : Promise<void> {
  await connectToDB();
  const chatDoc = await Chat.findOne({ id: chatId });
  if (!chatDoc)  return;
  const sanitized = messages?.map((msg)=> ({...msg,id: msg.id || generateId()}));
  chatDoc.messages = sanitized; // replace with latest messages
  await chatDoc.save();
}

export async function loadChatMessages(chatId:string): Promise<UIMessage[]>{
    await connectToDB();
    const chat = await Chat.findOne({id:chatId}).lean<IChat>();
    if(!chat) return [];
    return chat.messages as UIMessage[] || [];
}