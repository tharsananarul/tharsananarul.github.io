import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import Reveal from '../components/Reveal'
import { motion, useScroll, useTransform } from 'framer-motion'

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const length = newText.length
    const promise = new Promise(r => this.resolve = r)
    this.queue = Array.from({ length }, (_, i) => ({
      to: newText[i],
      start: Math.floor(Math.random() * 15),
      end: Math.floor(Math.random() * 15) + 15,
    }))
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let out = '', done = 0
    for (const q of this.queue) {
      if (this.frame >= q.end) { done++; out += q.to }
      else if (this.frame >= q.start) {
        out += `<span class="scramble-char">${this.chars[Math.floor(Math.random() * this.chars.length)]}</span>`
      } else out += q.to
    }
    this.el.innerHTML = out
    if (done === this.queue.length) this.resolve()
    else { this.frameRequest = requestAnimationFrame(this.update); this.frame++ }
  }
}

export default function Home() {
  const highlightRef = useRef(null)
  const descRef = useRef(null)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    if (highlightRef.current) {
      const orig = highlightRef.current.textContent
      setTimeout(() => new TextScramble(highlightRef.current).setText(orig), 900)
    }
    // Typing cursor
    if (descRef.current) {
      const tc = document.createElement('span')
      tc.className = 'typing-cursor'
      descRef.current.appendChild(tc)
    }
    // Magnetic buttons
    document.querySelectorAll('.btn-primary, .btn-ghost, .project-link').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btn.style.transition = 'none'
        btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`
      })
      btn.addEventListener('mouseleave', () => {
        btn.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        btn.style.transform = ''
      })
    })
    // Tilt cards
    document.querySelectorAll('.project-card, .stat-card').forEach(card => {
      let shine = null
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        card.style.transition = 'none'
        card.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-5px) scale(1.02)`
        if (!shine) { shine = document.createElement('div'); shine.className = 'card-shine'; card.appendChild(shine) }
        shine.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(188,217,245,0.1) 0%, transparent 65%)`
      })
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        card.style.transform = ''
        if (shine) shine.style.background = 'none'
      })
    })
    // Counter animation
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat-number').forEach(el => {
            const target = parseInt(el.textContent.replace(/\D/g, ''))
            if (!target) return
            let start = null
            const step = (ts) => {
              if (!start) start = ts
              const progress = Math.min((ts - start) / 1200, 1)
              const ease = 1 - Math.pow(1 - progress, 3)
              if (el.childNodes[0]) el.childNodes[0].nodeValue = Math.floor(ease * target)
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          })
          counterObs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('.apropos-home-stats').forEach(el => counterObs.observe(el))
  }, [])

  return (
    <PageWrapper>
      {/* HERO */}
      <section className="hero" ref={containerRef}>
        <motion.div className="hero-bg" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="grid-overlay"></div>
        </motion.div>
        
        <div className="hero-content">
          <div className="hero-text">
            <Reveal delay={0.1}>
              <p className="hero-tag">BTS Communication · Design Graphique</p>
            </Reveal>
            <Reveal delay={0.2} y={50}>
              <h1 className="hero-title">
                Bonjour,<br />je suis<br /><span className="highlight" ref={highlightRef}>Tharsanan</span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="hero-desc" ref={descRef}>
                Étudiant en 2ème année de BTS Communication au Lycée Jacques Brel.
                Je transforme les idées en expériences visuelles mémorables —
                identités de marque, contenus digitaux et communication visuelle. 🚀
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="hero-cta">
                <Link to="/projets" className="btn-primary">Voir mes projets</Link>
                <Link to="/contact" className="btn-ghost">Me contacter</Link>
              </div>
            </Reveal>
          </div>

          <div className="hero-image">
            <Reveal delay={0.3} y={60}>
              <div className="image-frame">
                <img src="images/ma-photo/photo-cv.png" alt="Tharsanan" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                <div className="photo-placeholder" style={{ display: 'none' }}>
                  <span>TA</span>
                </div>
                <div className="image-border"></div>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="hero-badge">
                <div className="badge-dot"></div>
                Disponible pour projets
              </div>
            </Reveal>
          </div>
        </div>
        
        <div className="scroll-hint">
          <div className="scroll-line"></div>
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {['Communication Visuelle','Design Graphique','Motion Design','Photoshop','Illustrator','UI/UX Design','Photographie','Storytelling'].map((t, i) => (
            <span key={i} className="marquee-item">{t}</span>
          ))}
          {['Communication Visuelle','Design Graphique','Motion Design','Photoshop','Illustrator','UI/UX Design','Photographie','Storytelling'].map((t, i) => (
            <span key={i + '2'} className="marquee-item">{t}</span>
          ))}
        </div>
      </div>

            </p>
            <p className="apropos-desc">
              Mon parcours m'a permis d'explorer divers aspects du multimédia, de l'audiovisuel au graphisme,
              tout en développant des compétences en communication digitale et en marketing.
            </p>
            <Link to="/cv" className="btn-ghost">Voir mon parcours complet →</Link>
          </div>
          <div className="apropos-home-stats reveal delay-1">
            <div className="stat-card"><span className="stat-number">3<span className="stat-plus">+</span></span><span className="stat-label">Ans d'expérience</span></div>
            <div className="stat-card"><span className="stat-number">1<span className="stat-plus">+</span></span><span className="stat-label">Expériences pro</span></div>
            <div className="stat-card"><span className="stat-number">6<span className="stat-plus">+</span></span><span className="stat-label">Logiciels maîtrisés</span></div>
            <div className="stat-card"><span className="stat-number">3</span><span className="stat-label">Langues</span></div>
          </div>
        </div>
      </section>

      {/* PROJETS APERÇU */}
      <section className="section">
        <div style={{ maxWidth: 1200, margin: '0 auto 48px' }}>
          <p className="section-tag reveal">Mes réalisations</p>
          <h2 className="section-title reveal delay-1">Projets <span className="highlight">récents</span></h2>
        </div>
        <div className="projects-grid">
          <div className="project-card large reveal" onClick={() => window.location.hash = '#/projets/ux'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/ui-ux-designs.png" alt="UI/UX Designs" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg, #1B4FFF, #6b8cff)', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Syne', fontWeight: 700 }}><span>UI/UX WORKS</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">Design &amp; Développement</span>
              <h3>UI/UX Works</h3>
              <p>Plateforme de révisions BTS Com &amp; Projet HopePower. Découvrez mes travaux en design d'interfaces.</p>
              <Link to="/projets/ux" className="project-link">Voir les projets →</Link>
            </div>
          </div>

          <div className="project-card large reveal" onClick={() => window.location.hash = '#/projets/futsal'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/futsal-drancy.png" alt="Futsal Drancy" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder p1" style={{ display: 'none' }}><span>Futsal Drancy</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">Communication · Stage &amp; Service Civique</span>
              <h3>Futsal Drancy</h3>
              <p>Création de supports visuels et gestion des réseaux sociaux pour le club.</p>
              <Link to="/projets/futsal" className="project-link">Voir le projet →</Link>
            </div>
          </div>

          <div className="project-card reveal" onClick={() => window.location.hash = '#/projets'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/projets-uni.png" alt="Projets académiques" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder p2" style={{ display: 'none' }}><span>Projets</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">BTS Communication &amp; Universitaire</span>
              <h3>Projets académiques</h3>
              <p>BTS Communication, Alda, Sans Bavure — mes projets de formation.</p>
              <Link to="/projets" className="project-link">Voir les projets →</Link>
            </div>
          </div>

          <div className="project-card reveal delay-1" onClick={() => window.location.hash = '#/projets/perso'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/projets-crea.png" alt="Créations personnelles" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder p3" style={{ display: 'none' }}><span>Créations</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">Créations personnelles</span>
              <h3>Projets créatifs personnels</h3>
              <p>Explorations graphiques et créations en dehors du cursus scolaire.</p>
              <Link to="/projets/perso" className="project-link">Voir le projet →</Link>
            </div>
          </div>
        </div>
        <div className="voir-tout reveal">
          <Link to="/projets" className="btn-ghost">Voir tous mes projets →</Link>
        </div>
      </section>

      {/* CONTACT HOME */}
      <section className="section contact-home">
        <div className="contact-home-inner reveal">
          <div className="contact-home-text">
            <p className="section-tag">Contact</p>
            <h2 className="section-title">Un projet en tête ?<br /><span className="highlight">Parlons-en.</span></h2>
            <p className="apropos-desc">Je suis à la recherche d'une opportunité d'une alternance dans le domaine de la communication, du design ou du graphisme. Motivé et créatif, je souhaite mettre mes compétences au service de projets innovants.</p>
            <Link to="/contact" className="btn-primary">Me contacter</Link>
          </div>
          <div className="contact-home-links">
            <a href="mailto:tharsananarul@gmail.com" className="contact-link"><span className="link-icon">✉</span>tharsananarul@gmail.com</a>
            <a href="tel:0749878775" className="contact-link"><span className="link-icon">📞</span>07 49 87 87 75</a>
            <a href="https://www.linkedin.com/in/tharsanan-arulananthaselvam/" target="_blank" rel="noreferrer" className="contact-link"><span className="link-icon">in</span>LinkedIn</a>
            <a href="https://www.instagram.com/thithu.arl/" target="_blank" rel="noreferrer" className="contact-link"><span className="link-icon">ig</span>@thithu.arl</a>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
