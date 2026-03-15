import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./logo";
import styles from "./header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.content}>

          {/* Logo */}
          <div className={styles.brand}>
            <Logo />
          </div>

          {/* Desktop buttons */}
          <div className={styles.desktopNav}>
            <Link to="/login"    className={styles.signinBtn}>Sign In</Link>
            <Link to="/register" className={styles.signupBtn}>
              Register
              <svg className={styles.btnIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`${styles.drawer} ${isMobileMenuOpen ? styles.drawerOpen : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className={styles.drawerNav}>
            <Link to="/login"    className={styles.drawerSignin} onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
            <Link to="/register" className={styles.drawerSignup} onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
          </nav>
        </div>

        {/* Backdrop */}
        {isMobileMenuOpen && (
          <div className={styles.backdrop} onClick={() => setIsMobileMenuOpen(false)} />
        )}
      </div>
    </header>
  );
}