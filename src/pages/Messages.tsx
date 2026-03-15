import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const CSS = `
  .hd-msgs-page {
    min-height: 100vh;
    background: #0b1120;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    padding: 80px 16px 48px;
    color: #f1f5f9;
  }

  .hd-msgs-page *, .hd-msgs-page *::before, .hd-msgs-page *::after {
    box-sizing: border-box; margin: 0; padding: 0;
  }

  .hd-msgs-container {
    max-width: 640px;
    margin: 0 auto;
  }

  /* Header */
  .hd-msgs-header {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .hd-msgs-title {
    font-size: 24px;
    font-weight: 800;
    color: #f8fafc;
    letter-spacing: -0.5px;
  }

  .hd-msgs-count {
    background: rgba(99,102,241,0.15);
    color: #a5b4fc;
    border: 1px solid rgba(99,102,241,0.28);
    border-radius: 999px;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 700;
  }

  /* List card */
  .hd-msgs-list {
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 20px;
    overflow: hidden;
  }

  /* Conversation row */
  .hd-conv-item {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    border-bottom: 1px solid #1e2d47;
    text-decoration: none;
    color: inherit;
    transition: background 0.18s ease;
    position: relative;
  }

  .hd-conv-item:last-child { border-bottom: none; }

  .hd-conv-item:hover { background: rgba(99,102,241,0.07); }

  /* Avatar */
  .hd-conv-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 800;
    color: white;
    flex-shrink: 0;
    box-shadow: 0 0 0 2px rgba(99,102,241,0.3);
    text-transform: uppercase;
  }

  /* Info */
  .hd-conv-info { flex: 1; min-width: 0; }

  .hd-conv-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 4px;
  }

  .hd-conv-name {
    font-size: 15px;
    font-weight: 700;
    color: #f1f5f9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hd-conv-time {
    font-size: 11px;
    color: #475569;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .hd-conv-preview {
    font-size: 13px;
    color: #64748b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Unread dot */
  .hd-conv-unread {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #6366f1;
    flex-shrink: 0;
    box-shadow: 0 0 6px rgba(99,102,241,0.6);
  }

  /* Chevron */
  .hd-conv-arrow {
    color: #334155;
    flex-shrink: 0;
    transition: color 0.18s, transform 0.18s;
  }

  .hd-conv-item:hover .hd-conv-arrow {
    color: #6366f1;
    transform: translateX(3px);
  }

  /* Empty state */
  .hd-msgs-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 64px 20px;
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 20px;
    text-align: center;
  }

  .hd-msgs-empty-icon { font-size: 48px; opacity: 0.4; }
  .hd-msgs-empty-title { font-size: 16px; font-weight: 700; color: #f1f5f9; }
  .hd-msgs-empty-sub   { font-size: 13px; color: #475569; }

  /* Loading skeleton */
  .hd-msgs-skeleton {
    background: #151f32;
    border: 1px solid #1e2d47;
    border-radius: 20px;
    overflow: hidden;
  }

  .hd-skel-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    border-bottom: 1px solid #1e2d47;
  }

  .hd-skel-row:last-child { border-bottom: none; }

  .hd-skel-circle {
    width: 48px; height: 48px; border-radius: 50%;
    background: linear-gradient(90deg, #1e2d47 25%, #243550 50%, #1e2d47 75%);
    background-size: 200% 100%;
    animation: hdMsgShimmer 1.4s infinite;
    flex-shrink: 0;
  }

  .hd-skel-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; }

  .hd-skel-line {
    height: 12px; border-radius: 6px;
    background: linear-gradient(90deg, #1e2d47 25%, #243550 50%, #1e2d47 75%);
    background-size: 200% 100%;
    animation: hdMsgShimmer 1.4s infinite;
  }

  .hd-skel-line-short { width: 55%; }

  @keyframes hdMsgShimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .hd-msgs-page     { padding: 72px 12px 40px; }
    .hd-conv-item     { padding: 14px 16px; }
    .hd-conv-avatar   { width: 42px; height: 42px; font-size: 16px; }
    .hd-msgs-title    { font-size: 20px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hd-skel-circle, .hd-skel-line,
    .hd-conv-arrow { animation: none; transition: none; }
  }
`;

function Messages() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadConversations = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/messages/conversations", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setConversations(res.data);
    } catch (err) {
      console.error("Failed to load conversations", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadConversations(); }, []);

  const getInitial = (name: string) =>
    name ? name.charAt(0).toUpperCase() : "?";

  const formatTime = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - d.getTime()) / 86400000);
    if (diffDays === 0) return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7)  return d.toLocaleDateString([], { weekday: "short" });
    return d.toLocaleDateString([], { month: "short", day: "numeric" });
  };

  return (
    <>
      <style>{CSS}</style>

      <div className="hd-msgs-page">
        <div className="hd-msgs-container">

          {/* Header */}
          <div className="hd-msgs-header">
            <h2 className="hd-msgs-title">💬 Messages</h2>
            {!loading && conversations.length > 0 && (
              <span className="hd-msgs-count">{conversations.length} chats</span>
            )}
          </div>

          {/* Loading skeleton */}
          {loading && (
            <div className="hd-msgs-skeleton">
              {[1,2,3].map(n => (
                <div key={n} className="hd-skel-row">
                  <div className="hd-skel-circle" />
                  <div className="hd-skel-lines">
                    <div className="hd-skel-line" />
                    <div className="hd-skel-line hd-skel-line-short" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty */}
          {!loading && conversations.length === 0 && (
            <div className="hd-msgs-empty">
              <span className="hd-msgs-empty-icon">💬</span>
              <span className="hd-msgs-empty-title">No conversations yet</span>
              <span className="hd-msgs-empty-sub">Start chatting with a service provider</span>
            </div>
          )}

          {/* List */}
          {!loading && conversations.length > 0 && (
            <div className="hd-msgs-list">
              {conversations.map((c, i) => (
                <Link key={i} to={`/chat/${c.user._id}`} className="hd-conv-item">

                  {/* Avatar with initial */}
                  <div className="hd-conv-avatar">
                    {getInitial(c.user.name)}
                  </div>

                  {/* Info */}
                  <div className="hd-conv-info">
                    <div className="hd-conv-top">
                      <span className="hd-conv-name">{c.user.name}</span>
                      {c.lastMessageTime && (
                        <span className="hd-conv-time">{formatTime(c.lastMessageTime)}</span>
                      )}
                    </div>
                    <div className="hd-conv-preview">
                      {c.lastMessage || "Tap to open chat"}
                    </div>
                  </div>

                  {/* Unread dot if applicable */}
                  {c.unread && <div className="hd-conv-unread" />}

                  {/* Chevron */}
                  <svg className="hd-conv-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Messages;