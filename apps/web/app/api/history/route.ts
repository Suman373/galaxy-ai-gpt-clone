import { connectToDB } from "@/lib/mongodb";
import { Chat } from "@/models/chat";

export async function GET(req: Request) {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("id");
    if (!userId) {
        return Response.json({ error: "Missing userId" }, { status: 400 });
    }
    const chats = await Chat.find({ userId });
    if (!chats || chats.length === 0) {
        return Response.json({ error: "Chats not found" }, { status: 404 });
    }
    return Response.json({ message: "Chats of user fetched successfully", result: chats }, { status: 200 });
}