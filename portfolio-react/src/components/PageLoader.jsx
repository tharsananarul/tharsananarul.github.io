import { useEffect, useRef } from 'react'

export default function PageLoader() {
  const loaderRef = useRef(null)

  useEffect(() => {
    const loader = loaderRef.current
    const fill = loader?.querySelector('.loader-fill')
    document.body.style.overflow = 'hidden'
    let progress = 0

    const interval = setInterval(() => {
      progress += Math.random() * 18 + 5
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
      }
      if (fill) fill.style.width = progress + '%'
      if (progress === 100) {
        setTimeout(() => {
          if (loader) loader.classList.add('loader-exit')
          document.body.style.overflow = ''
          setTimeout(() => { if (loader) loader.style.display = 'none' }, 700)
        }, 250)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="page-loader" ref={loaderRef}>
      <div className="loader-inner">
        <div className="loader-logo">T<span>.</span></div>
        <div className="loader-bar"><div className="loader-fill"></div></div>
      </div>
    </div>
  )
}
