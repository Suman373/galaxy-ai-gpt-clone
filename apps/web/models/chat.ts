import { IChat } from "@/lib/types";
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        id: { type: String },
        role: {
            type: String,
            enum: ["system", "user", "assistant"],
            required: true,
        },
        parts: [
            {
                type: {
                    type: String,
                    required: true,
                },
                text: { type: String },
                url: { type: String },
            },
        ],
    },
    { _id: false }
);

const ChatSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        id: { type: String, required: true, unique: true },
        messages: [MessageSchema],
    },
    { timestamps: true }
);

export const Chat = (mongoose.models.Chat || mongoose.model<IChat>('Chat', ChatSchema));
