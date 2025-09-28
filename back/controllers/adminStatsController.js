import Reservation from "../models/Reservation.js";
import Tour from "../models/Tour.js";
import User from "../models/User.js";

// 🔹 Admin statistika
export const getAdminStats = async (req, res) => {
  try {
    // 1. Revenue (yalnız ödənilmiş rezervasiyalar)
    const revenueAgg = await Reservation.aggregate([
      { $match: { "payment.status": "paid" } },
      {
        $lookup: {
          from: "tours",
          localField: "tourId",
          foreignField: "_id",
          as: "tour"
        }
      },
      { $unwind: "$tour" },
      {
        $group: {
          _id: null,
          total: { $sum: { $multiply: ["$seats", "$tour.price"] } }
        }
      }
    ]);
    const revenue = revenueAgg.length > 0 ? revenueAgg[0].total : 0;

    // 2. Aktiv turlar
    const activeTours = await Tour.countDocuments({ availableSeats: { $gt: 0 } });

    // 3. Ümumi rezervasiya sayı
    const totalReservations = await Reservation.countDocuments();

    // 4. Son 10 rezervasiya
    const lastReservations = await Reservation.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("tourId", "title price category")
      .populate("user", "firstName lastName email");

    // 5. Total money (ümumi gəlir = revenue)
    const totalMoney = revenue;

    // 6. İstifadəçi sayı
    const totalUsers = await User.countDocuments();

    // 7. Endirimli qiymətlərdən gəlir (əgər tour.discountPrice varsa)
    const discountedRevenueAgg = await Reservation.aggregate([
      { $match: { "payment.status": "paid" } },
      {
        $lookup: {
          from: "tours",
          localField: "tourId",
          foreignField: "_id",
          as: "tour"
        }
      },
      { $unwind: "$tour" },
      {
        $group: {
          _id: null,
          total: {
            $sum: {
              $multiply: [
                "$seats",
                { $ifNull: ["$tour.discountPrice", "$tour.price"] }
              ]
            }
          }
        }
      }
    ]);
    const discountedRevenue =
      discountedRevenueAgg.length > 0 ? discountedRevenueAgg[0].total : 0;

    res.json({
      revenue,
      activeTours,
      totalReservations,
      lastReservations,
      totalMoney,
      totalUsers,
      discountedRevenue
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
