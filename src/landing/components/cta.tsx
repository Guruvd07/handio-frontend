'use client';

import { useState } from "react";
import styles from "./cta.module.css";

export default function Cta() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className={styles.hdCtaWrap}>
      <div className={styles.hdCtaInner}>

        {/* LEFT — slogan */}
        <div className={styles.hdCtaLeft}>
          <span className={styles.hdCtaEyebrow}>Home Services, Reimagined</span>

          <h2 className={styles.hdCtaHeadline}>
            Your Home,<br />
            <span className={styles.hdCtaAccent}>Our Experts.</span>
          </h2>

          <p className={styles.hdCtaTagline}>
            From plumbing to painting — find trusted professionals near you in
            minutes. Quality work, fair prices, zero hassle.
          </p>

          <ul className={styles.hdCtaPoints}>
            <li><span className={styles.hdCtaCheck}>✓</span> Verified professionals only</li>
            <li><span className={styles.hdCtaCheck}>✓</span> Instant booking, real-time updates</li>
            <li><span className={styles.hdCtaCheck}>✓</span> Rated &amp; reviewed by your neighbours</li>
          </ul>

          <a href="/login" className={styles.hdCtaBtn}>
            Get Started →
          </a>
        </div>

        {/* RIGHT — image */}
        <a href="/login" className={styles.hdCtaRight}>
          {!imageError ? (
            <img
              src="/images/poster2.jpg"
              alt="Handio home services"
              className={styles.hdCtaImg}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={styles.hdCtaFallback}>
              <span className={styles.hdCtaFallbackText}>HANDIO</span>
              <span className={styles.hdCtaFallbackSub}>Home Services</span>
            </div>
          )}
          <div className={styles.hdCtaGlow} />
        </a>

      </div>
    </section>
  );
}