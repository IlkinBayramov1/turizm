import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tourId: { type: mongoose.Schema.Types.ObjectId, ref: "Tour", required: true },
    customer: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
    },
    seats: { type: Number, required: true },
    payment: {
      status: { type: String, enum: ["pending", "paid", "failed", "refunded"], default: "pending" },
      method: String,
      transactionId: String,
      paidAt: Date,
    },
    status: { type: String, enum: ["in_progress", "confirmed", "completed"], default: "in_progress" }
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", reservationSchema);
