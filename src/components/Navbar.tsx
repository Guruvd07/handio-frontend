'use client';

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import logo from "../logo/logo.png";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../i18n/translations";
import "./Navbar.css";

/* ── SVG icon components ── */
const IconDashboard = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const IconSearch = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);

const IconBookings = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    <path d="m9 16 2 2 4-4"/>
  </svg>
);

const IconMessages = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const IconAdmin = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const IconChevron = ({ open }: { open: boolean }) => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const IconCustomer = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconProvider = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconLogout = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

function Navbar() {
  const navigate    = useNavigate();
  const location    = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [role, setRole]                         = useState<string | null>(null);
  const [loggedIn, setLoggedIn]                 = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen]     = useState(false);
  const [scrolled, setScrolled]                 = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी',   flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी',   flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা',   flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்',   flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు',  flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ',   flag: '🇮🇳' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setShowLangDropdown(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  useEffect(() => {
    const r = localStorage.getItem("role");
    const t = localStorage.getItem("token");
    setRole(r); setLoggedIn(!!t);
  }, [location]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getDashboardLink = () => {
    if (role === "customer") return "/customer/dashboard";
    if (role === "provider") return "/provider/dashboard";
    if (role === "admin")    return "/admin/dashboard";
    return "/";
  };

  const RoleIcon = role === "provider" ? IconProvider : IconCustomer;
  const roleName = role === "customer" ? "Customer" : role === "provider" ? "Provider" : "Admin";

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Handio" className="navbar-logo-img" />
        </Link>

        {/* Desktop nav */}
        <div className="navbar-links desktop-menu">
          {loggedIn && (
            <>
              {role === "customer" && (
                <>
                  <Link to="/customer/dashboard" className="nav-link">
                    <IconDashboard /> Dashboard
                  </Link>
                  <Link to="/search" className="nav-link">
                    <IconSearch /> {t('navbar.search') || "Search"}
                  </Link>
                  <Link to="/bookings" className="nav-link">
                    <IconBookings /> {t('navbar.myBookings') || "My Bookings"}
                  </Link>
                  <Link to="/messages" className="nav-link">
                    <IconMessages /> Messages
                  </Link>
                </>
              )}
              {role === "provider" && (
                <>
                  <Link to="/provider/dashboard" className="nav-link">
                    <IconDashboard /> {t('navbar.dashboard') || "Dashboard"}
                  </Link>
                  <Link to="/messages" className="nav-link">
                    <IconMessages /> Messages
                  </Link>
                </>
              )}
              {role === "admin" && (
                <Link to="/admin/dashboard" className="nav-link">
                  <IconAdmin /> {t('navbar.admin') || "Admin"}
                </Link>
              )}
            </>
          )}

          {/* Language */}
          <div className="language-dropdown" ref={dropdownRef}>
            <button className="language-toggle-btn" onClick={() => setShowLangDropdown(v => !v)}>
              <IconGlobe />
              <span className="lang-code">{language.toUpperCase()}</span>
              <IconChevron open={showLangDropdown} />
            </button>
            {showLangDropdown && (
              <div className="language-menu">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`language-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => { setLanguage(lang.code); setShowLangDropdown(false); }}
                  >
                    <span className="lang-flag">{lang.flag}</span>
                    <span className="lang-name">{lang.name}</span>
                    {language === lang.code && <IconCheck />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Auth */}
          {!loggedIn ? (
            <div className="auth-buttons">
              <Link to="/login"    className="nav-link login-link">Sign In</Link>
              <Link to="/register" className="nav-link register-link">Join Free</Link>
            </div>
          ) : (
            <div className="user-menu">
              <Link to={getDashboardLink()} className="user-profile">
                <div className="avatar"><RoleIcon /></div>
                <span className="user-name">{roleName}</span>
              </Link>
              <button onClick={logout} className="logout-btn" title="Logout">
                <IconLogout />
                <span className="logout-text">Logout</span>
              </button>
            </div>
          )}
        </div>

        {/* Hamburger */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>

        {/* Mobile menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <img src={logo} alt="Handio" className="mobile-logo-img" />
            <span className="mobile-logo-text">Handio</span>
          </div>

          <div className="mobile-menu-links">
            {loggedIn ? (
              <>
                <div className="mobile-divider" />
                {role === "customer" && (
                  <>
                    <Link to="/customer/dashboard" className="mobile-nav-link"><IconDashboard /> Dashboard</Link>
                    <Link to="/search"             className="mobile-nav-link"><IconSearch />   {t('navbar.search') || "Search"}</Link>
                    <Link to="/bookings"            className="mobile-nav-link"><IconBookings /> {t('navbar.myBookings') || "My Bookings"}</Link>
                    <Link to="/messages"            className="mobile-nav-link"><IconMessages /> Messages</Link>
                  </>
                )}
                {role === "provider" && (
                  <>
                    <Link to="/provider/dashboard" className="mobile-nav-link"><IconDashboard /> {t('navbar.dashboard') || "Dashboard"}</Link>
                    <Link to="/messages"           className="mobile-nav-link"><IconMessages /> Messages</Link>
                  </>
                )}
                {role === "admin" && (
                  <Link to="/admin/dashboard" className="mobile-nav-link"><IconAdmin /> Admin Panel</Link>
                )}
                <div className="mobile-divider" />
                <button onClick={logout} className="mobile-logout-btn">
                  <IconLogout /> Logout
                </button>
              </>
            ) : (
              <div className="mobile-auth-buttons">
                <Link to="/login"    className="mobile-login-btn">Sign In</Link>
                <Link to="/register" className="mobile-register-btn">Join Free →</Link>
              </div>
            )}

            <div className="mobile-divider" />
            <div className="mobile-language">
              <span className="mobile-language-label"><IconGlobe /> Language</span>
              <div className="mobile-language-grid">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`mobile-lang-option ${language === lang.code ? 'active' : ''}`}
                    onClick={() => { setLanguage(lang.code); setMobileMenuOpen(false); }}
                  >
                    <span className="mobile-lang-flag">{lang.flag}</span>
                    <span className="mobile-lang-name">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;