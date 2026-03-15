'use client';

import { useEffect, useState } from "react";
import { getAllProviders, verifyProvider } from "../services/adminService";

const CSS = `
  .ad-wrap {
    min-height: 100vh;
    background: #0b1120;
    padding: 80px 16px 48px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #f1f5f9;
  }

  .ad-wrap *, .ad-wrap *::before, .ad-wrap *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .ad-container {
    max-width: 1400px;
    margin: 0 auto;
  }

  /* ── Header ── */
  .ad-header {
    margin-bottom: 32px;
    padding-bottom: 20px;
    border-bottom: 1px solid #1e2d47;
  }

  .ad-header h1 {
    font-size: 28px;
    font-weight: 800;
    color: #f8fafc;
    letter-spacing: -0.5px;
    margin-bottom: 6px;
  }

  .ad-header p {
    font-size: 14px;
    color: #64748b;
  }

  /* ── Stats grid ── */
  .ad-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 28px;
  }

  .ad-stat {
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 16px;
    padding: 18px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: default;
  }

  .ad-stat:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }

  .ad-stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
  }

  .ad-stat-total   .ad-stat-icon { background: rgba(59,130,246,0.15); }
  .ad-stat-verified .ad-stat-icon { background: rgba(16,185,129,0.15); }
  .ad-stat-pending .ad-stat-icon  { background: rgba(245,158,11,0.15); }
  .ad-stat-rejected .ad-stat-icon { background: rgba(239,68,68,0.15);  }

  .ad-stat-val {
    font-size: 26px;
    font-weight: 800;
    color: #f1f5f9;
    line-height: 1;
    display: block;
    margin-bottom: 3px;
  }

  .ad-stat-lbl {
    font-size: 11px;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
  }

  /* ── Filters bar ── */
  .ad-filters {
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .ad-tabs {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .ad-tab {
    padding: 8px 16px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    color: #64748b;
    background: transparent;
    border: 1px solid #1e2d47;
    cursor: pointer;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
    font-family: inherit;
    white-space: nowrap;
  }

  .ad-tab:hover { color: #a5b4fc; border-color: #6366f1; }

  .ad-tab-active {
    color: #f1f5f9 !important;
    background: linear-gradient(135deg, #6366f1, #8b5cf6) !important;
    border-color: transparent !important;
    box-shadow: 0 2px 10px rgba(99,102,241,0.35);
  }

  .ad-search input {
    width: 100%;
    padding: 11px 16px;
    background: #0f172a;
    border: 1px solid #1e2d47;
    border-radius: 11px;
    font-size: 13px;
    color: #f1f5f9;
    font-family: inherit;
    transition: border-color 0.2s, box-shadow 0.2s;
    color-scheme: dark;
  }

  .ad-search input::placeholder { color: #475569; }

  .ad-search input:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
  }

  /* ── Loading ── */
  .ad-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 72px 20px;
  }

  .ad-spinner {
    width: 44px;
    height: 44px;
    border: 4px solid #1e2d47;
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: adSpin 0.8s linear infinite;
  }

  .ad-loading p { font-size: 14px; color: #64748b; }

  /* ── No results ── */
  .ad-empty {
    background: #151f32;
    border: 2px dashed #1e2d47;
    border-radius: 16px;
    padding: 56px 20px;
    text-align: center;
    grid-column: 1 / -1;
    color: #64748b;
    font-size: 15px;
  }

  /* ── Providers grid ── */
  .ad-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 40px;
  }

  /* ── Provider card ── */
  .ad-card {
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 18px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }

  .ad-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.4);
    border-color: #6366f1;
  }

  .ad-card-head {
    padding: 18px 20px;
    border-bottom: 1px solid #1e2d47;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
  }

  .ad-card-name {
    font-size: 16px;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 3px;
  }

  .ad-card-email {
    font-size: 12px;
    color: #64748b;
  }

  .ad-badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 12px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .ad-badge-verified {
    background: rgba(16,185,129,0.15);
    color: #34d399;
    border: 1px solid rgba(16,185,129,0.3);
  }

  .ad-badge-pending {
    background: rgba(245,158,11,0.15);
    color: #fbbf24;
    border: 1px solid rgba(245,158,11,0.3);
  }

  .ad-card-details {
    padding: 16px 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    border-bottom: 1px solid #1e2d47;
  }

  .ad-detail {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .ad-detail-lbl {
    font-size: 10px;
    color: #475569;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
  }

  .ad-detail-val {
    font-size: 13px;
    font-weight: 600;
    color: #cbd5e1;
  }

  .ad-cat-pill {
    display: inline-block;
    background: rgba(99,102,241,0.14);
    color: #a5b4fc;
    border: 1px solid rgba(99,102,241,0.25);
    border-radius: 6px;
    padding: 3px 9px;
    font-size: 11px;
    font-weight: 700;
    width: fit-content;
  }

  .ad-price-val { color: #34d399 !important; }

  .ad-stars { color: #fbbf24; font-size: 13px; letter-spacing: 1px; }
  .ad-rating-num { font-size: 12px; color: #64748b; font-weight: 600; }

  .ad-desc {
    padding: 14px 20px;
    border-bottom: 1px solid #1e2d47;
    font-size: 13px;
    color: #64748b;
    line-height: 1.55;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .ad-verify-btn {
    margin: 16px 20px;
    padding: 11px 20px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    border-radius: 11px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.15s;
    box-shadow: 0 3px 12px rgba(99,102,241,0.35);
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .ad-verify-btn:hover  { opacity: 0.88; }
  .ad-verify-btn:active { transform: scale(0.97); }

  /* Scrollbar */
  .ad-wrap ::-webkit-scrollbar       { width: 6px; height: 6px; }
  .ad-wrap ::-webkit-scrollbar-track { background: #0f172a; }
  .ad-wrap ::-webkit-scrollbar-thumb { background: #1e2d47; border-radius: 999px; }
  .ad-wrap ::-webkit-scrollbar-thumb:hover { background: #334155; }

  /* Keyframes */
  @keyframes adSpin {
    to { transform: rotate(360deg); }
  }

  /* 480px */
  @media (min-width: 480px) {
    .ad-stat-val { font-size: 30px; }
  }

  /* 640px */
  @media (min-width: 640px) {
    .ad-wrap    { padding: 88px 24px 56px; }
    .ad-stats   { grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .ad-filters { flex-direction: row; align-items: center; }
    .ad-search  { flex: 1; min-width: 240px; }
    .ad-grid    { grid-template-columns: repeat(2, 1fr); gap: 18px; }
    .ad-header h1 { font-size: 32px; }
  }

  /* 1024px */
  @media (min-width: 1024px) {
    .ad-wrap { padding: 96px 32px 64px; }
    .ad-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  }

  /* 1280px */
  @media (min-width: 1280px) {
    .ad-grid { grid-template-columns: repeat(4, 1fr); }
  }

  /* Touch */
  @media (hover: none) and (pointer: coarse) {
    .ad-card:hover  { transform: none; }
    .ad-stat:hover  { transform: none; }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .ad-spinner, .ad-card, .ad-stat, .ad-verify-btn { animation: none; transition: none; }
    .ad-card:hover { transform: none; }
  }
`;

function AdminDashboard() {
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading]     = useState(false);
  const [filter, setFilter]       = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const load = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token")!;
      const data  = await getAllProviders(token);
      setProviders(data);
    } catch (err) {
      console.error("Failed to load providers", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const verify = async (id: string) => {
    const token = localStorage.getItem("token")!;
    await verifyProvider(id, token);
    load();
  };

  const formatPrice = (p: any) => {
    if (!p.priceAmount) return "Price not set";
    const type = p.priceType
      ? p.priceType.charAt(0).toUpperCase() + p.priceType.slice(1)
      : "";
    return `₹${p.priceAmount.toLocaleString()}${type ? ` / ${type}` : ""}`;
  };

  const stats = {
    total:    providers.length,
    verified: providers.filter(p => p.verified === true).length,
    pending:  providers.filter(p => p.verified === false).length,
    rejected: providers.filter(p => p.verified === "rejected").length,
  };

  const filtered = providers.filter(p => {
    const matchFilter =
      filter === "all" ||
      (filter === "verified" && p.verified === true) ||
      (filter === "pending"  && p.verified === false);

    const q = searchTerm.toLowerCase();
    const matchSearch =
      p.userId?.name?.toLowerCase().includes(q) ||
      p.userId?.email?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q) ||
      p.city?.toLowerCase().includes(q);

    return matchFilter && matchSearch;
  });

  const statCards = [
    { key: "total",    icon: "📊", val: stats.total,    lbl: "Total Providers" },
    { key: "verified", icon: "✓",  val: stats.verified, lbl: "Verified"        },
    { key: "pending",  icon: "⏳", val: stats.pending,  lbl: "Pending"         },
    { key: "rejected", icon: "✕",  val: stats.rejected, lbl: "Rejected"        },
  ];

  const filterTabs = [
    { key: "all",      label: `All (${stats.total})`          },
    { key: "verified", label: `Verified (${stats.verified})`  },
    { key: "pending",  label: `Pending (${stats.pending})`    },
  ];

  return (
    <>
      <style>{CSS}</style>

      <div className="ad-wrap">
        <div className="ad-container">

          {/* Header */}
          <div className="ad-header">
            <h1>Provider Verification</h1>
            <p>Manage and verify service providers</p>
          </div>

          {/* Stats */}
          <div className="ad-stats">
            {statCards.map(s => (
              <div key={s.key} className={`ad-stat ad-stat-${s.key}`}>
                <div className="ad-stat-icon">{s.icon}</div>
                <div>
                  <span className="ad-stat-val">{s.val}</span>
                  <span className="ad-stat-lbl">{s.lbl}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="ad-filters">
            <div className="ad-tabs">
              {filterTabs.map(t => (
                <button
                  key={t.key}
                  className={`ad-tab${filter === t.key ? " ad-tab-active" : ""}`}
                  onClick={() => setFilter(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="ad-search">
              <input
                type="text"
                placeholder="Search by name, email, category, city…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div className="ad-loading">
              <div className="ad-spinner" />
              <p>Loading providers…</p>
            </div>
          )}

          {/* Grid */}
          {!loading && (
            <div className="ad-grid">
              {filtered.length === 0 ? (
                <div className="ad-empty">No providers found</div>
              ) : (
                filtered.map(p => (
                  <div key={p._id} className="ad-card">

                    {/* Head */}
                    <div className="ad-card-head">
                      <div>
                        <div className="ad-card-name">{p.userId?.name || "Unknown"}</div>
                        <div className="ad-card-email">{p.userId?.email || "No email"}</div>
                      </div>
                      <span className={`ad-badge ${p.verified ? "ad-badge-verified" : "ad-badge-pending"}`}>
                        {p.verified ? "Verified" : "Pending"}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="ad-card-details">
                      <div className="ad-detail">
                        <span className="ad-detail-lbl">Category</span>
                        <span className="ad-cat-pill">{p.category}</span>
                      </div>
                      <div className="ad-detail">
                        <span className="ad-detail-lbl">Location</span>
                        <span className="ad-detail-val">{p.area}, {p.city}</span>
                      </div>
                      <div className="ad-detail">
                        <span className="ad-detail-lbl">Rate</span>
                        <span className={`ad-detail-val ad-price-val`}>{formatPrice(p)}</span>
                      </div>
                      <div className="ad-detail">
                        <span className="ad-detail-lbl">Rating</span>
                        <span className="ad-detail-val">
                          <span className="ad-stars">
                            {'★'.repeat(Math.round(p.averageRating || 0))}
                            {'☆'.repeat(5 - Math.round(p.averageRating || 0))}
                          </span>
                          {' '}
                          <span className="ad-rating-num">{p.averageRating?.toFixed(1) || '0.0'}</span>
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    {p.description && (
                      <div className="ad-desc">{p.description}</div>
                    )}

                    {/* Verify button */}
                    {!p.verified && (
                      <button className="ad-verify-btn" onClick={() => verify(p._id)}>
                        ✓ Verify Provider
                      </button>
                    )}

                  </div>
                ))
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;