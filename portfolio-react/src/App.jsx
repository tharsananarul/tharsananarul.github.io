import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Projets from './pages/Projets'
import CV from './pages/CV'
import Competences from './pages/Competences'
import Contact from './pages/Contact'
import ProjetFutsal from './pages/ProjetFutsal'
import ProjetAlda from './pages/ProjetAlda'
import ProjetSansBavures from './pages/ProjetSansBavures'
import ProjetBtsCom from './pages/ProjetBtsCom'
import ProjetPerso from './pages/ProjetPerso'
import ProjetsUX from './pages/ProjetsUX'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projets/futsal" element={<ProjetFutsal />} />
          <Route path="/projets/alda" element={<ProjetAlda />} />
          <Route path="/projets/sans-bavures" element={<ProjetSansBavures />} />
          <Route path="/projets/bts-com" element={<ProjetBtsCom />} />
          <Route path="/projets/perso" element={<ProjetPerso />} />
          <Route path="/projets/ux" element={<ProjetsUX />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
