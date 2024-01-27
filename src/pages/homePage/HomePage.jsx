import React from 'react';
import Home from '../../components/home/Home.jsx'
import About from '../../components/about/About.jsx'
import Services from '../../components/services/Services.jsx'
import Resume from '../../components/resume/Resume.jsx'
import Portfolio from '../../components/portfolio/Portfolio.jsx'
import Pricing from '../../components/pricing/Pricing.jsx'
import Testimonials from '../../components/testimonials/Testimonials.jsx'
import "./homepage.css"


const HomePages = ({isSidebar, setisSidebar}) => {
  console.log(isSidebar);

  return (
    <div>
    <main className={`${isSidebar ? 'sidebarClose' : 'sidebarOpen'}`}>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Pricing/>
      <Testimonials/>  
    </main>   
    
    </div>
  )
}

export default HomePages