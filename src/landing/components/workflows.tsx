import "./workflows.css";

export default function Workflows() {
  return (
    <section className="handio-features">

      <div className="features-container">

        <div className="section-header">

          <span className="tag">Why Choose Handio</span>

          <h1 className="title">
             Book Trusted Home Services Easily
          </h1>

          <p className="subtitle">
            Handio connects homeowners with verified professionals for
            electricians, plumbers, cleaning and many more services.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div className="card-glow"></div>

            <img src="/images/cleaner3.jpg" alt="Verified Professionals" />

            <h3>Verified Professionals</h3>

            <p>
              Every provider on Handio is verified to ensure quality,
              reliability and trust.
            </p>
          </div>


          <div className="feature-card">
            <div className="card-glow"></div>

            <img src="/images/booking.jpg" alt="Easy Booking" />

            <h3>Easy Booking</h3>

            <p>
              Book trusted home services instantly with a simple and
              seamless booking process.
            </p>
          </div>


          <div className="feature-card">
            <div className="card-glow"></div>

            <img src="/images/rating.jpg" alt="Transparent Reviews" />

            <h3>Transparent Reviews</h3>

            <p>
              Check real ratings and reviews from customers before choosing
              your provider.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}