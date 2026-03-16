'use client';

import React, { useState, useEffect } from "react";
import { registerUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Register.css";

function Register() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"customer" | "provider">("customer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const navigate = useNavigate();

  // Password strength checker
  useEffect(() => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]+/)) strength += 25;
    if (password.match(/[A-Z]+/)) strength += 25;
    if (password.match(/[0-9]+/)) strength += 25;
    if (password.match(/[$@#&!]+/)) strength += 25;
    setPasswordStrength(Math.min(strength, 100));
  }, [password]);

  const handleRegister = async () => {
    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError(t('register.fillAllFields'));
      return;
    }

    if (password !== confirmPassword) {
      setError(t('register.passwordMismatch'));
      return;
    }

    if (!agreeTerms) {
      setError(t('register.agreeTerms'));
      return;
    }

    if (passwordStrength < 50) {
      setError(t('register.weakPassword'));
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t('register.invalidEmail'));
      return;
    }
    
    setError("");
    setLoading(true);
    
    try {
      const data = await registerUser(name, email, password, role);

      const token = data?.token;
      const userRole = data?.user?.role || role;

      if (!token) {
        throw new Error("Invalid registration response");
      }

      // Save auth
      localStorage.setItem("token", token);
      localStorage.setItem("role", userRole);
      
      if (data?.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // Notify navbar / app auth change
      window.dispatchEvent(new Event("authChanged"));
      window.dispatchEvent(new Event("storage"));

      // Navigate based on role
      if (userRole === "provider") {
        navigate("/create-provider-profile");
      } else {
        navigate("customer/dashboard");
      }

    } catch (err: any) {
      console.error("Registration error:", err);
      
      if (err.response?.status === 409) {
        setError(t('register.emailExists'));
      } else if (err.response?.data?.msg) {
        setError(err.response.data.msg);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError(t('register.genericError'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  return (
    <div className="register-page">
      {/* Background Elements */}
      <div className="register-bg-gradient"></div>
      <div className="register-bg-pattern"></div>
      <div className="register-bg-circle circle-1"></div>
      <div className="register-bg-circle circle-2"></div>
      
      <div className="register-container">
        {/* Left Side - Branding */}
        <div className="register-brand">
          <div className="brand-content">
            <div className="brand-logo">
              <span className="logo-icon">✦</span>
              <span className="logo-text">Handio</span>
            </div>
            
            <h2 className="brand-title">
              {t('register.join')} <span className="gradient-text">Handio</span> {t('register.today')}
            </h2>
            
            <p className="brand-description">
              {role === "customer" 
                ? t('register.customerDescription')
                : t('register.providerDescription')}
            </p>

            <div className="brand-features">
              {role === "customer" ? (
                <>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('register.customerFeature1')}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('register.customerFeature2')}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('register.customerFeature3')}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('register.customerFeature4')}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('register.providerFeature1')}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('register.providerFeature2')}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('register.providerFeature3')}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{t('register.providerFeature4')}</span>
                  </div>
                </>
              )}
            </div>

            <div className="brand-testimonial">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "{t('register.testimonial')}"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍🔧</div>
                <div className="author-info">
                  <span className="author-name">{t('register.testimonialAuthor')}</span>
                  <span className="author-title">{t('register.testimonialTitle')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="register-form-container">
          <div className="register-card">
            <div className="form-header">
              <h2>{t('register.title')}</h2>
              <p>{t('register.subtitle')}</p>
            </div>

            {error && (
              <div className="error-alert">
                <span className="alert-icon">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <div className="form-content">
              {/* Role Selection */}
              <div className="role-selector">
                <button
                  type="button"
                  className={`role-btn ${role === "customer" ? "active" : ""}`}
                  onClick={() => setRole("customer")}
                >
                  <span className="role-icon">👤</span>
                  <div className="role-text">
                    <span className="role-title">{t('register.customerRole')}</span>
                    <span className="role-desc">{t('register.customerDesc')}</span>
                  </div>
                </button>
                <button
                  type="button"
                  className={`role-btn ${role === "provider" ? "active" : ""}`}
                  onClick={() => setRole("provider")}
                >
                  <span className="role-icon">🔧</span>
                  <div className="role-text">
                    <span className="role-title">{t('register.providerRole')}</span>
                    <span className="role-desc">{t('register.providerDesc')}</span>
                  </div>
                </button>
              </div>

              {/* Name Input */}
              <div className="input-group">
                <label htmlFor="name">
                  <span className="label-icon">👤</span>
                  {t('register.fullName')}
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder={t('register.fullNamePlaceholder')}
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                  className={error && !name ? 'error' : ''}
                  autoComplete="name"
                />
              </div>

              {/* Email Input */}
              <div className="input-group">
                <label htmlFor="email">
                  <span className="label-icon">📧</span>
                  {t('register.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t('register.emailPlaceholder')}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={loading}
                  className={error && !email ? 'error' : ''}
                  autoComplete="email"
                />
              </div>

              {/* Password Input */}
              <div className="input-group">
                <label htmlFor="password">
                  <span className="label-icon">🔒</span>
                  {t('register.password')}
                </label>
                <div className="password-input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t('register.passwordPlaceholder')}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={loading}
                    className={error && !password ? 'error' : ''}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    aria-label={showPassword ? t('register.hidePassword') : t('register.showPassword')}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                
                {/* Password Strength Meter */}
                {password && (
                  <div className="password-strength">
                    <div className="strength-bars">
                      <div className={`strength-bar ${passwordStrength >= 25 ? 'active' : ''}`}></div>
                      <div className={`strength-bar ${passwordStrength >= 50 ? 'active' : ''}`}></div>
                      <div className={`strength-bar ${passwordStrength >= 75 ? 'active' : ''}`}></div>
                      <div className={`strength-bar ${passwordStrength >= 100 ? 'active' : ''}`}></div>
                    </div>
                    <span className="strength-text">
                      {passwordStrength < 25 && t('register.weak')}
                      {passwordStrength >= 25 && passwordStrength < 50 && t('register.fair')}
                      {passwordStrength >= 50 && passwordStrength < 75 && t('register.good')}
                      {passwordStrength >= 75 && t('register.strong')}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="input-group">
                <label htmlFor="confirmPassword">
                  <span className="label-icon">🔒</span>
                  {t('register.confirmPassword')}
                </label>
                <div className="password-input-wrapper">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder={t('register.confirmPasswordPlaceholder')}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={loading}
                    className={error && !confirmPassword ? 'error' : ''}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    tabIndex={-1}
                    aria-label={showConfirmPassword ? t('register.hidePassword') : t('register.showPassword')}
                  >
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <span className="password-error">{t('register.passwordMismatch')}</span>
                )}
              </div>

              {/* Terms Agreement */}
              <div className="terms-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={e => setAgreeTerms(e.target.checked)}
                  />
                  <span className="checkbox-text">
                    {t('register.agreeTerms')}{' '}
                    <Link to="/terms" className="terms-link">{t('register.termsOfService')}</Link>
                    {' '}{t('register.and')}{' '}
                    <Link to="/privacy" className="terms-link">{t('register.privacyPolicy')}</Link>
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button
                onClick={handleRegister}
                className="register-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading-spinner">
                    <span className="spinner"></span>
                    {t('register.creating')}
                  </span>
                ) : (
                  <span>
                    {t('register.create')}
                    <span className="btn-arrow">→</span>
                  </span>
                )}
              </button>

              {/* Login Link */}
              <p className="login-prompt">
                {t('register.haveAccount')}{' '}
                <Link to="/login" className="login-link">
                  {t('register.signIn')}
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

export default Register;
