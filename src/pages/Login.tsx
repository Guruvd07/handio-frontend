'use client';

import React, { useState, useEffect } from "react";
import { loginUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Login.css";

function Login() {
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      setError(t('login.fillAllFields') || "Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await loginUser(email, password);

      const role  = data?.user?.role;
      const token = data?.token;

      if (!role || !token) throw new Error("Invalid login response");

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      if (data?.user) localStorage.setItem("user", JSON.stringify(data.user));

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      window.dispatchEvent(new Event("authChanged"));
      window.dispatchEvent(new Event("storage"));

      // ── Role-based redirect ──
      const roleRoutes: Record<string, string> = {
        customer: "/customer/dashboard",   // ← fixed (was /search)
        provider: "/provider/dashboard",
        admin:    "/admin/dashboard",
      };

      navigate(roleRoutes[role] || "/");

    } catch (err: any) {
      console.error("Login error:", err);
      if (err.response?.status === 401) {
        setError(t('login.invalidCredentials') || "Invalid email or password");
      } else if (err.response?.status === 404) {
        setError(t('login.userNotFound') || "User not found");
      } else if (err.response?.data?.msg) {
        setError(err.response.data.msg);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError(t('login.genericError') || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="login-page">
      <div className="login-bg-gradient"></div>
      <div className="login-bg-pattern"></div>
      <div className="login-bg-circle circle-1"></div>
      <div className="login-bg-circle circle-2"></div>

      <div className="login-container">
        {/* Left — Branding */}
        <div className="login-brand">
          <div className="brand-content">
            <div className="brand-logo">
              <span className="logo-icon">✦</span>
              <span className="logo-text">Handio</span>
            </div>

            <h2 className="brand-title">
              {t('login.welcomeBack') || "Welcome back to"}{' '}
              <span className="gradient-text">Handio</span>
            </h2>

            <p className="brand-description">
              {t('login.brandDescription') ||
                "Your trusted partner for professional home services. Login to book services, track appointments, and more."}
            </p>

            <div className="brand-features">
              {[
                t('login.feature1') || "50K+ Happy Customers",
                t('login.feature2') || "200+ Expert Professionals",
                t('login.feature3') || "24/7 Customer Support",
                t('login.feature4') || "100% Satisfaction Guaranteed",
              ].map((f, i) => (
                <div key={i} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="brand-testimonial">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "{t('login.testimonial') || "Best home service platform I've ever used. Quick, reliable, and professional!"}"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <span className="author-name">{t('login.testimonialAuthor') || "Rahul Sharma"}</span>
                  <span className="author-title">{t('login.testimonialTitle') || "Happy Customer"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="login-form-container">
          <div className="login-card">
            <div className="form-header">
              <h2>{t('login.title') || "Sign in to your account"}</h2>
              <p>{t('login.subtitle') || "Welcome back! Please enter your details"}</p>
            </div>

            {error && (
              <div className="error-alert">
                <span className="alert-icon">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <div className="form-content">
              <div className="input-group">
                <label htmlFor="email">
                  <span className="label-icon">📧</span>
                  {t('login.email') || "Email"}
                </label>
                <input
                  id="email" type="email"
                  placeholder={t('login.emailPlaceholder') || "Enter your email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyPress}
                  disabled={loading}
                  className={error && !email ? 'error' : ''}
                  autoComplete="email"
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">
                  <span className="label-icon">🔒</span>
                  {t('login.password') || "Password"}
                </label>
                <div className="password-input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t('login.passwordPlaceholder') || "Enter your password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={loading}
                    className={error && !password ? 'error' : ''}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="checkbox-text">{t('login.rememberMe') || "Remember me"}</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  {t('login.forgotPassword') || "Forgot password?"}
                </Link>
              </div>

              <button
                onClick={handleLogin}
                className="login-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading-spinner">
                    <span className="spinner"></span>
                    {t('login.signingIn') || "Signing in..."}
                  </span>
                ) : (
                  <span>
                    {t('login.signIn') || "Sign in"}
                    <span className="btn-arrow">→</span>
                  </span>
                )}
              </button>

              <p className="signup-prompt">
                {t('login.noAccount') || "Don't have an account?"}{' '}
                <Link to="/register" className="signup-link">
                  {t('login.createOne') || "Create one"}
                  <span className="link-arrow">→</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;