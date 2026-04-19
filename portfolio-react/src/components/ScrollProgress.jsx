import { useEffect } from 'react'

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.createElement('div')
    bar.id = 'scroll-progress'
    document.body.appendChild(bar)
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      bar.style.transform = `scaleX(${window.scrollY / total})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      bar.remove()
    }
  }, [])
  return null
}
