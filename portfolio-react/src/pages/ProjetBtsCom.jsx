import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import MosaicGrid from '../components/MosaicGrid'
import Reveal from '../components/Reveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProjetBtsCom() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  
  const sections = [{
    items: [
      { src: 'images/bts-com/affichea0.jpg', alt: 'Affiche A0', tall: true },
      { src: 'images/bts-com/affichea0mockup.jpg', alt: 'Affiche A0 mockup' },
      { src: 'images/bts-com/affiche-inscription.jpg', alt: 'Affiche inscription' },
      { src: 'images/bts-com/kakemono.jpg', alt: 'Kakémono', tall: true },
      { src: 'images/bts-com/kakemono-mockup.jpg', alt: 'Kakémono mockup' },
      { src: 'images/bts-com/rollup-mockup.jpg', alt: 'Roll-up mockup' },
      { src: 'images/bts-com/mockuppull.jpg', alt: 'Mockup pull' },
      { src: 'images/bts-com/instgram-mockup.jpg', alt: 'Instagram mockup' },
      { src: 'images/bts-com/postscc01.jpg', alt: 'Post SCC 1' },
      { src: 'images/bts-com/postscc02.jpg', alt: 'Post SCC 2' },
      { src: 'images/bts-com/sdcipost.jpg', alt: 'Post SDCI' },
      { src: 'images/bts-com/expo-com.jpg', alt: 'Expo communication', wide: true },
      { src: 'images/bts-com/expocompost.jpg', alt: 'Expo com post' },
      { src: 'images/bts-com/newsletter.jpg', alt: 'Newsletter' },

    ]
  }]

  return (
    <PageWrapper>
      <div className="projet-hero-wrap" ref={containerRef}>
        <motion.img 
          src="images/couvertures/bts-com.png" 
          alt="BTS Communication" 
          style={{ y }}
        />
        <div className="projet-hero-overlay"></div>
        <Reveal y={50}>
          <h1 className="projet-hero-title">BTS Communication</h1>
        </Reveal>
      </div>

      <div className="projet-intro">
        <div className="projet-intro-left">
          <Reveal delay={0.1}>
            <h2>Intro</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>Voici quelques projets créatifs réalisés en BTS Communication, principalement des affiches et mockups conçus avec Illustrator et Photoshop. Ces réalisations illustrent mon sens du visuel et ma maîtrise des outils graphiques, développés tout au long de ma formation au Lycée Jacques Brel à La Courneuve.</p>
          </Reveal>
          
          <Reveal delay={0.3} y={0}>
            <div className="projet-rapports" style={{ padding: 0, marginTop: 32, marginBottom: 20 }}>
              <span className="rapport-label">Documents</span>
              <div className="rapport-card">
                <div className="rapport-info">
                  <span className="rapport-annee">BTS Communication</span>
                  <h3>Fiches descriptives</h3>
                  <p>Détail des projets et réalisations</p>
                </div>
                <a href="documents/fiches descriptives.pdf" download className="rapport-btn">⬇ Télécharger le PDF</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <h2>Livrables</h2>
          </Reveal>
          <div className="projet-deliverables">
            {['Affiches','Mockups','Flyers','Newsletter','Kakémono','Roll-up','Publications réseaux sociaux'].map((t, i) => (
              <Reveal key={t} delay={0.5 + i * 0.05} width="auto">
                <span className="deliverable-tag">{t}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="projet-intro-right">
          {[
            { label: 'Période', value: 'Janvier 2025 — En cours' },
            { label: 'Formation', value: 'BTS Communication' },
            { label: 'École', value: 'Lycée Jacques Brel, La Courneuve' },
            { label: 'Outils', value: 'Illustrator, Photoshop, InDesign' }
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
          <Link to="/projets/alda" className="projet-next-card">
            <img src="images/couvertures/alda.png" alt="Alda" />
            <div className="projet-next-card-info">Alda →</div>
          </Link>
          <Link to="/projets/sans-bavures" className="projet-next-card">
            <img src="images/couvertures/sansbavures.png" alt="Sans Bavures" />
            <div className="projet-next-card-info">Sans Bavure →</div>
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}
