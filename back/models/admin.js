import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  role: { type: String, enum: ["superadmin", "editor", "support"], default: "editor" },
  permissions: [String]
}, { timestamps: true });

export default mongoose.model("Admin", adminSchema);
