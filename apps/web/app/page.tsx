import { createChat } from "@/utils/chat-store";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const userId = "6d62fced-09c8-4c90-8536-8fe1752e1a04";
  const id = await createChat(userId);
  redirect(`/c/${id}`);
}