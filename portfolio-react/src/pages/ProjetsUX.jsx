import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import MosaicGrid from '../components/MosaicGrid'
import Reveal from '../components/Reveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProjetsUX() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  
  const btsRevision = [
    { src: 'images/site/bts-fdr/1.png', alt: 'BTS REVISIONS 1' },
    { src: 'images/site/bts-fdr/2.png', alt: 'BTS REVISIONS 2' },
    { src: 'images/site/bts-fdr/3.png', alt: 'BTS REVISIONS 3' },
    { src: 'images/site/bts-fdr/4.png', alt: 'BTS REVISIONS 4' },
  ]
  const hopePower = [
    { src: 'images/site/hope-power/1.png', alt: 'HopePower 1' },
    { src: 'images/site/hope-power/2.png', alt: 'HopePower 2' },
    { src: 'images/site/hope-power/3.png', alt: 'HopePower 3' },
    { src: 'images/site/hope-power/4.png', alt: 'HopePower 4' },
  ]

  return (
    <PageWrapper>
      <div className="projet-hero-wrap" ref={containerRef}>
        <motion.img 
          src="images/couvertures/projets-ux.png" 
          alt="UI/UX Design" 
          style={{ y }}
        />
        <div className="projet-hero-overlay"></div>
        <Reveal y={50}>
          <h1 className="projet-hero-title">Projets UI/UX</h1>
        </Reveal>
      </div>
      <div className="projet-intro">
        <div className="projet-intro-left">
          <h2>Intro</h2>
          <p>Cette section regroupe mes travaux de conception d'interfaces et de développement web. Passionné par l'expérience utilisateur, j'ai réalisé ces projets en mettant l'accent sur l'ergonomie, l'accessibilité et une identité visuelle forte.</p>
        </div>
        <div className="projet-intro-right">
          <div className="projet-meta-block"><span>Domaine</span><p>UI Design, UX Research, Web Dev</p></div>
          <div className="projet-meta-block"><span>Outils</span><p>Figma, HTML, CSS, Javascript</p></div>
          <div className="projet-meta-block"><span>Projets</span><p>2 plateformes interactives</p></div>
        </div>
      </div>

      <div className="site-section">
        <div className="site-header">
          <Reveal delay={0.1}>
            <div className="section-tag">Projet Principal</div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="site-title">BTS Révision — Plateforme Éducative</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="site-desc">
              Conception d'une plateforme de révision complète pour les étudiants en BTS Communication. 
              Focus sur l'ergonomie (UX) pour faciliter l'apprentissage nomade et l'accessibilité des ressources.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <a href="https://tharsananarul.github.io/bts-revision/" target="_blank" rel="noreferrer" className="btn-primary">
              Visiter le site live →
            </a>
          </Reveal>
        </div>
        <MosaicGrid sections={[{ items: btsRevision }]} animate={true} />
      </div>

      <div className="site-section" style={{ borderTop: '1px solid var(--border)', paddingTop: 80 }}>
        <div className="site-header">
          <Reveal delay={0.1}>
            <div className="section-tag">Case Study</div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="site-title">HopePower — Mockup Applicatif</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="site-desc">
              Prototype haute-fidélité pour une application mobile de mise en relation solidaire. 
              Travail approfondi sur l'interface utilisateur (UI) et le parcours utilisateur.
            </p>
          </Reveal>
        </div>
        <MosaicGrid sections={[{ items: hopePower }]} animate={true} />
      </div>

      <div className="projet-next">
        <p>Projet suivant</p>
        <div className="projet-next-cards">
          <Link to="/projets/futsal" className="projet-next-card">
            <img src="images/couvertures/futsal-drancy.png" alt="Futsal Drancy" />
            <div className="projet-next-card-info">Futsal Drancy →</div>
          </Link>
          <Link to="/projets" className="projet-next-card">
            <img src="images/couvertures/alda.png" alt="Tous les projets" />
            <div className="projet-next-card-info">Tous les projets →</div>
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
