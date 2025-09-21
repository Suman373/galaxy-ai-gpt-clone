import { convertToModelMessages, streamText, UIMessage } from "ai";
import { openai } from "@ai-sdk/openai";

// Documentation link 
// https://ai-sdk.dev/docs/ai-sdk-ui/chatbot

// streaming responses for upto 30s 
export const maxDuration = 30;

// const openai = createOpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

export async function POST(req: Request) {
    const { messages }: {messages: UIMessage[]} = await req.json();

    const result = streamText({
        model: openai("gpt-4.1"),
        system: "You are a helpful assistant",
        messages: convertToModelMessages(messages)
    });

    return result.toUIMessageStreamResponse();
}

