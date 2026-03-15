import { useState } from "react";
import api from "../api/axios";
import "./ReviewForm.css";

export default function ReviewForm({ booking, onClose, refreshBookings }: any) {

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {

    try {

      setLoading(true);

      await api.post("/reviews", {
        bookingId: booking._id,
        rating,
        comment
      });

      alert("⭐ Review submitted");

      refreshBookings();
      onClose();

    } catch (err) {

      console.error(err);
      alert("Failed to submit review");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="customer-review-overlay">

      <div className="customer-review-modal">

        <h2>Leave a Review</h2>

        <p>{booking?.providerId?.userId?.name}</p>

        <div className="customer-stars">
          {[1,2,3,4,5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "customer-star active" : "customer-star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Write your experience..."
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
        />

        <div className="customer-review-actions">

          <button onClick={onClose}>
            Cancel
          </button>

          <button onClick={submit} disabled={loading}>
            {loading ? "Submitting..." : "Submit Review"}
          </button>

        </div>

      </div>

    </div>
  );
}