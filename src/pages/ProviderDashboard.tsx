'use client';

import { useEffect, useState } from "react";
import {
  getProviderBookings,
  updateBookingStatus
} from "../services/bookingService";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import api from "../api/axios";
import styles from "./ProviderDashboard.module.css";
import {
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  CheckCircle2,
  User,
  ImagePlus,
  MessageSquare,
  Plus,
  Calendar,
  MapPin,
  DollarSign,
  FileText,
  Check,
  X,
  Inbox,
  Sparkles,
  TrendingUp,
  Star,
  ClipboardList
} from "lucide-react";

function ProviderDashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [bookings, setBookings] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>("");
  const [uploadingPhoto, setUploadingPhoto] = useState<boolean>(false);
  const [providerStats, setProviderStats] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>("bookings");
  const [profileExists, setProfileExists] = useState<boolean>(false);
  const [providerName, setProviderName] = useState<string>("Provider");

  useEffect(() => {
    loadBookings();
    loadProfile();
    loadProviderStats();
  }, []);

  const loadProviderStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/providers/stats", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProviderStats(res.data);
    } catch (err) {
      console.error("Failed to load stats", err);
    }
  };

  const loadProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/providers/me", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data) {
        setProfileExists(true);
        if (res.data?.profilePhoto) {
          setProfileImage(res.data.profilePhoto);
        }
        // Get name from populated userId or from localStorage as fallback
        const name =
          res.data?.userId?.name ||
          res.data?.name ||
          JSON.parse(localStorage.getItem("user") || "{}")?.name ||
          "Provider";
        setProviderName(name);
      } else {
        setProfileExists(false);
        // Even without a profile, show their account name
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setProviderName(JSON.parse(storedUser)?.name || "Provider");
        }
      }
    } catch (err) {
      console.error("Failed to load profile", err);
      setProfileExists(false);
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setProviderName(JSON.parse(storedUser)?.name || "Provider");
      }
    }
  };

  const loadBookings = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token")!;
      const data = await getProviderBookings(token);
      setBookings(data);
    } catch (err) {
      console.error("Failed to load bookings", err);
    } finally {
      setLoading(false);
    }
  };

  const update = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem("token")!;
      await updateBookingStatus(id, status, token);
      setBookings(prev =>
        prev.map(b => b._id === id ? { ...b, status } : b)
      );
      const message = status === 'accepted' ? 'Booking accepted!' :
                     status === 'rejected' ? 'Booking rejected' :
                     'Booking completed!';
      alert(message);
    } catch (err) {
      console.error("Failed to update booking", err);
      alert("Failed to update booking");
    }
  };

  const uploadProfilePhoto = async (file: File) => {
    try {
      setUploadingPhoto(true);
      const formData = new FormData();
      formData.append("image", file);
      const res = await api.post("/providers/upload-photo", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setProfileImage(res.data.profilePhoto);
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploadingPhoto(false);
    }
  };

  const deletePhoto = async () => {
    if (!window.confirm("Remove profile photo?")) return;
    try {
      const token = localStorage.getItem("token");
      await api.delete("/providers/profile-photo", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfileImage("");
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const filteredBookings = filter === "all"
    ? bookings
    : bookings.filter(b => b.status === filter);

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === "pending").length,
    accepted: bookings.filter(b => b.status === "accepted").length,
    completed: bookings.filter(b => b.status === "completed").length,
  };

  const getStatusIcon = (status: string) => {
    const iconProps = { size: 16, strokeWidth: 2.5 };
    switch(status) {
      case 'pending': return <Clock {...iconProps} />;
      case 'accepted': return <CheckCircle {...iconProps} />;
      case 'rejected': return <XCircle {...iconProps} />;
      case 'completed': return <CheckCircle2 {...iconProps} />;
      default: return <CheckCircle {...iconProps} />;
    }
  };

  // First name only for the welcome heading
  const firstName = providerName.split(" ")[0];

  return (
    <div className={styles["provider-dashboard"]}>
      <div className={styles["dashboard-container"]}>

        {/* ── Header ── */}
        <div className={styles["dashboard-header"]}>
          <div className={styles["header-content"]}> <br /><br />
            <span className={styles["header-badge"]}>
              <Sparkles size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
              Provider Dashboard
            </span>
            <h1 className={styles["header-title"]}>
              Welcome back, <span className={styles["title-gradient"]}>{firstName}!</span>
            </h1>
            <p className={styles["header-subtitle"]}>
              Manage your bookings, portfolio, and earnings
            </p>
          </div>
        </div>

        {/* ── Profile Card ── */}
        <div className={styles["profile-section"]}>
          <div className={styles["profile-card"]}>

            {/* Left: photo + name */}
            <div className={styles["profile-left"]}>
              <div className={styles["profile-photo-container"]}>
                {profileImage ? (
                  <div className={styles["photo-wrapper"]}>
                    <img src={profileImage} alt="profile" className={styles["profile-photo"]} />
                    <div className={styles["photo-overlay"]}>
                      <button
                        className={styles["photo-edit-btn"]}
                        onClick={() => document.getElementById('file-input')?.click()}
                      ><ImagePlus size={14} style={{ display: 'inline-block', marginRight: '4px' }} /> Edit</button>
                      <button className={styles["photo-delete-btn"]} onClick={deletePhoto}>
                        <X size={14} style={{ display: 'inline-block', marginRight: '4px' }} /> Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className={styles["profile-placeholder"]}
                    onClick={() => document.getElementById('file-input')?.click()}
                  >
                    <User size={32} style={{ opacity: 0.5, marginBottom: '8px' }} />
                    <span className={styles["placeholder-text"]}>Upload Photo</span>
                  </div>
                )}
                <input
                  id="file-input" type="file" accept="image/*"
                  onChange={(e) => { if (e.target.files?.[0]) uploadProfilePhoto(e.target.files[0]); }}
                  style={{ display: 'none' }}
                />
              </div>

              <div className={styles["profile-info"]}>
                {/* ── FIXED: show actual provider name ── */}
                <h3 className={styles["profile-name"]}>{providerName}</h3>
                {profileExists ? (
                  <div className={`${styles["profile-badge"]} ${styles["verified"]}`}>
                    <CheckCircle size={12} style={{ display: 'inline-block', marginRight: '3px' }} /> Verified Professional
                  </div>
                ) : (
                  <div className={`${styles["profile-badge"]} ${styles["incomplete"]}`}>
                    <Clock size={12} style={{ display: 'inline-block', marginRight: '3px' }} /> Profile Incomplete
                  </div>
                )}
              </div>
            </div>

            {/* Right: stats / create profile */}
            <div className={styles["profile-right"]}>
              {profileExists ? (
                <>
                  <div className={styles["profile-stats"]}>
                    <div className={styles["profile-stat"]}>
                      <span className={styles["ps-value"]}>{providerStats?.completedJobs || 0}</span>
                      <span className={styles["ps-label"]}>Jobs Done</span>
                    </div>
                    <div className={styles["profile-stat"]}>
                      <span className={styles["ps-value"]}>₹{providerStats?.totalEarnings || 0}</span>
                      <span className={styles["ps-label"]}>Earnings</span>
                    </div>
                    <div className={styles["profile-stat"]}>
                      <span className={styles["ps-value"]}>{providerStats?.responseRate || 98}%</span>
                      <span className={styles["ps-label"]}>Response Rate</span>
                    </div>
                  </div>
                  <div className={styles["profile-actions"]}>
                    <button className={styles["profile-action-btn"]} onClick={() => navigate("/upload-portfolio")}>
                      <ImagePlus size={14} style={{ display: 'inline-block', marginRight: '5px' }} /> Portfolio
                    </button>
                    <button
                      className={styles["profile-action-btn"]}
                      onClick={() => navigate("/messages")}
                    >
                      <MessageSquare size={14} style={{ display: 'inline-block', marginRight: '5px' }} /> Messages
                    </button>
                  </div>
                </>
              ) : (
                <div className={styles["create-profile-box"]}>
                  <h4>Complete Your Profile</h4>
                  <p>Create your provider profile to start accepting bookings from customers.</p>
                  <button className={styles["create-profile-btn"]} onClick={() => navigate("/create-provider-profile")}>
                    <Plus size={14} style={{ display: 'inline-block', marginRight: '5px' }} /> Create Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Stats Grid ── */}
        {profileExists && (
          <div className={styles["stats-grid"]}>
            {[
              { key: "total",     icon: <BarChart3 size={22} />, label: "Total",     val: stats.total },
              { key: "pending",   icon: <Clock size={22} />, label: "Pending",   val: stats.pending },
              { key: "accepted",  icon: <CheckCircle size={22} />,  label: "Accepted",  val: stats.accepted },
              { key: "completed", icon: <CheckCircle2 size={22} />, label: "Completed", val: stats.completed },
            ].map(s => (
              <div key={s.key} className={`${styles["stat-card"]} ${styles[s.key]}`}>
                <span className={styles["stat-icon"]}>{s.icon}</span>
                <div className={styles["stat-info"]}>
                  <span className={styles["stat-value"]}>{s.val}</span>
                  <span className={styles["stat-label"]}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Tab Navigation ── */}
        {profileExists && (
          <div className={styles["dashboard-tabs"]}>
            {[
              { key: "bookings", label: <><ClipboardList size={14} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: '-2px' }} /> Bookings</> },
              { key: "earnings", label: <><DollarSign size={14} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: '-2px' }} /> Earnings</> },
              { key: "reviews",  label: <><Star size={14} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: '-2px' }} /> Reviews</> },
            ].map(tab => (
              <button
                key={tab.key}
                className={`${styles["tab-btn"]} ${activeTab === tab.key ? styles["active"] : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* ── Main Content ── */}
        <div className={styles["dashboard-content"]}>

          {!profileExists ? (
            <div className={styles["welcome-card"]}>
              <Sparkles size={40} style={{ margin: '0 auto 12px', display: 'block' }} />
              <h2>Welcome to Provider Dashboard!</h2>
              <p>Get started by creating your professional profile to receive booking requests.</p>
              <div className={styles["welcome-steps"]}>
                {["Create Profile","Add Portfolio","Get Verified","Start Earning"].map((s,i) => (
                  <div key={i} className={styles["step"]}>
                    <span className={styles["step-number"]}>{i+1}</span>
                    <span className={styles["step-text"]}>{s}</span>
                  </div>
                ))}
              </div>
              <button className={styles["get-started-btn"]} onClick={() => navigate("/create-provider-profile")}>
                Get Started →
              </button>
            </div>

          ) : (
            <>
              {/* ── BOOKINGS TAB ── */}
              {activeTab === 'bookings' && (
                <>
                  <div className={styles["filter-row"]}>
                    {[
                      { key: "all",       label: "All",          count: stats.total, icon: <BarChart3 size={12} /> },
                      { key: "pending",   label: "Pending",   count: stats.pending, icon: <Clock size={12} /> },
                      { key: "accepted",  label: "Accepted",   count: stats.accepted, icon: <CheckCircle size={12} /> },
                      { key: "completed", label: "Completed", count: stats.completed, icon: <CheckCircle2 size={12} /> },
                    ].map(f => (
                      <button
                        key={f.key}
                        className={`${styles["filter-pill"]} ${filter === f.key ? styles["active"] : ""}`}
                        onClick={() => setFilter(f.key)}
                      >
                        {f.icon}
                        {f.label}
                        <span className={styles["pill-count"]}>{f.count}</span>
                      </button>
                    ))}
                  </div>

                  {loading ? (
                    <div className={styles["loading-state"]}>
                      <div className={styles["loading-spinner"]} />
                      <p>Loading bookings…</p>
                    </div>
                  ) : filteredBookings.length === 0 ? (
                    <div className={styles["empty-state"]}>
                      <Inbox size={48} style={{ margin: '0 auto 10px', opacity: 0.5 }} />
                      <h3>No bookings found</h3>
                      <p>You have no {filter !== 'all' ? filter : ''} bookings right now.</p>
                    </div>
                  ) : (
                    <div className={styles["bookings-grid"]}>
                      {filteredBookings.map(b => {
                        const customerName = b.customerId?.name ?? "Customer";
                        const avatar = customerName.charAt(0).toUpperCase();
                        const price = b.providerId?.priceAmount;

                        return (
                          <div key={b._id} className={`${styles["booking-card"]} ${styles[`s-${b.status}`]}`}>

                            <div className={styles["card-header"]}>
                              <div className={styles["avatar"]}>{avatar}</div>
                              <div className={styles["card-header-info"]}>
                                <span className={styles["c-name"]}>{customerName}</span>
                                <span className={styles["b-id"]}>#{b._id.slice(-6)}</span>
                              </div>
                              <span className={`${styles["status-chip"]} ${styles[b.status]}`}>
                                {getStatusIcon(b.status)} {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                              </span>
                            </div>

                            <div className={styles["card-body"]}>
                              <div className={styles["detail-row"]}>
                                <Calendar size={15} style={{ marginTop: '2px', flexShrink: 0, width: '18px', textAlign: 'center' }} />
                                <div>
                                  <span className={styles["d-label"]}>Date</span>
                                  <span className={styles["d-value"]}>
                                    {b.date
                                      ? new Date(b.date).toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' })
                                      : 'Not specified'}
                                  </span>
                                </div>
                              </div>

                              <div className={styles["detail-row"]}>
                                <MapPin size={15} style={{ marginTop: '2px', flexShrink: 0, width: '18px', textAlign: 'center' }} />
                                <div>
                                  <span className={styles["d-label"]}>Location</span>
                                  <span className={styles["d-value"]}>{b.location || 'Not specified'}</span>
                                </div>
                              </div>

                              <div className={`${styles["detail-row"]} ${styles["price-row"]}`}>
                                <DollarSign size={15} style={{ marginTop: '2px', flexShrink: 0, width: '18px', textAlign: 'center' }} />
                                <div>
                                  <span className={styles["d-label"]}>Service Charge</span>
                                  <span className={styles["price-highlight"]}>
                                    {price ? `₹${price}` : "₹5,000"}
                                  </span>
                                </div>
                              </div>

                              {b.note && (
                                <div className={`${styles["detail-row"]} ${styles["note-row"]}`}>
                                  <FileText size={15} style={{ marginTop: '2px', flexShrink: 0, width: '18px', textAlign: 'center' }} />
                                  <div>
                                    <span className={styles["d-label"]}>Notes</span>
                                    <span className={styles["d-value"]}>{b.note}</span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {(b.status === "pending" || b.status === "accepted") && (
                              <div className={styles["card-footer"]}>
                                {b.status === "pending" && (
                                  <>
                                    <button
                                      className={`${styles["act-btn"]} ${styles["accept"]}`}
                                      onClick={() => update(b._id, "accepted")}
                                    ><Check size={14} style={{ display: 'inline-block', marginRight: '5px' }} /> Accept</button>
                                    <button
                                      className={`${styles["act-btn"]} ${styles["reject"]}`}
                                      onClick={() => update(b._id, "rejected")}
                                    ><X size={14} style={{ display: 'inline-block', marginRight: '5px' }} /> Decline</button>
                                  </>
                                )}
                                {b.status === "accepted" && (
                                  <button
                                    className={`${styles["act-btn"]} ${styles["complete"]}`}
                                    onClick={() => update(b._id, "completed")}
                                  ><CheckCircle2 size={14} style={{ display: 'inline-block', marginRight: '5px' }} /> Mark Completed</button>
                                )}
                              </div>
                            )}

                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}

              {/* ── EARNINGS TAB ── */}
              {activeTab === 'earnings' && (
                <div className={styles["tab-panel"]}>
                  <div className={styles["earnings-hero"]}>
                    <p className={styles["earnings-label"]}>Total Earnings</p>
                    <div className={styles["earnings-amount"]}>₹{providerStats?.totalEarnings || 0}</div>
                    <p className={styles["earnings-sub"]}>This month: ₹{providerStats?.monthlyEarnings || 0}</p>
                  </div>
                  <div className={styles["placeholder-box"]}>
                    <span>📈</span>
                    <p>Earnings chart coming soon…</p>
                  </div>
                </div>
              )}

              {/* ── REVIEWS TAB ── */}
              {activeTab === 'reviews' && (
                <div className={styles["tab-panel"]}>
                  <div className={styles["reviews-summary"]}>
                    <span className={styles["big-rating"]}>4.8</span>
                    <div>
                      <div className={styles["stars"]}>★★★★★</div>
                      <span className={styles["review-count"]}>128 reviews</span>
                    </div>
                  </div>
                  <div className={styles["placeholder-box"]}>
                    <span>💬</span>
                    <p>Customer reviews will appear here.</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default ProviderDashboard;
