import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import Reveal from '../components/Reveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProjetPerso() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  
  return (
    <PageWrapper>
      <div className="projet-hero-wrap" ref={containerRef}>
        <motion.img 
          src="images/couvertures/projets-crea.png" 
          alt="Créations personnelles" 
          style={{ y }}
        />
        <div className="projet-hero-overlay"></div>
        <Reveal y={50}>
          <h1 className="projet-hero-title">Créations personnelles</h1>
        </Reveal>
      </div>

      <div className="projet-intro">
        <div className="projet-intro-left">
          <Reveal delay={0.1}>
            <h2>Intro</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>Voici quelques-unes de mes créations réalisées principalement avec Photoshop. Ma passion pour le cinéma sud-indien se reflète particulièrement à travers ces œuvres — designs et posters réalisés pendant mes moments de loisirs. J'ai également réalisé une vidéo pour promouvoir le salon des sciences Terra Scientifica dans le cadre de mon rôle de community manager bénévole.</p>
          </Reveal>
          <br />
          <Reveal delay={0.3}>
            <h2>Livrables</h2>
          </Reveal>
          <div className="projet-deliverables">
            {['Illustrations','Posters cinéma','Retouche photo','Montage vidéo','Community management'].map((t, i) => (
              <Reveal key={t} delay={0.4 + i * 0.05} width="auto">
                <span className="deliverable-tag">{t}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="projet-intro-right">
          {[
            { label: 'Type', value: 'Illustrations, Posters, Vidéo' },
            { label: 'Outils', value: 'Photoshop, Premiere Pro' },
            { label: 'Contexte', value: 'Loisirs & Terra Scientifica' }
          ].map((item, i) => (
            <Reveal key={item.label} delay={0.2 + i * 0.1}>
              <div className="projet-meta-block">
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div style={{ background: '#080e1a', paddingBottom: 64 }}>
        <Reveal>
          <p className="section-label">Posters &amp; Illustrations</p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="projet-img-full">
            <img src="images/projets-crea/captain-miller.png" alt="Captain Miller" />
          </div>
        </Reveal>

        <div className="projet-img-grid">
          <Reveal delay={0.1}>
            <div className="projet-img-full"><img src="images/projets-crea/kok-poster.jpg" alt="KOK Poster" /></div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="projet-img-full"><img src="images/projets-crea/kok-car.png" alt="KOK Car" /></div>
          </Reveal>
        </div>
        
        <div className="projet-img-grid">
          <Reveal delay={0.1}>
            <div className="projet-img-full"><img src="images/projets-crea/cover-magazine.jpeg" alt="Cover magazine" /></div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="projet-img-full"><img src="images/projets-crea/animal.png" alt="Animal" /></div>
          </Reveal>
        </div>

        <Reveal>
          <p className="section-label">Vidéo — Terra Scientifica</p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="projet-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/qN8Iw006glU"
              title="Terra Scientifica — Vidéo promotionnelle"
              allowFullScreen
            ></iframe>
          </div>
        </Reveal>
      </div>

      <div className="projet-next">
        <p>Projet suivant</p>
        <div className="projet-next-cards">
          <Link to="/projets/futsal" className="projet-next-card">
            <img src="images/couvertures/futsal-drancy.png" alt="Futsal Drancy" />
            <div className="projet-next-card-info">Futsal Drancy →</div>
          </Link>
          <Link to="/projets" className="projet-next-card">
            <img src="images/couvertures/bts-com.png" alt="Tous les projets" />
            <div className="projet-next-card-info">Tous les projets →</div>
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
