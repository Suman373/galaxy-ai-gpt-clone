export const runtime = "edge";

import { convertToModelMessages, streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { saveChat } from "@/utils/chat-store";

// Documentation link 
// https://ai-sdk.dev/docs/ai-sdk-ui/chatbot

export async function POST(req: Request) {

    const { messages: allMessage, id } = await req.json();
    
    const result = streamText({
        model: openai("gpt-4.1"),
        system: "You are a helpful assistant",
        messages: convertToModelMessages(allMessage)
    });

    return result.toUIMessageStreamResponse({
        originalMessages: allMessage,
        onFinish: ({ messages }) => {
            saveChat({ chatId: id, messages})
        },
    });
}
