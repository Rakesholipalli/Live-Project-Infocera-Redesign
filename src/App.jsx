import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Technologies from './pages/Technologies'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/technologies.html" element={<Technologies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services.html" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio.html" element={<Portfolio />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers.html" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
