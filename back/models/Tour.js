import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    images: [{ type: String }], // URL-lər
    category: { type: String, enum: ["local", "international", "VIP"], default: "local" },
    totalSeats: { type: Number, default: 0 },
    availableSeats: { type: Number, default: 0 },
    discountCode: { type: String }, // optional
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
