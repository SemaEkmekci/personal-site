import React from 'react'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Services from './components/services/Services.jsx'
import Resume from './components/resume/Resume.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Pricing from './components/pricing/Pricing.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Blog from './components/blog/Blog.jsx'
import Contact from './components/contact/contact.jsx'




 
const App = () => {
  return (
    <>
    <Sidebar/>
    
    <main className="main">
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Pricing/>
      <Testimonials/>
      <Blog/>
      <Contact/>

    </main>
  
    
    </>
  )
}

export default App