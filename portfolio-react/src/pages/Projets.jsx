import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import useReveal from '../hooks/useReveal'

export default function Projets() {
  useReveal()
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="hero-bg"><div className="blob blob-1"></div><div className="grid-overlay"></div></div>
        <div className="page-hero-content">
          <p className="section-tag fade-in delay-1">Mon travail</p>
          <h1 className="page-hero-title fade-in delay-2">Mes <span className="highlight">projets</span></h1>
          <p className="page-hero-desc fade-in delay-3">Clique sur un projet pour découvrir tous les détails et les photos.</p>
        </div>
      </section>

      <section className="section projets-page">

        {/* UI/UX */}
        <div className="projets-categorie reveal">
          <p className="section-tag">Conception Digitale &amp; Web</p>
          <h2 className="section-title">UI/UX <span className="highlight">Works</span></h2>
        </div>
        <div className="projects-grid" style={{ maxWidth: 1200, margin: '0 auto 80px' }}>
          <div className="project-card large reveal" onClick={() => window.location.hash = '#/projets/ux'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/ui-ux-designs.png" alt="UI/UX Designs" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder" style={{ display:'none', background:'linear-gradient(135deg,#1B4FFF,#6b8cff)', height:'100%', width:'100%', alignItems:'center', justifyContent:'center', color:'white', fontFamily:'Syne', fontWeight:700 }}><span>UI/UX WORKS</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">Digital Design &amp; Interface</span>
              <h3>UI/UX Works</h3>
              <p>Développement de plateformes interactives et conception de maquettes d'interfaces modernes.</p>
              <Link to="/projets/ux" className="project-link">Voir les détails et les photos →</Link>
            </div>
          </div>
        </div>

        {/* FUTSAL */}
        <div className="projets-categorie reveal">
          <p className="section-tag">Expérience professionnelle</p>
          <h2 className="section-title">Futsal <span className="highlight">Drancy</span></h2>
        </div>
        <div className="projects-grid" style={{ maxWidth: 1200, margin: '0 auto 80px' }}>
          <div className="project-card large reveal" onClick={() => window.location.hash = '#/projets/futsal'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/futsal-drancy.png" alt="Futsal Drancy" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder p1" style={{ display:'none' }}><span>Futsal Drancy</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">Communication · Bénévole · Service Civique · Stage</span>
              <h3>Futsal Drancy</h3>
              <p>Création de supports visuels, gestion des réseaux sociaux et communication événementielle.</p>
              <Link to="/projets/futsal" className="project-link">Voir le projet →</Link>
            </div>
          </div>
        </div>

        {/* BTS COM */}
        <div className="projets-categorie reveal">
          <p className="section-tag">Formation</p>
          <h2 className="section-title">Projets <span className="highlight">BTS Communication</span></h2>
        </div>
        <div className="projets-mini-grid" style={{ maxWidth: 1200, margin: '0 auto 80px' }}>
          <div className="project-card reveal" onClick={() => window.location.hash = '#/projets/bts-com'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/bts-com.png" alt="BTS Com" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder p2" style={{ display:'none' }}><span>BTS Com</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">BTS Communication</span>
              <h3>BTS Communication</h3>
              <p>Affiches et mockups conçus avec Illustrator et Photoshop au Lycée Jacques Brel.</p>
              <Link to="/projets/bts-com" className="project-link">Voir le projet →</Link>
            </div>
          </div>
        </div>

        {/* UNIVERSITAIRES */}
        <div className="projets-categorie reveal">
          <p className="section-tag">BUT MMI · IUT Sénart-Fontainebleau</p>
          <h2 className="section-title">Projets <span className="highlight">universitaires</span></h2>
        </div>
        <div className="projets-mini-grid" style={{ maxWidth: 1200, margin: '0 auto 80px' }}>
          <div className="project-card reveal" onClick={() => window.location.hash = '#/projets/alda'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/alda.png" alt="Alda" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder p3" style={{ display:'none' }}><span>Alda</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">Projet universitaire · Marque de bière</span>
              <h3>Alda</h3>
              <p>Création d'une marque de bière artisanale — identité visuelle, site web et animations.</p>
              <Link to="/projets/alda" className="project-link">Voir le projet →</Link>
            </div>
          </div>
          <div className="project-card reveal delay-1" onClick={() => window.location.hash = '#/projets/sans-bavures'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/sansbavures.png" alt="Sans Bavures" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder p4" style={{ display:'none' }}><span>Sans Bavures</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">Projet universitaire · Association fictive</span>
              <h3>Sans Bavure</h3>
              <p>Association fictive contre les abus policiers — identité visuelle et stratégie de communication.</p>
              <Link to="/projets/sans-bavures" className="project-link">Voir le projet →</Link>
            </div>
          </div>
        </div>

        {/* PERSO */}
        <div className="projets-categorie reveal">
          <p className="section-tag">Hors cursus</p>
          <h2 className="section-title">Créations <span className="highlight">personnelles</span></h2>
        </div>
        <div className="projets-mini-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="project-card reveal" onClick={() => window.location.hash = '#/projets/perso'} style={{ cursor: 'pointer' }}>
            <div className="project-img">
              <img src="images/couvertures/projets-crea.png" alt="Créations personnelles" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'}} />
              <div className="img-placeholder p1" style={{ display:'none' }}><span>Créations</span></div>
            </div>
            <div className="project-info">
              <span className="project-tag">Illustrations · Posters · Vidéo</span>
              <h3>Projets créatifs personnels</h3>
              <p>Posters cinéma sud-indien, illustrations et vidéo Terra Scientifica réalisés avec Photoshop.</p>
              <Link to="/projets/perso" className="project-link">Voir le projet →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-box reveal">
          <p className="section-tag">Tu as un projet ?</p>
          <h2 className="section-title">Travaillons <span className="highlight">ensemble</span></h2>
          <Link to="/contact" className="btn-primary">Me contacter</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
