'use client';

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { fetchProviderById } from "../services/providerService";
import { createBooking } from "../services/bookingService";
import styles from "./ProviderProfile.module.css";
import api from "../api/axios";

/* ── SVG icons ── */
const IconChat = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{color:'#f59e0b'}}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const IconPrice = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:'#34d399'}}>
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const IconShield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:'#a5b4fc'}}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconBookNow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    <path d="m9 16 2 2 4-4"/>
  </svg>
);

const IconArrowDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const IconNoReviews = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.35}}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

function ProviderProfile() {
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();

  const [provider, setProvider] = useState<any>(null);
  const [date, setDate]         = useState("");
  const [note, setNote]         = useState("");
  const [loading, setLoading]   = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [reviews, setReviews]   = useState<any[]>([]);

  useEffect(() => {
    if (!id || id === "dashboard") return;
    const loadProvider = async () => {
      try {
        const data = await fetchProviderById(id);
        setProvider(data);
      } catch (err) {
        console.error("Failed to load provider", err);
      }
    };
    loadProvider();

api.get(`/reviews/provider/${id}`)
  .then(res => setReviews(res.data))
  .catch(err => console.error("Failed to load reviews", err));

}, [id]);

  const formatPrice = () => {
    if (!provider?.priceAmount) return "Price not specified";
    const type = provider.priceType
      ? provider.priceType.charAt(0).toUpperCase() + provider.priceType.slice(1)
      : "";
    return `₹${provider.priceAmount.toLocaleString()}${type ? ` / ${type}` : ""}`;
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) { navigate("/login"); return; }
    if (!date)  { alert(t('providerProfile.selectDate')); return; }
    setLoading(true);
    try {
      await createBooking(id!, date, note, token);
      setBookingSuccess(true);
      setTimeout(() => navigate("/bookings"), 2000);
    } catch {
      alert(t('providerProfile.bookingFailed'));
    } finally {
      setLoading(false);
    }
  };

  if (!provider) return (
    <div className={styles["pp-page"]}>
      <div className={styles["state-center"]}>
        <div className={styles["spinner"]} />
        <p className={styles["state-text"]}>Loading provider…</p>
      </div>
    </div>
  );

  if (bookingSuccess) return (
    <div className={styles["pp-page"]}>
      <div className={styles["state-center"]}>
        <div className={styles["success-circle"]}>✓</div>
        <h2 className={styles["success-title"]}>Booking Request Sent!</h2>
        <p className={styles["state-text"]}>Redirecting to your bookings…</p>
      </div>
    </div>
  );

  const ratingValue = provider.averageRating
    ? parseFloat(provider.averageRating).toFixed(1)
    : "N/A";

  return (
    <div className={styles["pp-page"]}>

      {/* ══ HERO ══ */}
      <div className={styles["hero"]}>
        <div className={styles["hero-inner"]}>

          <div className={styles["hero-top"]}>
            <div className={styles["avatar-wrap"]}>
              <img
                src={provider.profilePhoto || "https://placehold.co/120"}
                alt={provider.userId?.name}
                className={styles["hero-avatar"]}
              />
              <span className={styles["verified-dot"]}>✓</span>
            </div>

            <div className={styles["hero-info"]}>
              <div className={styles["name-row"]}>
                <h1 className={styles["hero-name"]}>{provider.userId?.name}</h1>
                <span className={styles["verified-badge"]}>✓ Verified</span>
              </div>
              <p className={styles["hero-category"]}>{provider.category}</p>
              <p className={styles["hero-location"]}>
                <IconPin /> {provider.area}
              </p>
            </div>
          </div>

          {/* Stat pills — SVG icons */}
          <div className={styles["hero-stats"]}>
            <div className={styles["stat-pill"]}>
              <span className={styles["sp-icon"]}><IconStar /></span>
              <div className={styles["sp-body"]}>
                <span className={styles["sp-val"]}>{ratingValue}</span>
                <span className={styles["sp-lbl"]}>Rating</span>
              </div>
            </div>
            <div className={styles["stat-pill"]}>
              <span className={styles["sp-icon"]}><IconPrice /></span>
              <div className={styles["sp-body"]}>
                <span className={styles["sp-val"]}>{formatPrice()}</span>
                <span className={styles["sp-lbl"]}>Price</span>
              </div>
            </div>
            <div className={styles["stat-pill"]}>
              <span className={styles["sp-icon"]}><IconShield /></span>
              <div className={styles["sp-body"]}>
                <span className={styles["sp-val"]}>100%</span>
                <span className={styles["sp-lbl"]}>Verified</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className={styles["hero-actions"]}>
            <button
              className={styles["chat-btn"]}
              onClick={() => navigate(`/chat/${provider.userId?._id}`)}
            >
              <IconChat /> Chat with Provider
            </button>
            <button
              className={styles["book-btn-hero"]}
              onClick={() => document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              <IconBookNow /> Book Now <IconArrowDown />
            </button>
          </div>

        </div>
      </div>

      {/* ══ MAIN ══ */}
      <div className={styles["page-body"]}>
        <div className={styles["content-grid"]}>

          <div className={styles["main-col"]}>

            <section className={styles["card"]}>
              <h2 className={styles["card-title"]}>About</h2>
              <p className={styles["card-text"]}>{provider.description}</p>
            </section>

            {provider.portfolio?.length > 0 && (
              <section className={styles["card"]}>
                <h2 className={styles["card-title"]}>Work Portfolio</h2>
                <div className={styles["portfolio-grid"]}>
                  {provider.portfolio.map((item: any, i: number) => (
                    <div key={i} className={styles["portfolio-item"]}>
                      <img src={item.imageUrl} alt={`Work ${i+1}`} className={styles["portfolio-img"]} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className={styles["card"]}>
              <h2 className={styles["card-title"]}>Customer Reviews</h2>
              {reviews.length === 0 ? (
                <div className={styles["no-reviews"]}>
                  <span className={styles["no-reviews-icon"]}><IconNoReviews /></span>
                  <p>No reviews yet.</p>
                </div>
              ) : (
                <div className={styles["reviews-list"]}>
                  {reviews.map(review => (
                    <div key={review._id} className={styles["review-card"]}>
                      <div className={styles["review-top"]}>
                        <div className={styles["r-avatar"]}>
                          {review.customerId?.name?.charAt(0) || 'C'}
                        </div>
                        <div className={styles["r-meta"]}>
                          <span className={styles["r-name"]}>{review.customerId?.name || 'Customer'}</span>
                          <div className={styles["r-stars"]}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`${styles["star"]} ${i < review.rating ? styles["filled"] : ""}`}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className={styles["r-comment"]}>{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

          </div>

          {/* Booking sidebar */}
          <aside id="booking-section" className={styles["sidebar"]}>
            <div className={styles["booking-card"]}>
              <div className={styles["booking-price-banner"]}>
                <span className={styles["bp-label"]}>Service Charge</span>
                <span className={styles["bp-value"]}>{formatPrice()}</span>
              </div>

              <h3 className={styles["booking-title"]}>Book This Service</h3>

              <form onSubmit={handleBooking} className={styles["booking-form"]}>
                <div className={styles["form-group"]}>
                  <label className={styles["form-label"]}>Select Date</label>
                  <input
                    className={styles["form-input"]}
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label className={styles["form-label"]}>Additional Notes</label>
                  <textarea
                    className={styles["form-textarea"]}
                    placeholder="Describe your requirements…"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    rows={3}
                  />
                </div>
                <button type="submit" className={styles["submit-btn"]} disabled={loading}>
                  {loading ? (
                    <span className={styles["btn-loading"]}>
                      <span className={styles["btn-spinner"]} /> Sending…
                    </span>
                  ) : (
                    <><IconBookNow /> Request Booking</>
                  )}
                </button>
              </form>
            </div>
          </aside>

        </div>
      </div>

    </div>
  );
}

export default ProviderProfile;