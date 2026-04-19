import { useState } from 'react'

export default function MosaicGrid({ sections }) {
  const [lbOpen, setLbOpen] = useState(false)
  const [lbImages, setLbImages] = useState([])
  const [lbIndex, setLbIndex] = useState(0)
  const [lbOpacity, setLbOpacity] = useState(1)

  const openLb = (images, idx) => {
    setLbImages(images)
    setLbIndex(idx)
    setLbOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeLb = () => {
    setLbOpen(false)
    document.body.style.overflow = ''
  }
  const navigate = (dir) => {
    setLbOpacity(0)
    setTimeout(() => {
      setLbIndex((i) => (i + dir + lbImages.length) % lbImages.length)
      setLbOpacity(1)
    }, 150)
  }

  // Keyboard
  typeof window !== 'undefined' && (() => {
    // handled inline — using useEffect in parent
  })()

  return (
    <>
      {sections.map((section, si) => (
        <div className="mosaic-section" key={si}>
          {(section.tag || section.title) && (
            <div className="mosaic-header">
              {section.tag && <p className="section-tag">{section.tag}</p>}
              {section.title && <h3 className="mosaic-title">{section.title}</h3>}
            </div>
          )}
          <div className="mosaic-grid">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className={`mosaic-item${item.tall ? ' tall' : ''}${item.wide ? ' wide' : ''}`}
                onClick={() => openLb(section.items, idx)}
              >
                <img
                  src={item.src}
                  alt={item.alt || ''}
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add('img-loaded')}
                />
                <div className="mosaic-overlay">🔍</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {lbOpen && (
        <div className="lightbox active" onClick={(e) => { if (e.target.classList.contains('lightbox')) closeLb() }}>
          <button className="lb-btn lb-close" onClick={closeLb}>✕</button>
          <button className="lb-btn lb-prev" onClick={() => navigate(-1)}>←</button>
          <button className="lb-btn lb-next" onClick={() => navigate(1)}>→</button>
          <div className="lb-img-wrap">
            <img
              className="lb-img"
              src={lbImages[lbIndex]?.src}
              alt={lbImages[lbIndex]?.alt || ''}
              style={{ opacity: lbOpacity, transition: 'opacity 0.15s ease' }}
            />
          </div>
          <div className="lb-counter">{lbIndex + 1} / {lbImages.length}</div>
        </div>
      )}
    </>
  )
}
