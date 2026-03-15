import './hero.css';

export default function HeroHome() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Hero content */}
        <div className="hero-content">
          {/* Left side - Text content */}
          <div className="hero-text-content">
            {/* Premium Badge */}
            <div className="hero-badge" data-aos="fade-up" data-aos-delay={0}>
              ✦ <span>Handio</span> ✦ Premium Services
            </div>

            {/* Main Headline */}
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay={100}>
            Find Trusted Home Service Professionals Near You
            </h1>
            
            {/* Subheadline */}
            <p className="hero-subheadline" data-aos="fade-up" data-aos-delay={200}>
              Book verified electricians, plumbers, cleaners and other professionals instantly.
            </p>
            
            {/* Description with Icon */}
            <div className="hero-description" data-aos="fade-up" data-aos-delay={250}>
              <span className="hero-description-icon"></span>
              Handio connects you with trusted service providers near you.
            </div>
            
            {/* CTA Buttons */}
            <div className="hero-buttons" data-aos="fade-up" data-aos-delay={300}>
              <div className="hero-button-wrapper">
                <a className="hero-button-primary" href="/register">
                  <span className="hero-button-text">
                    Find Services
                    <span className="hero-button-arrow"> →</span>
                  </span>
                </a>
              </div>
              
              <div className="hero-button-wrapper">
                <a className="hero-button-secondary" href="/register">
                  Become a Provider
                </a>
              </div>
            </div>

            {/* Trust Badge with Stars */}
            <div className="hero-trust-badge" data-aos="fade-up" data-aos-delay={350}>
              <span className="hero-trust-stars">★★★★★</span>
              Trusted by 10,000+ happy homeowners
            </div>
          </div>

          {/* Right side - Image with Stats */}
          <div className="hero-right-content">
            {/* Main Image with Overlay */}
            <div className="hero-image-wrapper" data-aos="fade-up" data-aos-delay={400}>
              <img
                src="/images/hero-image-01.png"
                alt="Handio - Home Service Professionals in Pune"
                width={1104}
                height={576}
                className="hero-image"
                loading="eager"
              />
              
              {/* Stats Overlay */}
              <div className="hero-image-overlay">
                <div className="hero-image-stats">
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Professionals</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">10k+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">4.9</span>
                    <span className="stat-label">Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div> 
    </section> 
  ) 
}