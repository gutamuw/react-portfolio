
import './App.css'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <AnimatedBackground />
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
