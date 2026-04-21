import { motion } from 'framer-motion'

export default function Reveal({ children, width = "100%", delay = 0, y = 30 }) {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ 
          duration: 0.8, 
          delay: delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
