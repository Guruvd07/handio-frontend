import { useRef, useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   ALL STYLES SELF-CONTAINED — no external CSS.
   Delete video-grid.css from your project.
   Class names are unique hd-vg-* strings that
   cannot clash with any global stylesheet.
───────────────────────────────────────────── */

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap');

  .hd-vg-section {
    position: relative;
    width: 100%;
    background: #030014;
    overflow: hidden;
    padding: 48px 0 40px;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  }

  .hd-vg-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #8b5cf6, #c084fc, transparent);
    animation: hdVgBorder 3s infinite;
  }

  .hd-vg-glow {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 25% 40%, rgba(139,92,246,0.10) 0%, transparent 50%),
      radial-gradient(circle at 75% 60%, rgba(192,132,252,0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  .hd-vg-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
  }

  /* Header */
  .hd-vg-header {
    text-align: center;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .hd-vg-tag {
    display: inline-block;
    background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(192,132,252,0.15));
    border: 1px solid rgba(139,92,246,0.28);
    padding: 5px 16px;
    border-radius: 999px;
    color: #c4b5fd;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  .hd-vg-title {
    font-size: 28px;
    font-weight: 900;
    line-height: 1.15;
    color: white;
    letter-spacing: -0.5px;
    margin: 0;
  }

  .hd-vg-accent {
    background: linear-gradient(135deg, #8b5cf6, #ec4899, #8b5cf6);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: hdVgGrad 3.5s linear infinite;
  }

  .hd-vg-desc {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.6;
    max-width: 400px;
    margin: 0;
  }

  /* Controls */
  .hd-vg-controls {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 14px;
  }

  .hd-vg-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.12);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, transform 0.2s, opacity 0.2s;
    backdrop-filter: blur(8px);
    flex-shrink: 0;
  }

  .hd-vg-btn:hover {
    background: linear-gradient(135deg, #8b5cf6, #c084fc);
    border-color: transparent;
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(139,92,246,0.5);
  }

  .hd-vg-btn:active { transform: scale(0.92); }

  .hd-vg-btn-off {
    opacity: 0;
    pointer-events: none;
    transform: scale(0.8) !important;
  }

  /* Scroll area */
  .hd-vg-scroll {
    overflow-x: auto;
    overflow-y: visible;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin: 0 -20px;
    padding: 8px 20px 20px;
    cursor: grab;
    -webkit-overflow-scrolling: touch;
  }

  .hd-vg-scroll:active { cursor: grabbing; }
  .hd-vg-scroll::-webkit-scrollbar { display: none; }

  /* Track */
  .hd-vg-track {
    display: flex;
    gap: 14px;
    width: fit-content;
    align-items: flex-start;
  }

  /* Individual frame */
  .hd-vg-frame {
    flex: 0 0 auto;
    width: 260px;
    transition: transform 0.3s cubic-bezier(0.175,0.885,0.32,1.275);
  }

  .hd-vg-frame:hover { transform: translateY(-5px); }

  /* Video box — CRITICAL: fixed aspect ratio prevents full-screen expansion */
  .hd-vg-videobox {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9 !important;
    max-height: 200px !important;
    border-radius: 16px;
    overflow: hidden !important;
    background: #100c1f;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 12px 32px -8px rgba(0,0,0,0.65);
    transition: border-color 0.3s, box-shadow 0.3s;
    display: block;
  }

  .hd-vg-frame:hover .hd-vg-videobox {
    border-color: rgba(139,92,246,0.5);
    box-shadow: 0 20px 44px -10px rgba(139,92,246,0.4);
  }

  /* Video itself — contained, never overflows */
  .hd-vg-video {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
    max-height: none !important;
    border-radius: 0 !important;
    transition: transform 0.5s ease;
  }

  .hd-vg-frame:hover .hd-vg-video { transform: scale(1.07); }

  /* Dark gradient over video bottom */
  .hd-vg-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%);
    pointer-events: none;
    z-index: 1;
  }

  /* Play badge */
  .hd-vg-play {
    position: absolute;
    bottom: 8px;
    right: 8px;
    z-index: 2;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(139,92,246,0.85);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 2px;
    opacity: 0;
    transform: scale(0.7);
    transition: opacity 0.2s, transform 0.2s;
  }

  .hd-vg-frame:hover .hd-vg-play {
    opacity: 1;
    transform: scale(1);
  }

  /* Caption */
  .hd-vg-caption {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 9px;
    padding: 0 2px;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .hd-vg-frame:hover .hd-vg-caption { opacity: 1; }

  .hd-vg-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #8b5cf6;
    box-shadow: 0 0 7px #8b5cf6;
    flex-shrink: 0;
    animation: hdVgPulse 2s infinite;
  }

  .hd-vg-label {
    font-size: 12px;
    font-weight: 600;
    background: linear-gradient(135deg, #fff, #c4b5fd);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    white-space: nowrap;
  }

  /* Dot indicators */
  .hd-vg-dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 18px;
  }

  .hd-vg-dot-ind {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255,255,255,0.18);
    transition: width 0.3s, background 0.3s, border-radius 0.3s;
    display: block;
  }

  .hd-vg-dot-on {
    width: 26px !important;
    border-radius: 999px !important;
    background: linear-gradient(90deg, #8b5cf6, #c084fc) !important;
  }

  /* Keyframes */
  @keyframes hdVgBorder {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 1;   }
  }

  @keyframes hdVgGrad {
    0%   { background-position: 0%   50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0%   50%; }
  }

  @keyframes hdVgPulse {
    0%, 100% { opacity: 0.5; transform: scale(1);    }
    50%       { opacity: 1;   transform: scale(1.25); }
  }

  /* ── 480px ── */
  @media (min-width: 480px) {
    .hd-vg-frame       { width: 300px; }
    .hd-vg-videobox    { max-height: 230px !important; }
  }

  /* ── 640px ── */
  @media (min-width: 640px) {
    .hd-vg-section     { padding: 64px 0 56px; }
    .hd-vg-container   { padding: 0 28px; }
    .hd-vg-scroll      { margin: 0 -28px; padding: 8px 28px 24px; }
    .hd-vg-frame       { width: 340px; }
    .hd-vg-videobox    { border-radius: 20px; max-height: 260px !important; }
    .hd-vg-title       { font-size: 36px; }
    .hd-vg-desc        { font-size: 15px; }
    .hd-vg-btn         { width: 48px; height: 48px; }
    .hd-vg-track       { gap: 18px; }
  }

  /* ── 900px ── */
  @media (min-width: 900px) {
    .hd-vg-container   { padding: 0 44px; }
    .hd-vg-scroll      { margin: 0 -44px; padding: 8px 44px 24px; }
    .hd-vg-frame       { width: 380px; }
    .hd-vg-videobox    { max-height: none !important; border-radius: 22px; }
    .hd-vg-title       { font-size: 44px; }
    .hd-vg-track       { gap: 22px; }
    .hd-vg-header      { margin-bottom: 36px; }
  }

  /* ── 1200px ── */
  @media (min-width: 1200px) {
    .hd-vg-section     { padding: 80px 0 72px; }
    .hd-vg-container   { padding: 0 56px; }
    .hd-vg-scroll      { margin: 0 -56px; padding: 8px 56px 28px; }
    .hd-vg-frame       { width: 420px; }
    .hd-vg-title       { font-size: 52px; }
    .hd-vg-track       { gap: 26px; }
  }

  /* Touch */
  @media (hover: none) and (pointer: coarse) {
    .hd-vg-frame:hover           { transform: none; }
    .hd-vg-frame:hover .hd-vg-video { transform: none; }
    .hd-vg-frame:active          { transform: scale(0.98); }
    .hd-vg-frame:hover .hd-vg-play  { opacity: 1; transform: scale(1); }
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .hd-vg-section::before, .hd-vg-accent,
    .hd-vg-dot, .hd-vg-frame, .hd-vg-video,
    .hd-vg-btn, .hd-vg-dot-ind { animation: none; transition: none; }
    .hd-vg-frame:hover { transform: none; }
  }
`;

const videos = [
  { id: 1, videoUrl: "/videos/kitchen.mp4",     title: "Kitchen Excellence"  },
  { id: 2, videoUrl: "/videos/painting.mp4",    title: "Painting Perfection" },
  { id: 3, videoUrl: "/videos/bathroom.mp4",    title: "Bathroom Revival"    },
  { id: 4, videoUrl: "/videos/electrician.mp4", title: "Electrical Mastery"  },
  { id: 5, videoUrl: "/videos/driver.mp4",       title: "Safe Drives"         },
  { id: 6, videoUrl: "/videos/cook.mp4",         title: "Cooking Arts"        },
];

export default function VideoGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft,  setShowLeft]  = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollTo({
      left: scrollRef.current.scrollLeft + (dir === "left" ? -560 : 560),
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{CSS}</style>

      <section className="hd-vg-section">
        <div className="hd-vg-glow" />

        <div className="hd-vg-container">

          {/* Header */}
          <div className="hd-vg-header">
            <span className="hd-vg-tag">✦ Live Preview</span>
            <h2 className="hd-vg-title">
              See Our Services<br />
              <span className="hd-vg-accent">in Action</span>
            </h2>
            <p className="hd-vg-desc">
              Watch real professionals delivering exceptional service
            </p>
          </div>

          {/* Controls */}
          <div className="hd-vg-controls">
            <button
              className={`hd-vg-btn${!showLeft ? " hd-vg-btn-off" : ""}`}
              onClick={() => scroll("left")}
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className={`hd-vg-btn${!showRight ? " hd-vg-btn-off" : ""}`}
              onClick={() => scroll("right")}
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Scroll track */}
          <div className="hd-vg-scroll" ref={scrollRef}>
            <div className="hd-vg-track">
              {videos.map((v) => (
                <div key={v.id} className="hd-vg-frame">
                  <div className="hd-vg-videobox">
                    <video
                      src={v.videoUrl}
                      className="hd-vg-video"
                      loop muted autoPlay playsInline
                    />
                    <div className="hd-vg-overlay" />
                    <div className="hd-vg-play">▶</div>
                  </div>
                  <div className="hd-vg-caption">
                    <span className="hd-vg-dot" />
                    <span className="hd-vg-label">{v.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="hd-vg-dots">
            <span className={`hd-vg-dot-ind${!showLeft            ? " hd-vg-dot-on" : ""}`} />
            <span className={`hd-vg-dot-ind${showLeft && showRight ? " hd-vg-dot-on" : ""}`} />
            <span className={`hd-vg-dot-ind${!showRight           ? " hd-vg-dot-on" : ""}`} />
          </div>

        </div>
      </section>
    </>
  );
}