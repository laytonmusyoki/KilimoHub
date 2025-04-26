import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import './index.css'
import AOS from 'aos'
import "aos/dist/aos.css"
import HeroSection from './components/HeroSection'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FeaturedProducts from './components/FeaturedProducts'
import AllProducts from './components/AllProducts'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'


function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100
    })

    AOS.refresh()
  }, [])


  return (
   <>
   <Navbar/>
   <Router>
    <Routes>
      <Route path='/' element={
        <>
          <HeroSection/>
          <FeaturedProducts/>
          <AllProducts/>
          <About/>
          <Contact/>
          <Footer/>
        </>
      } /> 
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
   </Router>
   
  
   </>
  )
}

export default App
