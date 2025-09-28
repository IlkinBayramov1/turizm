import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  status: { type: String, enum: ["new", "read", "resolved"], default: "new" }
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);

