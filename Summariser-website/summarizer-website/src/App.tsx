import Hero from './Components/Hero/Hero'
import Summarizer from './Components/Summarizer/Summarizer'
import Features from './Components/Features/Features'
import Dashboard from './Components/Dashboard/Dashboard'
import Testimonials from './Components/Testimonials/Testimonials'
import FAQ from './Components/FAQ/FAQ'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <Summarizer />
      <Features />
      <Dashboard />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App