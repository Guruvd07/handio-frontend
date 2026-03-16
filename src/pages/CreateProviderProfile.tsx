'use client';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SERVICE_CATEGORIES,
  INDIAN_CITIES,
  COMMON_AREAS
} from "../constants/providerOptions";
import "./CreateProviderProfile.css";
import api from "../api/axios";

interface FormData {
  category: string;
  city: string;
  area: string;
  description: string;
  priceAmount: string;
  priceType: string;
  servicesAvailable: string[];
}

const PRICING_TYPES = [
  { value: "hour", label: "Per Hour" },
  { value: "day", label: "Per Day" },
  { value: "month", label: "Per Month" },
  { value: "visit", label: "Per Visit" },
  { value: "session", label: "Per Session" },
  { value: "fixed", label: "Fixed Price" }
];

const AVAILABLE_SERVICES = {
  "Plumber": ["Leak Repair", "Pipe Installation", "Toilet Fix", "Drainage", "Water Heater"],
  "Electrician": ["Wiring", "Lighting", "Circuit Breaker", "Power Installation", "Troubleshooting"],
  "Carpenter": ["Furniture", "Door/Window", "Shelving", "Flooring", "Repair"],
  "Painter": ["Wall Painting", "Door Painting", "Exterior", "Interior", "Texture Coating"],
  "AC Repair": ["Cleaning", "Installation", "Repair", "Maintenance", "Servicing"],
  "Cleaning": ["Home Cleaning", "Office Cleaning", "Post Renovation", "Deep Cleaning", "Regular"],
  "Home Tutor": ["Math", "Science", "English", "History", "All Subjects"],
  "Cook": ["Indian", "Continental", "Catering", "Diet Planning", "Personal Chef"],
  "Driver": ["Cab Services", "Delivery", "Long Distance", "Event", "Personal"],
  "Gardener": ["Landscaping", "Maintenance", "Planting", "Pruning", "Pest Control"],
  "Pest Control": ["Termites", "Cockroaches", "Mosquitoes", "Rodents", "General"],
  "Appliance Repair": ["Refrigerator", "Washing Machine", "Microwave", "Oven", "General"]
};

function CreateProviderProfile() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    category: "",
    city: "",
    area: "",
    description: "",
    priceAmount: "",
    priceType: "",
    servicesAvailable: []
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setForm(prev => ({
      ...prev,
      servicesAvailable: prev.servicesAvailable.includes(service)
        ? prev.servicesAvailable.filter(s => s !== service)
        : [...prev.servicesAvailable, service]
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.category) newErrors.category = "Please select a service category";
    if (!form.city) newErrors.city = "City is required";
    if (!form.area) newErrors.area = "Area/Locality is required";
    if (!form.priceAmount) newErrors.priceAmount = "Price amount is required";
    if (!form.priceType) newErrors.priceType = "Please select pricing type";
    if (!form.description) newErrors.description = "Professional description is required";
    // if (form.description.length < 50) newErrors.description = "Description should be at least 50 characters";
    if (form.servicesAvailable.length === 0) newErrors.services = "Please select at least one service";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Login required");
      return;
    }

    if (!validateForm()) {
      // Scroll to top to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setLoading(true);
    try {
      await api.post(
        "/providers/profile",
        {
          ...form,
          priceAmount: Number(form.priceAmount)
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setSuccess(true);
      setTimeout(() => {
        navigate("/provider/dashboard");
      }, 2000);
    } catch (err: any) {
      alert(err.response?.data?.error || "Failed to submit profile");
    } finally {
      setLoading(false);
    }
  };

  const categoryServices: string[] =
    form.category && form.category in AVAILABLE_SERVICES
      ? AVAILABLE_SERVICES[form.category as keyof typeof AVAILABLE_SERVICES]
      : ["General Service"];

  if (success) {
    return (
      <div className="provider-page">
        <div className="success-container">
          <div className="success-animation">
            <div className="success-circle">
              <svg className="success-check" viewBox="0 0 52 52">
                <circle className="success-check-circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="success-check-path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
          </div>
          <h2 className="success-title">Profile Submitted Successfully!</h2>
          <p className="success-message">Your provider profile has been submitted for verification.</p>
          <div className="success-card">
            <div className="success-card-icon">⏳</div>
            <div className="success-card-content">
              <h4>Under Review</h4>
              <p>Our admin team will review your profile within 24-48 hours. You'll receive a notification once verified.</p>
            </div>
          </div>
          <p className="pending-text">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="provider-page">
      <div className="provider-container">
        {/* Header Section */}
        <div className="provider-header">
          <div className="provider-header-content"> <br /><br /><br /><br /><br /><br />
            <span className="provider-badge">✦ Provider Registration</span>
            <h1 className="provider-title">
              Create Your <span className="title-gradient">Provider Profile</span>
            </h1>
            <p className="provider-subtitle">
              Join our network of trusted professionals and start earning
            </p>
          </div>
          
          <div className="provider-stats">
            <div className="stat-item">
              <span className="stat-value">50K+</span>
              <span className="stat-label">Customers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">24-48h</span>
              <span className="stat-label">Verification</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">4.8</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="provider-form-container">
          <form className="provider-form" onSubmit={submit}>
            
            {/* Progress Steps */}
            <div className="form-progress">
              <div className="progress-step active">
                <span className="step-number">1</span>
                <span className="step-label">Basic Info</span>
              </div>
              <div className="progress-line"></div>
              <div className="progress-step active">
                <span className="step-number">2</span>
                <span className="step-label">Services</span>
              </div>
              <div className="progress-line"></div>
              <div className="progress-step active">
                <span className="step-number">3</span>
                <span className="step-label">Pricing</span>
              </div>
              <div className="progress-line"></div>
              <div className="progress-step active">
                <span className="step-number">4</span>
                <span className="step-label">Description</span>
              </div>
            </div>

            {/* BASIC INFORMATION SECTION */}
            <div className="form-section">
              <div className="section-header">
                <h3>Basic Information</h3>
                <p>Tell us about your profession and location</p>
              </div>

              <div className="form-group">
                <label htmlFor="category">
                  Service Category <span className="required">*</span>
                </label>
                <div className="select-wrapper">
                  <select 
                    id="category"
                    name="category" 
                    onChange={handleChange} 
                    value={form.category}
                    disabled={loading}
                    className={errors.category ? 'error' : ''}
                  >
                    <option value="">Select your service category</option>
                    {SERVICE_CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
                {errors.category && <span className="error-message">{errors.category}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">
                    City <span className="required">*</span>
                  </label>
                  <div className="input-with-icon">
                    <span className="input-icon"></span>
                    <input
                      id="city"
                      name="city"
                      list="cities"
                      placeholder="e.g., Mumbai"
                      onChange={handleChange}
                      value={form.city}
                      disabled={loading}
                      className={errors.city ? 'error' : ''}
                    />
                  </div>
                  <datalist id="cities">
                    {INDIAN_CITIES.map(c => (
                      <option key={c} value={c} />
                    ))}
                  </datalist>
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="area">
                    Area/Locality <span className="required">*</span>
                  </label>
                  <div className="input-with-icon">
                    <span className="input-icon"></span>
                    <input
                      id="area"
                      name="area"
                      list="areas"
                      placeholder="e.g., Andheri"
                      onChange={handleChange}
                      value={form.area}
                      disabled={loading}
                      className={errors.area ? 'error' : ''}
                    />
                  </div>
                  <datalist id="areas">
                    {COMMON_AREAS.map(a => (
                      <option key={a} value={a} />
                    ))}
                  </datalist>
                  {errors.area && <span className="error-message">{errors.area}</span>}
                </div>
              </div>
            </div>

            {/* SERVICES AVAILABLE SECTION */}
            {categoryServices.length > 0 && (
              <div className="form-section">
                <div className="section-header">
                  <h3>Services You Offer</h3>
                  <p>Select all the services you provide</p>
                </div>
                
                <div className="services-grid">
                  {categoryServices.map((service: string) => (
                    <label 
                      key={service} 
                      className={`service-card ${form.servicesAvailable.includes(service) ? 'selected' : ''}`}
                    >
                      <input
                        type="checkbox"
                        checked={form.servicesAvailable.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        disabled={loading}
                      />
                      <span className="service-check-icon">
                        {form.servicesAvailable.includes(service) ? '✓' : ''}
                      </span>
                      <span className="service-name">{service}</span>
                    </label>
                  ))}
                </div>
                {errors.services && <span className="error-message">{errors.services}</span>}
              </div>
            )}

            {/* PRICING SECTION */}
            <div className="form-section">
              <div className="section-header">
                <h3>Service Pricing</h3>
                <p>Set your professional rates</p>
              </div>

              <div className="pricing-section">
                <div className="pricing-row">
                  <div className="form-group">
                    <label htmlFor="priceAmount">
                      Amount (₹) <span className="required">*</span>
                    </label>
                    <div className="input-with-icon">
                      <span className="input-icon"></span>
                      <input
                        id="priceAmount"
                        type="number"
                        name="priceAmount"
                        placeholder="Enter amount"
                        value={form.priceAmount}
                        onChange={handleChange}
                        disabled={loading}
                        min="0"
                        className={errors.priceAmount ? 'error' : ''}
                      />
                    </div>
                    {errors.priceAmount && <span className="error-message">{errors.priceAmount}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="priceType">
                      Pricing Type <span className="required">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        id="priceType"
                        name="priceType"
                        value={form.priceType}
                        onChange={handleChange}
                        disabled={loading}
                        className={errors.priceType ? 'error' : ''}
                      >
                        <option value="">Select pricing type</option>
                        {PRICING_TYPES.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <span className="select-arrow">▼</span>
                    </div>
                    {errors.priceType && <span className="error-message">{errors.priceType}</span>}
                  </div>
                </div>

                {form.priceAmount && form.priceType && (
                  <div className="price-preview">
                    <div className="price-preview-content">
                      <span className="price-preview-label">Your Rate:</span>
                      <span className="price-preview-value">
                        ₹{form.priceAmount} / {
                          form.priceType === "hour" ? "hour" :
                          form.priceType === "day" ? "day" :
                          form.priceType === "month" ? "month" :
                          form.priceType === "visit" ? "visit" :
                          form.priceType === "session" ? "session" : "fixed"
                        }
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* DESCRIPTION SECTION */}
            <div className="form-section">
              <div className="section-header">
                <h3>About You</h3>
                <p>Tell customers about your experience and expertise</p>
              </div>

              <div className="form-group">
                <label htmlFor="description">
                  Professional Description <span className="required">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe your experience, expertise, certifications, and what makes you unique..."
                  value={form.description}
                  onChange={handleChange}
                  disabled={loading}
                  rows={6}
                  className={errors.description ? 'error' : ''}
                />
                <div className="textarea-footer">
                  <span className="char-count">
                    {form.description.length} characters
                  </span>
                </div>
                {errors.description && <span className="error-message">{errors.description}</span>}
              </div>
            </div>

            {/* FORM ACTIONS */}
            <div className="form-actions">
              <button 
                type="button"
                className="btn-secondary"
                onClick={() => navigate(-1)}
                disabled={loading}
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-small"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Profile for Verification
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </div>

            <div className="info-box">
              <div className="info-icon">ℹ️</div>
              <div className="info-content">
                <h4>What happens next?</h4>
                <p>Your profile will be reviewed by our admin team within 24-48 hours. You'll receive a notification once verified and can start accepting bookings immediately after.</p>
              </div>
            </div>
          </form>

          {/* Sidebar with tips */}
          <div className="form-sidebar">
            <div className="sidebar-card">
              <ul className="tips-list">
                <li>Add a detailed description to get more bookings</li>
                <li>Competitive pricing helps you stand out</li>
                <li>Complete your profile to get verified faster</li>
                <li>Add portfolio images after profile creation</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h4>📋 Requirements</h4>
              <ul className="requirements-list">
                <li>
                  <span className="req-dot"></span>
                  Valid ID proof
                </li>
                <li>
                  <span className="req-dot"></span>
                  Professional certification (if applicable)
                </li>
                <li>
                  <span className="req-dot"></span>
                  Address verification
                </li>
                <li>
                  <span className="req-dot"></span>
                  Bank account details
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProviderProfile;