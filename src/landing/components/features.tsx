export default function Features() {
  return (
    <section className="relative">

      {/* Background shapes */}

      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <img
          src="/images/blurred-shape-gray.svg"
          width={760}
          height={668}
          alt=""
          className="max-w-none"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="border-t py-16 md:py-24">

          {/* Section header */}

          <div className="mx-auto max-w-3xl text-center pb-12">

            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">
              Our Platform
            </span>

            <h2 className="pb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
              Book Trusted Home Services Easily
            </h2>

            <p className="text-lg text-indigo-200/65">
              Handio connects customers with verified service professionals
              for everyday home needs like repairs, cleaning, and maintenance.
            </p>

          </div>

          {/* Dashboard / platform preview */}

          <div className="flex justify-center pb-16">

            <img
              src="/images/handio-dashboard.png"
              width={1100}
              height={500}
              alt="Handio platform preview"
              className="rounded-xl shadow-2xl"
            />

          </div>

          {/* Feature grid */}

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

            <article>
              <h3 className="mb-2 font-semibold text-gray-200">
                Verified Professionals
              </h3>
              <p className="text-indigo-200/65">
                All service providers are verified and trained to ensure
                reliable and high-quality service.
              </p>
            </article>

            <article>
              <h3 className="mb-2 font-semibold text-gray-200">
                Easy Booking
              </h3>
              <p className="text-indigo-200/65">
                Book services in seconds and choose a time slot that works best
                for you.
              </p>
            </article>

            <article>
              <h3 className="mb-2 font-semibold text-gray-200">
                Transparent Reviews
              </h3>
              <p className="text-indigo-200/65">
                Read real customer ratings and reviews before selecting a
                service professional.
              </p>
            </article>

            <article>
              <h3 className="mb-2 font-semibold text-gray-200">
                Wide Range of Services
              </h3>
              <p className="text-indigo-200/65">
                From electricians and plumbers to deep cleaning and pest
                control — find everything in one place.
              </p>
            </article>

            <article>
              <h3 className="mb-2 font-semibold text-gray-200">
                Secure Platform
              </h3>
              <p className="text-indigo-200/65">
                Safe payments, verified professionals and reliable customer
                support.
              </p>
            </article>

            <article>
              <h3 className="mb-2 font-semibold text-gray-200">
                Flexible Scheduling
              </h3>
              <p className="text-indigo-200/65">
                Choose service time slots that fit your schedule and manage
                bookings easily.
              </p>
            </article>

          </div>

        </div>

      </div>

    </section>
  )
}