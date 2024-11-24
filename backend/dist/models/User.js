import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
    id: {
        type: String, // Change this to String
        default: randomUUID, // Use default to generate UUID
    },
    role: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Corrected spelling
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true, // Corrected spelling
    },
    chats: [chatSchema],
});
// Export the User model
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map