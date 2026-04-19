import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    if ('ontouchstart' in window) return
    const cursor = document.createElement('div')
    cursor.id = 'cursor'
    cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>'
    document.body.appendChild(cursor)

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, isHovering = false

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.querySelector('.cursor-dot').style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    })

    function animateRing() {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      const ring = cursor.querySelector('.cursor-ring')
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${isHovering ? 1.7 : 1})`
      requestAnimationFrame(animateRing)
    }
    animateRing()

    const interactives = 'a, button, .project-card, input, textarea'
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactives)) { isHovering = true; cursor.classList.add('hovering') }
    })
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactives)) { isHovering = false; cursor.classList.remove('hovering') }
    })
    document.addEventListener('mousedown', () => cursor.classList.add('clicking'))
    document.addEventListener('mouseup', () => cursor.classList.remove('clicking'))

    return () => cursor.remove()
  }, [])
  return null
}
