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
import PricingPage from './pages/PricingPage'
import SpecialistsPage from './pages/SpecialistsPage'
// detail page for face can reuse body detail if structure same, but we create separate route to body component later if needed

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/procedures" element={<ProceduresOverviewPage />} />
        <Route path="/body-procedures" element={<BodyProceduresPage />} />
        <Route path="/body-procedures/:slug" element={<BodyProcedureDetailPage />} />
        <Route path="/face-procedures" element={<FaceProceduresPage />} />
        <Route path="/face-procedures/:slug" element={<FaceProcedureDetailPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/specials" element={<SpecialsPage />} />
        <Route path="/specialists" element={<SpecialistsPage />} />
      </Routes>
    </Router>
  )
}

export default App

