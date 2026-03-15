import { useState, useEffect } from "react";

import SplashScreen from "./components/SplashScreen";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import Home from "./pages/Home";

import AOS from "aos";
import "aos/dist/aos.css";

function LandingPage() {

  const [showSplash, setShowSplash] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // AOS animation init
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-cubic",
    });

    // preload images
    const preloadImages = [
      "/images/kitchen-cleaning.jpg",
      "/images/bedroom.jpg",
      "/images/plumber.jpg",
      "/images/electrician.jpg",
      "/images/driver.jpg",
      "/images/cook.jpg",
      "/images/carpenter.jpg",
      "/images/nanny.jpg",
      "/images/painter.jpg",
      "/images/bathroom.jpg",
      "/images/poster1.jpg",
    ];

    const imagePromises = preloadImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    });

    const maxTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    document.body.classList.add("splash-active");

    return () => {
      clearTimeout(maxTimer);
      document.body.classList.remove("splash-active");
    };

  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    document.body.classList.remove("splash-active");
  };

  return (
    <>
      {showSplash && loading && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

        {!showSplash && (
          <div className="landing-page flex min-h-screen flex-col overflow-hidden bg-gray-950 font-inter text-base text-gray-200 antialiased">

            <Header />

            <main className="flex-grow">
              <Home />
            </main>

            <Footer />

          </div>
        )}
    </>
  );
}

export default LandingPage;