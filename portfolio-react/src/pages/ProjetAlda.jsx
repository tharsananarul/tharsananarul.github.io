import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import MosaicGrid from '../components/MosaicGrid'
import Reveal from '../components/Reveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProjetAlda() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  
  const sections = [{
    items: [
      { src: 'images/alda/affichemockup.jpg', alt: 'Affiche mockup', tall: true },
      { src: 'images/alda/bouteille1.jpg', alt: 'Bouteille Alda' },
      { src: 'images/alda/bouteille2.jpg', alt: 'Bouteille 2' },
      { src: 'images/alda/bouteille3.jpg', alt: 'Bouteille 3' },
      { src: 'images/alda/bouteille4.jpg', alt: 'Bouteille 4' },
      { src: 'images/alda/bouteille5.jpg', alt: 'Bouteille 5' },
      { src: 'images/alda/bouteille6.jpg', alt: 'Bouteille 6' },
      { src: 'images/alda/etiquettechataignier.jpg', alt: 'Étiquette châtaignier' },
      { src: 'images/alda/etiquettelavande.jpg', alt: 'Étiquette lavande' },
      { src: 'images/alda/etiquetteoranger.jpg', alt: 'Étiquette oranger' },
      { src: 'images/alda/etiquettetilleul.jpg', alt: 'Étiquette tilleul' },
      { src: 'images/alda/etiquettetrefle.jpg', alt: 'Étiquette trèfle' },
      { src: 'images/alda/site-mockup.png', alt: 'Site mockup', wide: true },
      { src: 'images/alda/aldaaccueil.png', alt: 'Page accueil' },
      { src: 'images/alda/aldalandingpage.jpg', alt: 'Landing page' },
      { src: 'images/alda/pagebouteille.jpg', alt: 'Page bouteille' },
      { src: 'images/alda/pageproduit.jpg', alt: 'Page produit' },
    ]
  }]

  return (
    <PageWrapper>
      <div className="projet-hero-wrap" ref={containerRef}>
        <motion.img 
          src="images/couvertures/alda.png" 
          alt="Alda" 
          style={{ y }}
        />
        <div className="projet-hero-overlay"></div>
        <Reveal y={50}>
          <h1 className="projet-hero-title">Identité Alda</h1>
        </Reveal>
      </div>

      <div className="projet-intro">
        <div className="projet-intro-left">
          <Reveal delay={0.1}>
            <h2>Intro</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>Conception d'une identité visuelle complète pour Alda, une marque fictive. Ce projet explore la création d'un logo moderne, d'une charte graphique cohérente et de divers supports de communication (cartes de visite, packagings, papeterie) pour construire une image de marque forte et reconnaissable.</p>
          </Reveal>
          <br />
          <Reveal delay={0.3}>
            <h2>Livrables</h2>
          </Reveal>
          <div className="projet-deliverables">
            {['Charte graphique','Logo','Cartes de visite','Packaging','Papeterie','Mockups'].map((t, i) => (
              <Reveal key={t} delay={0.4 + i * 0.05} width="auto">
                <span className="deliverable-tag">{t}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="projet-intro-right">
          {[
            { label: 'Type', value: 'Branding & Identité' },
            { label: 'Rôle', value: 'Designer Graphique' },
            { label: 'Outils', value: 'Illustrator, Photoshop' }
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
          <Link to="/projets/sans-bavures" className="projet-next-card">
            <img src="images/couvertures/sansbavures.png" alt="Sans Bavure" />
            <div className="projet-next-card-info">Sans Bavure →</div>
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
