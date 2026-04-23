import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Counter({ from = 0, to, duration = 2, suffix = "" }) {
  const nodeRef = useRef()
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const node = nodeRef.current
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = Math.round(value) + suffix
      },
      ease: [0.16, 1, 0.3, 1]
    })

    return () => controls.stop()
  }, [from, to, duration, suffix, isInView])

  return <span ref={nodeRef}>{from}{suffix}</span>
}
