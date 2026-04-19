import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import MosaicGrid from '../components/MosaicGrid'
import useReveal from '../hooks/useReveal'

export default function ProjetAlda() {
  useReveal()
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
      <div className="projet-hero-wrap">
        <img src="images/couvertures/alda.png" alt="Alda" />
        <div className="projet-hero-overlay"></div>
        <h1 className="projet-hero-title">Alda</h1>
      </div>
      <div className="projet-intro">
        <div className="projet-intro-left">
          <h2>Intro</h2>
          <p>Dans le cadre de mes études, j'ai participé à un projet passionnant consistant à créer une marque de bière artisanale inspirée du mystique. Ce projet a été réalisé en collaboration avec une équipe de cinq personnes. Nos travaux ont inclus une étude de marché approfondie, la création d'une charte graphique, la conception de supports de communication, la création d'un site internet et la réalisation d'animations.</p>
          <br /><h2>Livrables</h2>
          <div className="projet-deliverables">
            {['Identité visuelle','Logo','Charte graphique','Site web','Étiquettes','Supports print','Animations'].map(t => <span className="deliverable-tag" key={t}>{t}</span>)}
          </div>
        </div>
        <div className="projet-intro-right">
          <div className="projet-meta-block"><span>Année</span><p>Février — Juin 2023</p></div>
          <div className="projet-meta-block"><span>Formation</span><p>BUT MMI</p></div>
          <div className="projet-meta-block"><span>École</span><p>IUT de Sénart-Fontainebleau</p></div>
          <div className="projet-meta-block"><span>Type</span><p>Marque de bière artisanale</p></div>
          <div className="projet-meta-block"><span>Outils</span><p>Illustrator, Photoshop, After Effects, HTML/CSS/PHP</p></div>
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
