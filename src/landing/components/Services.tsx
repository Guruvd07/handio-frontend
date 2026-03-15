import { useState } from 'react'
import styles from './services.module.css'

const services = [
  { title: "Kitchen Cleaning", image: "/images/kitchen-cleaning.jpg", rating: 4.8, reviews: 128, category: "Cleaning", professionals: 24 },
  { title: "Living & Bedroom", image: "/images/bedroom.jpg", rating: 4.9, reviews: 95, category: "Cleaning", professionals: 18 },
  { title: "Plumber", image: "/images/plumber.jpg", rating: 4.7, reviews: 256, category: "Repair", professionals: 32 },
  { title: "Electrician", image: "/images/electrician.jpg", rating: 4.8, reviews: 312, category: "Repair", professionals: 28 },
  { title: "Driver", image: "/images/driver.jpg", rating: 4.6, reviews: 78, category: "Transport", professionals: 15 },
  { title: "Cook", image: "/images/cook.jpg", rating: 4.9, reviews: 145, category: "Kitchen", professionals: 22 },
  { title: "Carpenter", image: "/images/carpenter.jpg", rating: 4.7, reviews: 89, category: "Repair", professionals: 19 },
  { title: "Nanny", image: "/images/nanny.jpg", rating: 4.8, reviews: 67, category: "Care", professionals: 14 },
]

const stats = [
  { number: "50K+", label: "Happy Customers" },
  { number: "200+", label: "Expert Pros" },
  { number: "4.8★", label: "Avg Rating" },
]

const trustItems = [
  { label: "Verified Professionals", icon: "✓" },
  { label: "5-Star Rated", icon: "★" },
  { label: "Insured & Bonded", icon: "🛡" },
  { label: "24/7 Support", icon: "⏰" },
]

export default function ServicesGrid() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className={styles.sgSection}>
      <div className={styles.sgBgGlow} />

      <div className={styles.sgContainer}>

        {/* ── Header ── */}
        <div className={styles.sgHeader}>
          <span className={styles.sgEyebrow}>⚡ Trusted by 50K+ Customers</span>

          <h2 className={styles.sgTitle}>
            Premium Services at Your{' '}
            <span className={styles.sgTitleAccent}>Fingertips</span>
          </h2>

          <p className={styles.sgDesc}>
            Professional, verified, and ready to serve you 24/7
          </p>

          {/* Stats */}
          <div className={styles.sgStats}>
            {stats.map((s, i) => (
              <div key={i} className={styles.sgStatItem}>
                <span className={styles.sgStatNum}>{s.number}</span>
                <span className={styles.sgStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        <div className={styles.sgGrid}>
          {services.map((svc, i) => (
            <div
              key={i}
              className={`${styles.sgCard} ${hovered === i ? styles.sgCardHovered : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className={styles.sgImgBox}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  className={styles.sgImg}
                  loading="lazy"
                />
                <div className={styles.sgImgOverlay} />

                {/* Pros badge */}
                <span className={styles.sgProsBadge}>
                  👤 {svc.professionals} pros
                </span>

                {/* Hover action buttons */}
                <div className={styles.sgActions}>
                  {/* <button
                    className={styles.sgActionBtn}
                    onClick={e => e.stopPropagation()}
                    aria-label="Save"
                  >
                    🔖
                  </button> */}
                  {/* <button
                    className={`${styles.sgActionBtn} ${styles.sgBookBtn}`}
                    onClick={e => e.stopPropagation()}
                    aria-label="Book"
                  >
                    +
                  </button> */}
                </div>
              </div>

              {/* Details */}
              <div className={styles.sgDetails}>
                <h3 className={styles.sgCardTitle}>{svc.title}</h3>

                <div className={styles.sgMeta}>
                  <span className={styles.sgRating}>
                    ★ {svc.rating}
                    <span className={styles.sgReviews}> ({svc.reviews})</span>
                  </span>
                  <span className={styles.sgCategory}>{svc.category}</span>
                </div>

                {/* Mobile book button */}
                {/* <button className={styles.sgMobileBook}>
                  Book Now
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* ── Trust bar ── */}
        <div className={styles.sgTrust}>
          {trustItems.map((t, i) => (
            <div key={i} className={styles.sgTrustItem}>
              <span className={styles.sgTrustIcon}>{t.icon}</span>
              <span>{t.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}