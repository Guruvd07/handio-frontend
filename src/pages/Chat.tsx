import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../socket";
import api from "../api/axios";

const CSS = `
  .hd-chat-page {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    padding-top: 72px;   /* offset for fixed navbar */
    max-width: 780px;
    margin: 0 auto;
    background: #0b1120;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #f1f5f9;
    overflow: hidden;
    position: relative;
  }

  .hd-chat-page *, .hd-chat-page *::before, .hd-chat-page *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ── Ambient glow ── */
  .hd-chat-page::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 200px;
    background: radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Header ── */
  .hd-chat-head {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px 20px;
    background: rgba(21,31,50,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #1e2d47;
    position: relative;
    z-index: 2;
    flex-shrink: 0;
  }

  .hd-chat-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: 800;
    color: white;
    flex-shrink: 0;
    box-shadow: 0 0 0 2px rgba(99,102,241,0.35);
  }

  .hd-chat-head-info { flex: 1; min-width: 0; }

  .hd-chat-head-name {
    font-size: 15px;
    font-weight: 700;
    color: #f1f5f9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hd-chat-head-status {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: #34d399;
    font-weight: 500;
    margin-top: 2px;
  }

  .hd-chat-status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #34d399;
    box-shadow: 0 0 6px #34d399;
    animation: hdChatPulse 2s infinite;
    flex-shrink: 0;
  }

  /* ── Messages area ── */
  .hd-chat-msgs {
    flex: 1;
    overflow-y: auto;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    z-index: 1;
    scroll-behavior: smooth;
  }

  .hd-chat-msgs::-webkit-scrollbar       { width: 4px; }
  .hd-chat-msgs::-webkit-scrollbar-track { background: transparent; }
  .hd-chat-msgs::-webkit-scrollbar-thumb { background: #1e2d47; border-radius: 999px; }

  /* Date divider */
  .hd-chat-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0 6px;
    font-size: 11px;
    color: #475569;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
  }

  .hd-chat-divider::before,
  .hd-chat-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #1e2d47;
  }

  /* Bubble row */
  .hd-msg-row {
    display: flex;
    align-items: flex-end;
    gap: 8px;
  }

  .hd-msg-row-me    { justify-content: flex-end; }
  .hd-msg-row-other { justify-content: flex-start; }

  /* Small avatar for other person */
  .hd-msg-mini-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 800;
    color: white;
    flex-shrink: 0;
    margin-bottom: 2px;
  }

  /* Bubble */
  .hd-bubble {
    max-width: 68%;
    padding: 10px 14px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.5;
    word-break: break-word;
    position: relative;
    animation: hdBubbleIn 0.2s ease;
  }

  .hd-bubble-me {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border-bottom-right-radius: 5px;
    box-shadow: 0 4px 14px rgba(99,102,241,0.28);
  }

  .hd-bubble-other {
    background: #151f32;
    color: #e2e8f0;
    border: 1px solid #1e2d47;
    border-bottom-left-radius: 5px;
  }

  .hd-bubble-time {
    display: block;
    font-size: 10px;
    margin-top: 4px;
    opacity: 0.6;
    text-align: right;
  }

  /* Empty state */
  .hd-chat-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #475569;
    font-size: 14px;
  }

  .hd-chat-empty-icon {
    font-size: 42px;
    opacity: 0.4;
  }

  /* ── Input bar ── */
  .hd-chat-input-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: rgba(21,31,50,0.9);
    backdrop-filter: blur(12px);
    border-top: 1px solid #1e2d47;
    position: relative;
    z-index: 2;
    flex-shrink: 0;
  }

  .hd-chat-input {
    flex: 1;
    padding: 11px 16px;
    background: #0f172a;
    border: 1px solid #1e2d47;
    border-radius: 999px;
    font-size: 14px;
    color: #f1f5f9;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    color-scheme: dark;
  }

  .hd-chat-input::placeholder { color: #475569; }

  .hd-chat-input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
  }

  .hd-chat-send {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    transition: opacity 0.2s, transform 0.15s;
    box-shadow: 0 4px 14px rgba(99,102,241,0.35);
  }

  .hd-chat-send:hover  { opacity: 0.88; }
  .hd-chat-send:active { transform: scale(0.92); }

  .hd-chat-send:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  /* ── Keyframes ── */
  @keyframes hdBubbleIn {
    from { opacity: 0; transform: translateY(6px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0)   scale(1);    }
  }

  @keyframes hdChatPulse {
    0%, 100% { opacity: 0.6; transform: scale(1);    }
    50%       { opacity: 1;   transform: scale(1.25); }
  }

  /* ── Mobile ── */
  @media (max-width: 640px) {
    .hd-chat-page  { max-width: 100%; border-radius: 0; }
    .hd-bubble     { max-width: 80%; }
    .hd-chat-msgs  { padding: 16px 12px; }
  }

  /* My name tag in header */
  .hd-chat-my-tag {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
    background: rgba(99,102,241,0.12);
    border: 1px solid rgba(99,102,241,0.25);
    border-radius: 999px;
    padding: 5px 12px 5px 6px;
    flex-shrink: 0;
  }

  .hd-chat-my-initial {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 800;
    color: white;
    flex-shrink: 0;
  }

  .hd-chat-my-name {
    font-size: 12px;
    font-weight: 600;
    color: #a5b4fc;
    white-space: nowrap;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ── Reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    .hd-bubble, .hd-chat-status-dot { animation: none; transition: none; }
  }
`;

function Chat() {
  const { id } = useParams();
  const receiverId = id;

  const [messages, setMessages]         = useState<any[]>([]);
  const [text, setText]                 = useState("");
  const [receiverName, setReceiverName] = useState("...");
  const [receiverInitial, setReceiverInitial] = useState("?");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const storedUser = localStorage.getItem("user");
  const user       = storedUser ? JSON.parse(storedUser) : null;
  const myId       = user?._id || user?.id;
  const myName     = user?.name || "Me";
  const myInitial  = myName.charAt(0).toUpperCase();

  const loadMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get(`/messages/${receiverId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data: any[] = Array.isArray(res.data) ? res.data : res.data?.messages || [];
      setMessages(data);

      // Try to extract receiver name from populated message objects
      for (const m of data) {
        if (m.sender && typeof m.sender === "object" && m.sender._id !== myId && m.sender.name) {
          setReceiverName(m.sender.name);
          setReceiverInitial(m.sender.name.charAt(0).toUpperCase());
          break;
        }
        if (m.receiver && typeof m.receiver === "object" && m.receiver._id !== myId && m.receiver.name) {
          setReceiverName(m.receiver.name);
          setReceiverInitial(m.receiver.name.charAt(0).toUpperCase());
          break;
        }
      }
    } catch (err) {
      console.error("Failed to load messages", err);
    }
  };

  useEffect(() => {
    if (!myId) return;
    socket.emit("join", myId);
    loadMessages();

    const handleReceive = (msg: any) => {
      setMessages(prev => {
        // Deduplicate: if we already added this message optimistically
        // (same sender + same text + sent within last 5 seconds), skip it
        const isDupe = prev.some(m => {
          const mSender = typeof m.sender === "object" ? m.sender._id : m.sender;
          const msgSender = typeof msg.sender === "object" ? msg.sender._id : msg.sender;
          return (
            mSender === msgSender &&
            m.message === msg.message &&
            m._optimistic === true
          );
        });
        if (isDupe) {
          // Replace the optimistic placeholder with the real server message
          return prev.map(m => {
            const mSender = typeof m.sender === "object" ? m.sender._id : m.sender;
            const msgSender = typeof msg.sender === "object" ? msg.sender._id : msg.sender;
            if (m._optimistic && mSender === msgSender && m.message === msg.message) {
              return msg; // swap optimistic with real
            }
            return m;
          });
        }
        return [...prev, msg];
      });
    };
    socket.on("receive_message", handleReceive);
    return () => { socket.off("receive_message", handleReceive); };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;
    const msg = { sender: myId, receiver: receiverId, message: text };
    socket.emit("send_message", msg);
    // Add optimistically so sender sees it immediately.
    // The _optimistic flag lets the socket handler deduplicate
    // if the server echoes the message back to the sender.
    setMessages(prev => [...prev, { ...msg, _optimistic: true, createdAt: new Date().toISOString() }]);
    setText("");
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const getTime = (msg: any) => {
    if (msg.createdAt) {
      return new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <style>{CSS}</style>

      <div className="hd-chat-page">

        {/* Header */}
        <div className="hd-chat-head">
          <div className="hd-chat-avatar">{receiverInitial}</div>
          <div className="hd-chat-head-info">
            <div className="hd-chat-head-name">{receiverName}</div>
            <div className="hd-chat-head-status">
              <span className="hd-chat-status-dot" />
              Online
            </div>
          </div>
          {/* My name tag */}
          <div className="hd-chat-my-tag">
            <span className="hd-chat-my-initial">{myInitial}</span>
            <span className="hd-chat-my-name">{myName}</span>
          </div>
        </div>

        {/* Messages */}
        <div className="hd-chat-msgs">
          {messages.length === 0 ? (
            <div className="hd-chat-empty">
              <span className="hd-chat-empty-icon">💬</span>
              <span>No messages yet. Say hello!</span>
            </div>
          ) : (
            <>
              <div className="hd-chat-divider">Today</div>
              {messages.map((m, i) => {
                const senderId = typeof m.sender === "object" ? m.sender._id : m.sender;
                const isMe     = senderId === myId;

                return (
                  <div key={i} className={`hd-msg-row ${isMe ? "hd-msg-row-me" : "hd-msg-row-other"}`}>
                    {!isMe && <div className="hd-msg-mini-avatar">{receiverInitial}</div>}
                    <div className={`hd-bubble ${isMe ? "hd-bubble-me" : "hd-bubble-other"}`}>
                      {m.message}
                      <span className="hd-bubble-time">{getTime(m)}</span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="hd-chat-input-bar">
          <input
            className="hd-chat-input"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type a message…"
          />
          <button
            className="hd-chat-send"
            onClick={sendMessage}
            disabled={!text.trim()}
            aria-label="Send message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </>
  );
}

export default Chat;

// create-provider-profile