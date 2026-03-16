'use client';

import { useEffect, useState } from "react";
import axios from "axios";
// import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import styles from "./CustomerBookings.module.css";
import ReviewForm from "../components/ReviewForm";
import {
  BarChart3,
  Clock,
  CheckCircle2,
  MapPin,
  Calendar,
  DollarSign,
  FileText,
  User,
  MessageCircle,
  Star,
  Inbox,
  ChevronRight
} from "lucide-react";

export default function CustomerBookings() {
  // const { t } = useLanguage();
  const navigate = useNavigate();

  const [list, setList]                       = useState<any[]>([]);
  const [filter, setFilter]                   = useState("all");
  const [loading, setLoading]                 = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/bookings/my", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      setList(Array.isArray(res.data) ? res.data : res.data?.bookings || []);
    } catch (err) {
      console.error("Error loading bookings:", err);
    } finally {
      setLoading(false);
    }
  }

  const getProviderName = (b: any) =>
    b.providerId?.userId?.name ||
    b.providerId?.name ||
    "Provider";

  const getProviderInitial = (b: any) =>
    getProviderName(b).charAt(0).toUpperCase();

  const formatDate = (d: any) => {
    if (!d) return "Date not set";
    const date = new Date(d);
    if (isNaN(date.getTime())) return "Date not set";
    return date.toLocaleDateString("en-IN", {
      day: "numeric", month: "long", year: "numeric"
    });
  };

  const formatPrice = (provider: any) => {
    if (!provider?.priceAmount) return null;
    const type = provider.priceType
      ? provider.priceType.charAt(0).toUpperCase() + provider.priceType.slice(1)
      : "";
    return { amount: `₹${provider.priceAmount.toLocaleString()}`, type: type ? `/ ${type.toLowerCase()}` : "" };
  };

  const STATUS_CONFIG: Record<string, { icon: React.ReactNode; label: string; cls: string }> = {
    pending:   { icon: <Clock size={13} style={{ display: 'inline-block' }} />, label: "Pending",   cls: "s-pending"   },
    accepted:  { icon: <CheckCircle2 size={13} style={{ display: 'inline-block' }} />,  label: "Confirmed", cls: "s-accepted"  },
    rejected:  { icon: <span style={{ fontSize: '13px', display: 'inline-block' }}>✕</span>,  label: "Rejected",  cls: "s-rejected"  },
    completed: { icon: <CheckCircle2 size={13} style={{ display: 'inline-block' }} />, label: "Completed", cls: "s-completed" },
  };

  const filteredList = filter === "all" ? list : list.filter(b => b.status === filter);
  const stats = {
    total:     list.length,
    pending:   list.filter(b => b.status === "pending").length,
    accepted:  list.filter(b => b.status === "accepted").length,
    completed: list.filter(b => b.status === "completed").length,
  };

  const goToProfile = (id: string) => { if (id) navigate(`/provider/${id}`); };
  const goToChat    = (p: any)     => {
    const uid = p?.userId?._id || p?.userId;
    if (uid) navigate(`/chat/${uid}`);
  };

  if (loading) return (
    <div className={styles["bookings-page"]}>
      <div className={styles["loading-container"]}>
        <div className={styles["loading-spinner"]} />
        <p>Loading your bookings...</p>
      </div>
    </div>
  );

  return (
    <div className={styles["bookings-page"]}>
      <div className={styles["bookings-container"]}>

        {/* Header */}
        <div className={styles["bookings-header"]}>
          <div className={styles["header-content"]}>
            <h1 className={styles["header-title"]}> <br />
              Your <span className={styles["title-gradient"]}>Service History</span>
            </h1>
            <p className={styles["header-subtitle-1"]}>
              Track and manage all your service bookings in one place
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className={styles["stats-grid"]}>
          {[
            { key:"total",     icon: <BarChart3 size={20} />, label:"Total",     val:stats.total     },
            { key:"pending",   icon: <Clock size={20} />, label:"Pending",   val:stats.pending   },
            { key:"accepted",  icon: <CheckCircle2 size={20} />,  label:"Confirmed", val:stats.accepted  },
            { key:"completed", icon: <CheckCircle2 size={20} />, label:"Completed", val:stats.completed },
          ].map(s => (
            <div key={s.key} className={`${styles["stat-card"]} ${styles[s.key]}`}>
              <div className={styles["stat-icon"]}>{s.icon}</div>
              <div className={styles["stat-info"]}>
                <span className={styles["stat-value"]}>{s.val}</span>
                <span className={styles["stat-label"]}>{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className={styles["filter-section"]}>
          <div className={styles["filter-tabs"]}>
            {[
              { key:"all",       label:"All",         count:list.length, icon: <BarChart3 size={12} /> },
              { key:"pending",   label:"Pending",  count:stats.pending, icon: <Clock size={12} /> },
              { key:"accepted",  label:"Confirmed", count:stats.accepted, icon: <CheckCircle2 size={12} /> },
              { key:"completed", label:"Done",     count:stats.completed, icon: <CheckCircle2 size={12} />},
            ].map(f => (
              <button
                key={f.key}
                className={`${styles["filter-tab"]} ${filter === f.key ? styles["active"] : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {f.icon}
                {f.label}
                {filter === f.key && <span className={styles["tab-count"]}>{f.count}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Empty */}
        {filteredList.length === 0 ? (
          <div className={styles["empty-state"]}>
            <Inbox size={48} style={{ opacity: 0.4, marginBottom: '8px' }} />
            <h3>No bookings found</h3>
            <p>You don't have any {filter !== "all" ? filter : ""} bookings yet.</p>
            <button className={styles["browse-services-btn"]} onClick={() => navigate("/search")}>
              Browse Services <ChevronRight size={14} style={{ display: 'inline-block' }} />
            </button>
          </div>
        ) : (
          <div className={styles["bookings-grid"]}>
            {filteredList.map(b => {
              const provName  = getProviderName(b);
              const initial   = getProviderInitial(b);
              const sc        = STATUS_CONFIG[b.status] || { icon:"•", label:b.status, cls:"" };
              const price     = formatPrice(b.providerId);

              return (
                <div key={b._id} className={`${styles["booking-card"]} ${styles[`status-${b.status}`]}`}>

                  {/* ── TOP: avatar + name + status ── */}
                  <div className={styles["booking-card-header"]}>
                    <div
                      className={styles["provider-avatar"]}
                      onClick={() => goToProfile(b.providerId?._id)}
                      title="View profile"
                    >
                      {initial}
                    </div>

                    <div className={styles["provider-details"]}>
                      <h3
                        className={styles["provider-name"]}
                        onClick={() => goToProfile(b.providerId?._id)}
                        title="View profile"
                      >
                        {provName}
                      </h3>
                      {b.providerId?.category && (
                        <span className={styles["provider-category"]}>
                          {b.providerId.category}
                        </span>
                      )}
                    </div>

                    <div className={`${styles["status-badge"]} ${styles[sc.cls]}`}>
                      {sc.icon} {sc.label}
                    </div>
                  </div>

                  {/* ── BODY: details ── */}
                  <div className={styles["booking-card-body"]}>

                    <div className={styles["detail-item"]}>
                      <MapPin size={14} style={{ marginTop: '2px', flexShrink: 0, width: '18px', textAlign: 'center' }} />
                      <div className={styles["detail-content"]}>
                        <span className={styles["detail-label"]}>Location</span>
                        <span className={styles["detail-value"]}>
                          {[b.providerId?.city, b.providerId?.area].filter(Boolean).join(", ") || "—"}
                        </span>
                      </div>
                    </div>

                    <div className={styles["detail-item"]}>
                      <Calendar size={14} style={{ marginTop: '2px', flexShrink: 0, width: '18px', textAlign: 'center' }} />
                      <div className={styles["detail-content"]}>
                        <span className={styles["detail-label"]}>Date</span>
                        <span className={styles["detail-value"]}>{formatDate(b.date)}</span>
                      </div>
                    </div>

                    {/* Price row */}
                    {price && (
                      <div className={styles["detail-item"]}>
                        <DollarSign size={14} style={{ marginTop: '2px', flexShrink: 0, width: '18px', textAlign: 'center' }} />
                        <div className={styles["detail-content"]}>
                          <span className={styles["detail-label"]}>Service Charge</span>
                          <span className={styles["price-inline"]}>
                            <strong>{price.amount}</strong>
                            {price.type && <span className={styles["price-type"]}> {price.type}</span>}
                          </span>
                        </div>
                      </div>
                    )}

                    {b.note && (
                      <div className={`${styles["detail-item"]} ${styles["note-item"]}`}>
                        <FileText size={14} style={{ marginTop: '2px', flexShrink: 0, width: '18px', textAlign: 'center' }} />
                        <div className={styles["detail-content"]}>
                          <span className={styles["detail-label"]}>Note</span>
                          <span className={`${styles["detail-value"]} ${styles["note-text"]}`}>
                            {b.note}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── FOOTER: action buttons ── */}
                  <div className={styles["booking-card-footer"]}>
                    <div className={styles["action-buttons"]}>

                      <button
                        className={`${styles["action-btn"]} ${styles["profile-btn"]}`}
                        onClick={() => goToProfile(b.providerId?._id)}
                      >
                        <User size={13} style={{ display: 'inline-block' }} /> Profile
                      </button>

                      <button
                        className={`${styles["action-btn"]} ${styles["contact-btn"]}`}
                        onClick={() => goToChat(b.providerId)}
                      >
                        <MessageCircle size={13} style={{ display: 'inline-block' }} /> Chat
                      </button>

                      {b.status === "completed" && !b.reviewed && (
                        <button
                          className={`${styles["action-btn"]} ${styles["review-btn"]}`}
                          onClick={() => { setSelectedBooking(b); setShowReviewModal(true); }}
                        >
                          <Star size={13} style={{ display: 'inline-block' }} /> Review
                        </button>
                      )}

                      {b.reviewed && (
                        <span className={styles["reviewed-badge"]}>
                          <Star size={12} style={{ display: 'inline-block' }} /> Reviewed
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ── Timeline ── */}
                  <div className={styles["booking-timeline"]}>
                    <div className={`${styles["timeline-dot"]} ${b.status === "pending" ? styles["active"] : styles["completed"]}`}>1</div>
                    <div className={`${styles["timeline-line"]} ${b.status === "accepted" || b.status === "completed" ? styles["active"] : ""}`} />
                    <div className={`${styles["timeline-dot"]} ${b.status === "accepted" ? styles["active"] : b.status === "completed" ? styles["completed"] : ""}`}>2</div>
                    <div className={`${styles["timeline-line"]} ${b.status === "completed" ? styles["active"] : ""}`} />
                    <div className={`${styles["timeline-dot"]} ${b.status === "completed" ? styles["completed"] : ""}`}>3</div>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

      {showReviewModal && selectedBooking && (
        <ReviewForm
          booking={selectedBooking}
          onClose={() => setShowReviewModal(false)}
          refreshBookings={load}
        />
      )}
    </div>
  );
}
