import MainChat from "@/ui/chat/MainChat";
import { loadChatMessages } from "@/utils/chat-store";

export default async function ChatPage({ params }: {params: Promise<{id: string}>}) {
    const { id: chatId } = await params;
    const messages = await loadChatMessages(chatId);
    return (
      <>
        <MainChat
            chatId={chatId}
            initialMessages={messages || []}
        />
      </>
    );
}
