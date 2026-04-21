import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import MosaicGrid from '../components/MosaicGrid'
import Reveal from '../components/Reveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProjetSansBavures() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const sections = [{
    items: [
      { src: 'images/sans-bavures/logo.png', alt: 'Logo Sans Bavures' },
      { src: 'images/sans-bavures/affiche.png', alt: 'Affiche Sans Bavures', tall: true },
      { src: 'images/sans-bavures/brochure.png', alt: 'Brochure' },
      { src: 'images/sans-bavures/post-insta.png', alt: 'Post Instagram' },
      { src: 'images/sans-bavures/post.png', alt: 'Post 1' },
      { src: 'images/sans-bavures/post2.png', alt: 'Post 2' },
      { src: 'images/sans-bavures/post3.png', alt: 'Post 3' },
    ]
  }]

  return (
    <PageWrapper>
      <div className="projet-hero-wrap" ref={containerRef}>
        <motion.img style={{ y }} src="images/couvertures/sansbavures.png" alt="Sans Bavures" />
        <div className="projet-hero-overlay"></div>
        <Reveal y={50}>
          <h1 className="projet-hero-title">Sans Bavures</h1>
        </Reveal>
      </div>
      <div className="projet-intro">
        <div className="projet-intro-left">
          <Reveal delay={0.1}>
            <h2>Intro</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>Au premier semestre de mon BUT, nous avons créé une association fictive pour lutter contre les abus policiers. Notre objectif était de partager des informations, organiser des événements et sensibiliser le public. Nous avons élaboré une stratégie de communication complète, créé une identité visuelle avec logo, typographies et couleurs, et conçu des supports pour les réseaux sociaux et des affiches de promotion.</p>
          </Reveal>
          <br />
          <Reveal delay={0.3}>
            <h2>Livrables</h2>
          </Reveal>
          <div className="projet-deliverables">
            {['Identité visuelle','Logo','Stratégie communication','Affiches','Brochure','Publications réseaux sociaux','Vidéo animée'].map((t, i) => (
              <Reveal key={t} delay={0.4 + i * 0.05} width="auto">
                <span className="deliverable-tag">{t}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="projet-intro-right">
          {[
            { label: 'Période', value: 'Septembre 2022 — Janvier 2023' },
            { label: 'Formation', value: 'BUT MMI' },
            { label: 'École', value: 'IUT de Sénart-Fontainebleau' },
            { label: 'Type', value: 'Association fictive' },
            { label: 'Outils', value: 'Illustrator, Photoshop, After Effects' }
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
      <MosaicGrid sections={sections} />
      <div className="projet-next">
        <p>Projet suivant</p>
        <div className="projet-next-cards">
          <Link to="/projets/perso" className="projet-next-card">
            <img src="images/couvertures/projets-crea.png" alt="Créations personnelles" />
            <div className="projet-next-card-info">Créations personnelles →</div>
          </Link>
          <Link to="/projets" className="projet-next-card">
            <img src="images/couvertures/futsal-drancy.png" alt="Tous les projets" />
            <div className="projet-next-card-info">Tous les projets →</div>
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
