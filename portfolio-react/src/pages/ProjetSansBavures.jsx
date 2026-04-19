import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import MosaicGrid from '../components/MosaicGrid'
import useReveal from '../hooks/useReveal'

export default function ProjetSansBavures() {
  useReveal()
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
      <div className="projet-hero-wrap">
        <img src="images/couvertures/sansbavures.png" alt="Sans Bavures" />
        <div className="projet-hero-overlay"></div>
        <h1 className="projet-hero-title">Sans Bavures</h1>
      </div>
      <div className="projet-intro">
        <div className="projet-intro-left">
          <h2>Intro</h2>
          <p>Au premier semestre de mon BUT, nous avons créé une association fictive pour lutter contre les abus policiers. Notre objectif était de partager des informations, organiser des événements et sensibiliser le public. Nous avons élaboré une stratégie de communication complète, créé une identité visuelle avec logo, typographies et couleurs, et conçu des supports pour les réseaux sociaux et des affiches de promotion.</p>
          <br /><h2>Livrables</h2>
          <div className="projet-deliverables">
            {['Identité visuelle','Logo','Stratégie communication','Affiches','Brochure','Publications réseaux sociaux','Vidéo animée'].map(t => <span className="deliverable-tag" key={t}>{t}</span>)}
          </div>
        </div>
        <div className="projet-intro-right">
          <div className="projet-meta-block"><span>Période</span><p>Septembre 2022 — Janvier 2023</p></div>
          <div className="projet-meta-block"><span>Formation</span><p>BUT MMI</p></div>
          <div className="projet-meta-block"><span>École</span><p>IUT de Sénart-Fontainebleau</p></div>
          <div className="projet-meta-block"><span>Type</span><p>Association fictive</p></div>
          <div className="projet-meta-block"><span>Outils</span><p>Illustrator, Photoshop, After Effects</p></div>
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
