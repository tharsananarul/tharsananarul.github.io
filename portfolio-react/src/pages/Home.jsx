import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Code, Layout, Palette, Terminal, ExternalLink, Download, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import Magnetic from '../components/Magnetic'
import PassionSection from '../components/PassionSection'
import InfiniteMarquee from '../components/InfiniteMarquee'
import Counter from '../components/Counter'

const HeroScene = lazy(() => import('../components/HeroScene'))

// --- Components ---

const TextScramble = ({ text }) => {
  const [displayText, setDisplayText] = useState('')
  const chars = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  useEffect(() => {
    let frame = 0
    const queue = text.split('').map((char, i) => ({
      to: char,
      start: Math.floor(Math.random() * 20),
      end: Math.floor(Math.random() * 20) + 20
    }))
    
    let timer
    const update = () => {
      let out = ''
      let done = 0
      for (let i = 0; i < queue.length; i++) {
        let { to, start, end } = queue[i]
        if (frame >= end) {
          done++
          out += to
        } else if (frame >= start) {
          out += chars[Math.floor(Math.random() * chars.length)]
        } else {
          out += to
        }
      }
      setDisplayText(out)
      if (done < queue.length) {
        frame++
        timer = requestAnimationFrame(update)
      }
    }
    update()
    return () => cancelAnimationFrame(timer)
  }, [text])

  return <span>{displayText || text}</span>
}

const StatCard = ({ number, label, suffix = "+", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, transition: { duration: 0.4 } }}
      className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center group border-white/5"
    >
      <span className="text-4xl md:text-5xl font-extrabold text-accent-light mb-2 tracking-tighter font-heading">
        <Counter to={parseInt(number)} suffix={suffix} />
      </span>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-white transition-colors">
        {label}
      </span>
    </motion.div>
  )
}

const featuredProjects = [
  {
    title: "Futsal Drancy",
    category: "Web Dev & Communication",
    desc: "Conception intégrale du site web et gestion de l'image de marque du club. Un projet alliant design moderne et performance.",
    img: "images/couvertures/futsal-drancy.png",
    path: "/projets/futsal"
  },
  {
    title: "UI/UX Works",
    category: "Design & Développement",
    desc: "Plateforme de révisions BTS Com & Projet HopePower. Une exploration de l'ergonomie et de l'interactivité.",
    img: "images/couvertures/ui-ux-designs.png",
    path: "/projets/ux"
  }
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const baseUrl = import.meta.env.BASE_URL

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 20
    const y = (clientY / innerHeight - 0.5) * 20
    setMousePos({ x, y })
  }

  return (
    <main className="relative overflow-hidden bg-transparent" onMouseMove={handleMouseMove}>
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="grid-overlay" />
      </div>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* 3D Scene Background */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={
            <div className="absolute inset-0 bg-primary flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-accent-light/30 border-t-accent-light rounded-full animate-spin" />
            </div>
          }>
            <HeroScene />
          </Suspense>
        </div>

        {/* Dark gradient overlays for text readability */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary to-transparent" />
        </div>

        {/* Hero Text Content */}
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 section-container text-center flex flex-col items-center pt-20 md:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent-light font-bold tracking-[0.4em] uppercase mb-6 md:mb-8 text-[9px] md:text-xs flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-accent-light/60" />
              BTS Communication · Design Graphique
              <span className="w-8 h-px bg-accent-light/60" />
            </p>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[1] mb-6 md:mb-8 tracking-tighter text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Bonjour,<br />je suis<br />
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="highlight block mt-2"
            >
              <TextScramble text="Tharsanan" />
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-sm md:text-xl text-text-muted mb-10 md:mb-12 max-w-2xl leading-relaxed font-medium mx-auto"
          >
            Étudiant en 2ème année de BTS Communication au Lycée Jacques Brel. 
            Je transforme les idées en expériences visuelles mémorables. 🚀
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center"
          >
            <Magnetic>
              <Link to="/projets" className="btn-premium gap-3 group w-full sm:w-auto px-8">
                Découvrir mes projets
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/contact" className="btn-outline w-full sm:w-auto px-8">
                Me contacter
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
        >
          <span className="text-[8px] uppercase tracking-widest text-text-muted font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-text-muted to-transparent" />
        </motion.div>
      </section>

      {/* QUICK ABOUT / STATS SECTION */}
      <section className="bg-transparent relative py-20 md:py-32 overflow-hidden">
        {/* Decorative accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-light/10 to-transparent"
        />
        
        <div className="section-container relative z-10">
          {/* Top Row: Photo + Text */}
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center mb-16 md:mb-24">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="relative mx-auto lg:mx-0 flex-shrink-0"
            >
              {/* Glow behind photo */}
              <div className="absolute -inset-6 bg-accent/20 blur-[60px] rounded-full" />
              
              {/* Floating animation wrapper with mouse tracking */}
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ 
                  x: mousePos.x * 0.5, 
                  y: mousePos.y * 0.5,
                }}
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
                  <img 
                    src={`${baseUrl}images/site/profile-new.png`}
                    alt="Tharsanan"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:text-left"
            >
              <p className="text-accent-light font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-6 h-px bg-accent-light/60" />
                Qui suis-je ?
              </p>
              <h2 className="text-2xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter leading-tight">
                Un parcours entre <br />
                <span className="highlight italic">technique et communication</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-text-muted text-sm md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  Après un début en BUT Métiers du Multimédia et de l'Internet, j'ai choisi de me spécialiser en communication. 
                  Ce parcours m'a permis de développer à la fois des compétences techniques et une vision créative orientée vers le digital.
                </p>
              </div>
              <Link to="/cv" className="mt-8 md:mt-10 inline-flex items-center gap-2 font-bold text-accent-light hover:text-white transition-colors group">
                Voir mon parcours complet 
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard number="4" label="Ans d'études" delay={0.1} duration={2000} />
            <StatCard number="1" label="An d'expérience pro" delay={0.2} duration={2000} />
            <StatCard number="6" label="Logiciels maîtrisés" delay={0.3} duration={2000} />
            <StatCard number="100" label="Passionné" suffix="%" delay={0.4} duration={1500} />
          </div>
        </div>
      </section>

      {/* INFINITE SKILLS MARQUEE */}
      <InfiniteMarquee />

      {/* FEATURED PROJECTS */}
      <section className="section-container bg-transparent">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-light font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-accent-light/60" />
              Projets Phares
            </p>
            <h2 className="text-2xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tighter">
              Une sélection <br />
              <span className="highlight">des travaux</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-12 md:gap-32 mt-12">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-24 items-center group`}
            >
              <Link to={project.path} className="w-full lg:w-[60%] aspect-[16/9] rounded-3xl overflow-hidden glass-card relative block shadow-2xl">
                <img 
                  src={`${baseUrl}${project.img}`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  onError={(e) => { e.target.style.opacity = '0.2'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="btn-premium scale-90 md:scale-100 backdrop-blur-md bg-accent/80 border border-white/20">
                    Explorer le projet
                  </span>
                </div>
              </Link>
              <div className="w-full lg:w-[40%]">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-4 md:mb-6"
                >
                  <span className="w-8 h-px bg-accent-light/40" />
                  <span className="text-accent-light font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase">
                    {project.category}
                  </span>
                </motion.div>
                <h3 className="text-2xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter group-hover:text-accent-light transition-colors duration-500 leading-none">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-8 md:mb-12 text-sm md:text-xl leading-relaxed max-w-md font-medium">
                  {project.desc}
                </p>
                <Magnetic>
                  <Link to={project.path} className="inline-flex items-center gap-4 font-bold text-white hover:text-accent-light transition-all group/link text-sm md:text-base bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-accent-light/50">
                    Détails du projet 
                    <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform text-accent-light" />
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXPLORE MORE BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 text-center"
        >
          <Magnetic>
            <Link to="/projets" className="btn-outline px-10 py-5 gap-3 group text-base md:text-lg border-accent-light/20 hover:border-accent-light">
              Explorer d'autres projets 
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </Magnetic>
        </motion.div>
      </section>

      {/* PASSION SECTION */}
      <PassionSection />

      {/* CTA SECTION */}
      <section className="bg-transparent py-32 md:py-48 relative">
        <div className="section-container text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-accent-light font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-8">Contact</p>
            <h2 className="text-3xl md:text-8xl font-extrabold mb-8 md:mb-12 text-white tracking-tighter leading-[1.1] transition-all">
              Un projet en tête ? <br />
              <span className="highlight italic">Parlons-en.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
              <Link to="/contact" className="btn-premium px-12 py-6 w-full sm:w-auto text-lg shadow-accent/20">
                Me contacter
              </Link>
              <a href="mailto:tharsananarul@gmail.com" className="text-text-muted font-bold hover:text-white transition-colors text-base md:text-xl flex items-center gap-2 group">
                tharsananarul@gmail.com
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
