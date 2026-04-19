import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > lastY && y > 200 && !menuOpen)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY, menuOpen])

  const handleLogoHover = (e) => {
    e.currentTarget.classList.add('glitch')
    setTimeout(() => e.currentTarget.classList.remove('glitch'), 700)
  }

  const menuVariants = {
    closed: { opacity: 0, x: 20, scale: 0.95, transition: { duration: 0.2 } },
    open: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } }
  }

  const links = [
    { to: "/projets", label: "Projets" },
    { to: "/cv", label: "CV" },
    { to: "/competences", label: "Compétences" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{ 
        transform: hidden ? 'translateY(-110%)' : 'translateY(0)', 
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s, padding 0.3s' 
      }}
    >
      <NavLink to="/" className="logo" onMouseEnter={handleLogoHover}>T<span>.</span></NavLink>

      {/* Desktop Links */}
      <ul className="nav-links desktop-only">
        {links.map(link => (
          <li key={link.to}>
            <NavLink to={link.to} className={({ isActive }) => isActive ? 'active' : ''}>{link.label}</NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul 
            className="nav-links mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{
              display: 'flex', flexDirection: 'column', position: 'absolute',
              top: '80px', right: '6vw', gap: '12px', zIndex: 200,
              background: 'rgba(13, 21, 37, 0.95)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(188, 217, 245, 0.15)', borderRadius: '24px',
              padding: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              minWidth: '200px'
            }}
          >
            {links.map((link, i) => (
              <motion.li 
                key={link.to}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <NavLink 
                  to={link.to} 
                  className={({ isActive }) => isActive ? 'active' : ''} 
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: '1.1rem', display: 'block', padding: '8px 0' }}
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ zIndex: 201 }}
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', transition: '0.3s' }}></span>
        <span style={{ opacity: menuOpen ? 0 : 1, transition: '0.3s' }}></span>
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: '0.3s' }}></span>
      </motion.button>
    </nav>
  )
}

