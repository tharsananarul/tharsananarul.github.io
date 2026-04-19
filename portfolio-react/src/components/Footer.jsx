import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="logo">T<span>.</span></Link>
        <p className="footer-text">© 2026 Tharsanan Arulananthaselvam — BTS Communication</p>
        <div className="footer-links">
          <Link to="/projets">Projets</Link>
          <Link to="/cv">CV</Link>
          <Link to="/competences">Compétences</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
