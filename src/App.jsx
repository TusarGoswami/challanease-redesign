import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import ProductShowcase from './sections/ProductShowcase'
import TrustSection from './sections/TrustSection'
import CtaSection from './sections/CtaSection'
import Footer from './sections/Footer'
import KonamiEasterEgg from './components/KonamiEasterEgg'

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ProductShowcase />
        <TrustSection />
        <CtaSection />
      </main>
      <Footer />
      <KonamiEasterEgg />
    </div>
  )
}
