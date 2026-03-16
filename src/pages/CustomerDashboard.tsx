'use client';

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import {
  Search,
  ClipboardList,
  MessageSquare,
  Star,
  BarChart3,
  Clock,
  CheckCircle2,
  MessageCircle,
  Inbox,
  ChevronRight,
  Sparkles,
  User,
  Check
} from "lucide-react";

const CSS = `
  .cd-page {
    min-height: 100vh;
    background: #0b1120;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #f1f5f9;
    padding-top: 80px;
    padding-bottom: 56px;
    overflow-x: hidden;
  }

  .cd-page *, .cd-page *::before, .cd-page *::after {
    box-sizing: border-box; margin: 0; padding: 0;
  }

  .cd-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 16px;
  }

  /* ── Header ── */
  .cd-header {
    text-align: center;
    padding: 32px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .cd-badge {
    display: inline-block;
    background: rgba(99,102,241,0.14);
    color: #a5b4fc;
    border: 1px solid rgba(99,102,241,0.28);
    border-radius: 999px;
    padding: 5px 16px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .cd-welcome {
    font-size: 36px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -1px;
    color: #f8fafc;
  }

  .cd-welcome-accent {
    background: linear-gradient(135deg, #818cf8, #c4b5fd);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .cd-welcome-sub {
    font-size: 15px;
    color: #64748b;
  }

  /* ── Profile + stats row ── */
  .cd-profile-card {
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 22px;
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  .cd-avatar-big {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: 900;
    color: white;
    flex-shrink: 0;
    box-shadow: 0 0 0 3px rgba(99,102,241,0.3);
  }

  .cd-profile-info { flex: 1; min-width: 160px; }

  .cd-profile-name {
    font-size: 20px;
    font-weight: 800;
    color: #f1f5f9;
    margin-bottom: 4px;
  }

  .cd-profile-email {
    font-size: 13px;
    color: #64748b;
  }

  .cd-profile-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    background: rgba(16,185,129,0.12);
    color: #34d399;
    border: 1px solid rgba(16,185,129,0.25);
    border-radius: 999px;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 600;
  }

  .cd-quick-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .cd-quick-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 18px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.15s;
    border: none;
    font-family: inherit;
    white-space: nowrap;
  }

  .cd-quick-btn-primary {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    box-shadow: 0 4px 14px rgba(99,102,241,0.35);
  }

  .cd-quick-btn-outline {
    background: transparent;
    color: #a5b4fc;
    border: 1px solid rgba(99,102,241,0.3);
  }

  .cd-quick-btn:hover  { opacity: 0.88; }
  .cd-quick-btn:active { transform: scale(0.96); }

  /* ── Stats row ── */
  .cd-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 28px;
  }

  .cd-stat {
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .cd-stat:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }

  .cd-stat-icon {
    width: 46px; height: 46px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; flex-shrink: 0;
  }

  .cd-stat-total    .cd-stat-icon { background: rgba(59,130,246,0.15); }
  .cd-stat-pending  .cd-stat-icon { background: rgba(245,158,11,0.15); }
  .cd-stat-done     .cd-stat-icon { background: rgba(16,185,129,0.15); }
  .cd-stat-saved    .cd-stat-icon { background: rgba(139,92,246,0.15); }

  .cd-stat-val {
    font-size: 28px; font-weight: 900; color: #f1f5f9;
    line-height: 1; display: block; margin-bottom: 3px;
  }

  .cd-stat-lbl {
    font-size: 11px; color: #64748b;
    font-weight: 600; text-transform: uppercase; letter-spacing: 0.6px;
  }

  /* ── Section title ── */
  .cd-section-title {
    font-size: 16px; font-weight: 800; color: #f1f5f9;
    margin-bottom: 14px;
    display: flex; align-items: center; gap: 8px;
  }

  /* ── Quick links grid ── */
  .cd-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 28px;
  }

  .cd-link-card {
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 18px;
    padding: 20px;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }

  .cd-link-card:hover {
    transform: translateY(-3px);
    border-color: #6366f1;
    box-shadow: 0 10px 28px rgba(99,102,241,0.2);
  }

  .cd-link-icon {
    width: 44px; height: 44px;
    border-radius: 12px;
    background: rgba(99,102,241,0.12);
    border: 1px solid rgba(99,102,241,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
  }

  .cd-link-label {
    font-size: 14px; font-weight: 700; color: #f1f5f9;
  }

  .cd-link-sub {
    font-size: 12px; color: #64748b; line-height: 1.4;
  }

  /* ── Recent bookings ── */
  .cd-bookings {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
  }

  .cd-booking-row {
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 14px;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: border-color 0.2s;
    text-decoration: none;
    color: inherit;
  }

  .cd-booking-row:hover { border-color: #6366f1; }

  .cd-booking-avatar {
    width: 40px; height: 40px; border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; font-weight: 800; color: white; flex-shrink: 0;
  }

  .cd-booking-info { flex: 1; min-width: 0; }

  .cd-booking-name {
    font-size: 14px; font-weight: 700; color: #f1f5f9;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }

  .cd-booking-date { font-size: 12px; color: #64748b; margin-top: 2px; }

  .cd-booking-status {
    padding: 5px 12px; border-radius: 999px;
    font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.4px;
    white-space: nowrap; flex-shrink: 0;
  }

  .cd-s-pending   { background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3); }
  .cd-s-accepted  { background: rgba(59,130,246,0.15);  color: #60a5fa; border: 1px solid rgba(59,130,246,0.3); }
  .cd-s-completed { background: rgba(16,185,129,0.15);  color: #34d399; border: 1px solid rgba(16,185,129,0.3); }
  .cd-s-rejected  { background: rgba(239,68,68,0.15);   color: #f87171; border: 1px solid rgba(239,68,68,0.3); }

  .cd-empty {
    background: #151f32; border: 1px dashed #1e2d47;
    border-radius: 16px; padding: 40px 20px;
    text-align: center; color: #475569;
    font-size: 14px;
  }

  .cd-empty-icon { font-size: 36px; opacity: 0.4; display: block; margin-bottom: 8px; }

  .cd-view-all {
    display: inline-flex; align-items: center; gap: 6px;
    color: #818cf8; font-size: 13px; font-weight: 600;
    text-decoration: none; margin-top: 10px;
    transition: color 0.2s;
  }

  .cd-view-all:hover { color: #a5b4fc; }

  /* ── Loading spinner ── */
  .cd-spinner {
    width: 40px; height: 40px;
    border: 4px solid #1e2d47; border-top-color: #6366f1;
    border-radius: 50%; animation: cdSpin 0.8s linear infinite;
    margin: 40px auto; display: block;
  }

  @keyframes cdSpin { to { transform: rotate(360deg); } }

  /* ── Responsive ── */
  @media (min-width: 640px) {
    .cd-stats { grid-template-columns: repeat(4, 1fr); }
    .cd-links { grid-template-columns: repeat(4, 1fr); }
    .cd-welcome { font-size: 44px; }
  }

  @media (max-width: 480px) {
    .cd-welcome     { font-size: 28px; }
    .cd-avatar-big  { width: 56px; height: 56px; font-size: 22px; }
    .cd-profile-name { font-size: 17px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .cd-stat, .cd-link-card, .cd-booking-row,
    .cd-quick-btn { transition: none; }
    .cd-spinner { animation: none; }
  }
`;

function CustomerDashboard() {
  const navigate = useNavigate();

  const storedUser  = localStorage.getItem("user");
  const user        = storedUser ? JSON.parse(storedUser) : null;
  const name        = user?.name || "Customer";
  const email       = user?.email || "";
  const firstName   = name.split(" ")[0];
  const initial     = firstName.charAt(0).toUpperCase();

  const [bookings, setBookings] = useState<any[]>([]);
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/bookings/my", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBookings(Array.isArray(res.data) ? res.data : res.data?.bookings || []);
      } catch (err) {
        console.error("Failed to load bookings", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const stats = {
    total:    bookings.length,
    pending:  bookings.filter(b => b.status === "pending").length,
    done:     bookings.filter(b => b.status === "completed").length,
  };

  const recentBookings = bookings.slice(0, 5);

  const quickLinks = [
    { icon: <Search size={20} />, label: "Find Providers",  sub: "Search & book services",   to: "/search"    },
    { icon: <ClipboardList size={20} />, label: "My Bookings",     sub: "View all your bookings",   to: "/bookings"  },
    { icon: <MessageSquare size={20} />, label: "Messages",        sub: "Chat with providers",      to: "/messages"  },
    { icon: <Star size={20} />, label: "Reviews",         sub: "Rate your experiences",    to: "/bookings"  },
  ];

  const formatDate = (d: string) =>
    d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—";

  return (
    <>
      <style>{CSS}</style>

      <div className="cd-page">
        <div className="cd-container">

          {/* ── Header ── */}
          <div className="cd-header">
            <span className="cd-badge">
              <User size={12} style={{ display: 'inline-block', marginRight: '5px', verticalAlign: 'middle' }} />
              Customer Dashboard
            </span>
            <h1 className="cd-welcome">
              Welcome back, <span className="cd-welcome-accent">{firstName}!</span>
            </h1>
            <p className="cd-welcome-sub">Everything you need, right here.</p>
          </div>

          {/* ── Profile card ── */}
          <div className="cd-profile-card">
            <div className="cd-avatar-big">{initial}</div>
            <div className="cd-profile-info">
              <div className="cd-profile-name">{name}</div>
              {email && <div className="cd-profile-email">{email}</div>}
              <div className="cd-profile-tag">
                <Check size={11} style={{ display: 'inline-block' }} /> Verified Customer
              </div>
            </div>
            <div className="cd-quick-actions">
              <Link to="/search" className="cd-quick-btn cd-quick-btn-primary">
                <Search size={14} style={{ display: 'inline-block', marginRight: '5px' }} /> Find Services
              </Link>
              <Link to="/bookings" className="cd-quick-btn cd-quick-btn-outline">
                <ClipboardList size={14} style={{ display: 'inline-block', marginRight: '5px' }} /> My Bookings
              </Link>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="cd-stats">
            {[
              { cls: "cd-stat-total",   icon: <BarChart3 size={20} />, val: stats.total,   lbl: "Total Bookings"    },
              { cls: "cd-stat-pending", icon: <Clock size={20} />, val: stats.pending, lbl: "Pending"            },
              { cls: "cd-stat-done",    icon: <CheckCircle2 size={20} />, val: stats.done,    lbl: "Completed"          },
              { cls: "cd-stat-saved",   icon: <MessageCircle size={20} />, val: "—",           lbl: "Messages",
                onClick: () => navigate("/messages") },
            ].map((s, i) => (
              <div
                key={i}
                className={`cd-stat ${s.cls}`}
                onClick={s.onClick}
                style={s.onClick ? { cursor: "pointer" } : {}}
              >
                <div className="cd-stat-icon">{s.icon}</div>
                <div>
                  <span className="cd-stat-val">{s.val}</span>
                  <span className="cd-stat-lbl">{s.lbl}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Quick links ── */}
          <div className="cd-section-title">
            <Sparkles size={16} style={{ display: 'inline-block', marginRight: '6px' }} /> Quick Access
          </div>
          <div className="cd-links">
            {quickLinks.map((l, i) => (
              <Link key={i} to={l.to} className="cd-link-card">
                <div className="cd-link-icon" style={{ fontSize: '20px' }}>{l.icon}</div>
                <div className="cd-link-label">{l.label}</div>
                <div className="cd-link-sub">{l.sub}</div>
              </Link>
            ))}
          </div>

          {/* ── Recent bookings ── */}
          <div className="cd-section-title">
            <Clock size={16} style={{ display: 'inline-block', marginRight: '6px' }} /> Recent Bookings
          </div>

          {loading ? (
            <div className="cd-spinner" />
          ) : recentBookings.length === 0 ? (
            <div className="cd-empty">
              <Inbox size={36} style={{ opacity: 0.4, display: 'block', margin: '0 auto 8px' }} />
              No bookings yet — find a service provider to get started!
            </div>
          ) : (
            <div className="cd-bookings">
              {recentBookings.map((b, i) => {
                const provName = b.providerId?.userId?.name || b.providerId?.name || "Provider";
                const category = b.providerId?.category || "";
                const av = provName.charAt(0).toUpperCase();
                const statusCls = `cd-s-${b.status}`;

                return (
                  <Link key={i} to="/bookings" className="cd-booking-row">
                    <div className="cd-booking-avatar">{av}</div>
                    <div className="cd-booking-info">
                      <div className="cd-booking-name">{provName}{category ? ` · ${category}` : ""}</div>
                      <div className="cd-booking-date">{formatDate(b.date || b.createdAt)}</div>
                    </div>
                    <span className={`cd-booking-status ${statusCls}`}>{b.status}</span>
                  </Link>
                );
              })}
            </div>
          )}

          {bookings.length > 5 && (
            <Link to="/bookings" className="cd-view-all">
              View all {bookings.length} bookings <ChevronRight size={13} style={{ display: 'inline-block', marginLeft: '3px', verticalAlign: '-1px' }} />
            </Link>
          )}

        </div>
      </div>
    </>
  );
}

export default CustomerDashboard;
