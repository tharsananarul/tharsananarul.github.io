import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import MosaicGrid from '../components/MosaicGrid'
import Reveal from '../components/Reveal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProjetFutsal() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const sections = [
    {
      tag: 'Identité visuelle', title: 'Logos, Maillots & Gobelets',
      items: [
        { src: 'images/futsal-drancy/logofinal.png', alt: 'Logo final' },
        { src: 'images/futsal-drancy/logodroite.png', alt: 'Logo droite' },
        { src: 'images/futsal-drancy/planlogo.png', alt: 'Plan logo' },
        { src: 'images/futsal-drancy/logomaillotblanc.png', alt: 'Logo maillot blanc' },
        { src: 'images/futsal-drancy/logomaillotnoir.png', alt: 'Logo maillot noir' },
        { src: 'images/futsal-drancy/maillotlogovert.png', alt: 'Maillot vert' },
        { src: 'images/futsal-drancy/gobelet-01.png', alt: 'Gobelet 01' },
        { src: 'images/futsal-drancy/gobelet-02.png', alt: 'Gobelet 02' },
        { src: 'images/futsal-drancy/b2-club.png', alt: 'B2 Club' },
      ]
    },
    {
      tag: 'Réseaux sociaux', title: 'Publications Instagram',
      items: [
        { src: 'images/futsal-drancy/1.png', alt: 'Post 1' },
        { src: 'images/futsal-drancy/2.png', alt: 'Post 2' },
        { src: 'images/futsal-drancy/3.png', alt: 'Post 3' },
        { src: 'images/futsal-drancy/5.png', alt: 'Post 5' },
        { src: 'images/futsal-drancy/7.png', alt: 'Post 7' },
        { src: 'images/futsal-drancy/12.png', alt: 'Post 12' },
        { src: 'images/futsal-drancy/13.png', alt: 'Post 13' },
        { src: 'images/futsal-drancy/14.png', alt: 'Post 14' },
        { src: 'images/futsal-drancy/16.png', alt: 'Post 16' },
        { src: 'images/futsal-drancy/17.png', alt: 'Post 17' },
        { src: 'images/futsal-drancy/18.png', alt: 'Post 18' },
        { src: 'images/futsal-drancy/21.png', alt: 'Post 21' },
        { src: 'images/futsal-drancy/22.png', alt: 'Post 22' },
        { src: 'images/futsal-drancy/23.png', alt: 'Post 23' },
      ]
    },
    {
      tag: 'Événements & Communication', title: 'Affiches',
      items: [
        { src: 'images/futsal-drancy/affiche-equipement.png', alt: 'Affiche équipement', tall: true },
        { src: 'images/futsal-drancy/affichereunion.png', alt: 'Affiche réunion', tall: true },
        { src: 'images/futsal-drancy/affiche-reunion.png', alt: 'Affiche réunion 2', tall: true },
        { src: 'images/futsal-drancy/affiche-telethon01.png', alt: 'Téléthon 1', tall: true },
        { src: 'images/futsal-drancy/affiche-telethon02.png', alt: 'Téléthon 2', tall: true },
        { src: 'images/futsal-drancy/affiche-tournoi.png', alt: 'Affiche tournoi', tall: true },
        { src: 'images/futsal-drancy/afficheldc.png', alt: 'Affiche LDC', tall: true },
        { src: 'images/futsal-drancy/affichelangevin.png', alt: 'Affiche Langevin', tall: true },
        { src: 'images/futsal-drancy/recutement-langevin.png', alt: 'Recrutement 1', tall: true },
        { src: 'images/futsal-drancy/recutement-langevin02.png', alt: 'Recrutement 2', tall: true },
        { src: 'images/futsal-drancy/guiliascup.png', alt: "Giulia's Cup" },
        { src: 'images/futsal-drancy/fete-de-la-ville.png', alt: 'Fête de la ville' },
        { src: 'images/futsal-drancy/fetedenoel01.png', alt: 'Fête de Noël' },
        { src: 'images/futsal-drancy/coursenor.png', alt: 'Course Nor', wide: true },
      ]
    }
  ]

  return (
    <PageWrapper>
      <div className="projet-hero-wrap" ref={containerRef}>
        <motion.img 
          src="images/couvertures/futsal-drancy.png" 
          alt="Futsal Drancy" 
          style={{ y }}
        />
        <div className="projet-hero-overlay"></div>
        <Reveal y={50}>
          <h1 className="projet-hero-title">Futsal Drancy</h1>
        </Reveal>
      </div>

      <div className="projet-intro">
        <div className="projet-intro-left">
          <Reveal delay={0.1}>
            <h2>Intro</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>Dans le cadre de mon service civique en tant que chargé de communication, puis de mon alternance pour le Futsal Drancy, j'ai réalisé divers contenus visuels : affiches, publications et stories destinées aux réseaux sociaux du club. Ces créations visaient à valoriser les événements, les équipes et la vie du club au quotidien.</p>
          </Reveal>
          <br />
          <Reveal delay={0.3}>
            <h2>Livrables</h2>
          </Reveal>
          <div className="projet-deliverables">
            {['Affiches','Publications Instagram','Stories','Flyers','Réseaux sociaux','Retouche photo','Logo'].map((t, i) => (
              <Reveal key={t} delay={0.4 + i * 0.05} width="auto">
                <span className="deliverable-tag">{t}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="projet-intro-right">
          {[
            { label: 'Bénévole', value: 'Présent' },
            { label: 'Service civique', value: 'Septembre 2024 — Mai 2025' },
            { label: 'Stage', value: 'Mai–Juin 2025 & Nov–Déc 2025' },
            { label: 'Lieu', value: 'Drancy' },
            { label: 'Outils', value: 'Photoshop, Lightroom, Canva' }
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

      <div className="projet-rapports">
        <Reveal>
          <span className="rapport-label">Rapports de stage</span>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rapport-card">
            <div className="rapport-info">
              <span className="rapport-annee">Stage 1ère année · Mai — Juin 2025</span>
              <h3>Rapport de stage — 1ère année BTS</h3>
              <p>Chargé de communication — Futsal Drancy, Drancy</p>
            </div>
            <a href="documents/retex-2025.pdf" download className="rapport-btn">⬇ Télécharger le PDF</a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="rapport-card">
            <div className="rapport-info">
              <span className="rapport-annee">Stage 2ème année · Nov — Déc 2025</span>
              <h3>Rapport de stage — 2ème année BTS</h3>
              <p>Chargé de communication — Futsal Drancy, Drancy</p>
            </div>
            <a href="documents/retex-2026.pdf" download className="rapport-btn">⬇ Télécharger le PDF</a>
          </div>
        </Reveal>
      </div>

      <MosaicGrid sections={sections} />

      <div className="projet-next">
        <p>Projet suivant</p>
        <div className="projet-next-cards">
          <Link to="/projets/bts-com" className="projet-next-card">
            <img src="images/couvertures/bts-com.png" alt="BTS Communication" />
            <div className="projet-next-card-info">BTS Communication →</div>
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
