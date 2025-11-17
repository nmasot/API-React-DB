import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import CountriesList from './components/CountriesList'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paises" element={<CountriesList />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  )
}