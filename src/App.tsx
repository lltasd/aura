import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import SpecialsPage from './pages/SpecialsPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'
import BodyProceduresPage from './pages/BodyProceduresPage'
import BodyProcedureDetailPage from './pages/BodyProcedureDetailPage'
import FaceProceduresPage from './pages/FaceProceduresPage'
import FaceProcedureDetailPage from './pages/FaceProcedureDetailPage'
import ProceduresOverviewPage from './pages/ProceduresOverviewPage'
import LaserPage from './pages/LaserPage'
import CosmetologyPage from './pages/CosmetologyPage'
import BodyCorrectionPage from './pages/BodyCorrectionPage'
import InjectionPage from './pages/InjectionPage'
import ThreadLiftingPage from './pages/ThreadLiftingPage'
import PricingPage from './pages/PricingPage'
import SpecialistsPage from './pages/SpecialistsPage'
import HardwareCosmetologyPage from './pages/HardwareCosmetologyPage'
import DeviceDetailPage from './pages/DeviceDetailPage'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
// detail page for face can reuse body detail if structure same, but we create separate route to body component later if needed

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      if (link) {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <Router>
      <ScrollToTop behavior="auto" />
      <AnimatedRoutes />
    </Router>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/procedures" element={<ProceduresOverviewPage />} />
        <Route path="/laser" element={<LaserPage />} />
        <Route path="/cosmetology" element={<CosmetologyPage />} />
        <Route path="/body-correction" element={<BodyCorrectionPage />} />
        <Route path="/injection" element={<InjectionPage />} />
        <Route path="/thread-lifting" element={<ThreadLiftingPage />} />
        <Route path="/hardware-cosmetology" element={<HardwareCosmetologyPage />} />
        <Route path="/hardware-cosmetology/:slug" element={<PageTransition><DeviceDetailPage /></PageTransition>} />
        <Route path="/body-procedures" element={<BodyProceduresPage />} />
        <Route path="/body-procedures/:slug" element={<PageTransition><BodyProcedureDetailPage /></PageTransition>} />
        <Route path="/face-procedures" element={<FaceProceduresPage />} />
        <Route path="/face-procedures/:slug" element={<PageTransition><FaceProcedureDetailPage /></PageTransition>} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/specials" element={<SpecialsPage />} />
        <Route path="/specialists" element={<SpecialistsPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App

