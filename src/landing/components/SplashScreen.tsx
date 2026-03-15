import { useEffect, useState } from 'react'
import './splash-screen.css'

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 20) // Adjust speed here (lower = faster)

    // Cleanup interval
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // When progress reaches 100, fade out splash screen
    if (progress === 100) {
      setFadeOut(true)
      setTimeout(() => {
        onComplete()
      }, 800) // Wait for fade out animation
    }
  }, [progress, onComplete])

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        {/* Animated Logo/Name */}
        <div className="splash-logo-container">
          <h1 className="splash-company-name">Handio</h1>
          <div className="splash-tagline-container">
            <span className="splash-tagline">Professional Home Services</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="splash-progress-container">
          <div className="splash-progress-bar">
            <div 
              className="splash-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="splash-progress-text">{progress}%</span>
        </div>

        {/* Loading Dots */}
        <div className="splash-loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  )
}