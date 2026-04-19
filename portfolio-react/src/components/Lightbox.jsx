import { useState, useCallback, useEffect } from 'react'

export default function Lightbox({ images }) {
  const [active, setActive] = useState(false)
  const [current, setCurrent] = useState(0)
  const [opacity, setOpacity] = useState(1)

  const open = useCallback((idx) => {
    setCurrent(idx)
    setActive(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setActive(false)
    document.body.style.overflow = ''
  }, [])

  const navigate = useCallback((dir) => {
    setOpacity(0)
    setTimeout(() => {
      setCurrent((c) => (c + dir + images.length) % images.length)
      setOpacity(1)
    }, 150)
  }, [images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (!active) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active, close, navigate])

  return { open, LightboxUI: active ? (
    <div className={`lightbox ${active ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) close() }}>
      <button className="lb-btn lb-close" onClick={close}>✕</button>
      <button className="lb-btn lb-prev" onClick={() => navigate(-1)}>←</button>
      <button className="lb-btn lb-next" onClick={() => navigate(1)}>→</button>
      <div className="lb-img-wrap">
        <img className="lb-img" src={images[current]?.src} alt={images[current]?.alt || ''} style={{ opacity }} />
      </div>
      <div className="lb-counter">{current + 1} / {images.length}</div>
    </div>
  ) : null }
}
