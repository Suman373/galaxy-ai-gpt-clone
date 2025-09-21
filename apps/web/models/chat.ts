import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            enum: ["user", "assistant"],
            required: true,
        },
        parts: [
            {
                type: {
                    type: String,
                    enum: ["text", "image"],
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
        chatId: { type: String, required: true, unique: true },
        messages: [MessageSchema],
    },
    { timestamps: true }
);

export const Chat =
    mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
