import { Link } from 'react-router-dom'
import './Logo.css' // Import the CSS file

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-gradient">
        HANDIO
      </span>
    </Link>
  )
}