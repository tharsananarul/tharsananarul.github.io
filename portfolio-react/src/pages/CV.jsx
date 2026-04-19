import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import useReveal from '../hooks/useReveal'

export default function CV() {
  useReveal()
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="hero-bg"><div className="blob blob-1"></div><div className="grid-overlay"></div></div>
        <div className="page-hero-content">
          <p className="section-tag fade-in delay-1">Mon parcours</p>
          <h1 className="page-hero-title fade-in delay-2">Curriculum <span className="highlight">Vitae</span></h1>
          <div className="fade-in delay-3" style={{ marginTop: 24 }}>
            <a href="cv.pdf" download className="btn-primary">⬇ Télécharger mon CV</a>
          </div>
        </div>
      </section>

      <section className="section cv-page">
        <div className="cv-inner">
          {/* FORMATION */}
          <div className="cv-col">
            <div className="cv-section-title reveal">
              <p className="section-tag">Études</p>
              <h2 className="section-title">Formation</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Janvier 2025 — Juin 2026</span>
                  <h3>BTS Communication</h3>
                  <p className="timeline-lieu">Lycée Jacques Brel · 93120 La Courneuve</p>
                  <p>Actuellement en deuxième année de BTS Communication au Lycée Jacques Brel, je prévois de poursuivre en Licence Pro Communication l'année prochaine.</p>
                </div>
              </div>
              <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Septembre 2023 — Juin 2024</span>
                  <h3>BUT Métiers du Multimédia et de l'Internet</h3>
                  <p className="timeline-lieu">IUT de Sénart-Fontainebleau · 77127 Lieusaint</p>
                  <p>Compétences solides en création numérique, gestion de projets multimédia et communication digitale.</p>
                </div>
              </div>
              <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Septembre 2022 — Juin 2023</span>
                  <h3>1ère année BUT MMI</h3>
                  <p className="timeline-lieu">IUT de Sénart-Fontainebleau · 77127 Lieusaint</p>
                  <p>Spécialisation en communication et recherche d'alternance dans ce domaine.</p>
                </div>
              </div>
              <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">2019 — 2022</span>
                  <h3>Baccalauréat Technologique STI2D</h3>
                  <p className="timeline-lieu">Lycée Polyvalent Paul Le Rolland · 93700 Drancy</p>
                  <p>Spécialisation en Sciences Informatiques et Numériques.</p>
                </div>
              </div>
            </div>
          </div>

          {/* EXPÉRIENCES */}
          <div className="cv-col">
            <div className="cv-section-title reveal">
              <p className="section-tag">Parcours professionnel</p>
              <h2 className="section-title">Expérience</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item reveal">
                <div className="timeline-dot blue"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Présent (Bénévole) · Sept. 2024–Mai 2025 (Service Civique) · Stages 2025</span>
                  <h3>Chargé de communication <span className="badge-stage">Stage</span><span className="badge-civique">Service Civique</span><span className="badge-benevole">Bénévole</span></h3>
                  <p className="timeline-lieu">Futsal Drancy · Drancy</p>
                  <ul className="timeline-bullets">
                    <li>Réalisation de contenus visuels et rédactionnels</li>
                    <li>Gestion des réseaux sociaux et création de publications</li>
                    <li>Suivi de l'engagement et analyse des performances</li>
                    <li>Coordination des actions de communication</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item reveal">
                <div className="timeline-dot blue"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Août 2024 — Décembre 2025 (CDI)</span>
                  <h3>Chargé de clientèle</h3>
                  <p className="timeline-lieu">La Poste · Le Blanc-Mesnil</p>
                  <ul className="timeline-bullets">
                    <li>Accueil et accompagnement des clients</li>
                    <li>Gestion des opérations courantes et conseil</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item reveal">
                <div className="timeline-dot blue"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Septembre 2023 — Présent</span>
                  <h3>Tuteur Indépendant</h3>
                  <p className="timeline-lieu">Parkours · Paris</p>
                  <ul className="timeline-bullets">
                    <li>Accompagnement et soutien pédagogique des élèves</li>
                    <li>Aide à l'organisation des méthodes d'apprentissage</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item reveal">
                <div className="timeline-dot blue"></div>
                <div className="timeline-content">
                  <span className="timeline-year">Mars 2023 — Présent</span>
                  <h3>Photographe &amp; Community Manager <span className="badge-benevole">Bénévole</span></h3>
                  <p className="timeline-lieu">Terra Scientifica · Paris &amp; Genève</p>
                  <ul className="timeline-bullets">
                    <li>Photographe sur le salon des voyages</li>
                    <li>Gestion des comptes de médias sociaux</li>
                    <li>Réalisation d'interviews et captation photographique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cv-download-cta reveal">
          <p className="apropos-desc">Télécharge mon CV complet en PDF.</p>
          <a href="cv.pdf" download className="btn-primary">⬇ Télécharger mon CV (PDF)</a>
        </div>
      </section>
    </PageWrapper>
  )
}
