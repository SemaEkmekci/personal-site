import React from 'react';
import Home from '../../components/home/Home.jsx'
import About from '../../components/about/About.jsx'
import Resume from '../../components/resume/Resume.jsx'
import Portfolio from '../../components/portfolio/Portfolio.jsx'
import Pricing from '../../components/pricing/Pricing.jsx'
import Testimonials from '../../components/testimonials/Testimonials.jsx'
import AnimatedFollowCursor from '../../components/animatedCursor/AnimatedFollowCursor.jsx'
import "./homepage.css"


const HomePages = () => {


  return (
    <div>
      <AnimatedFollowCursor/>
    <main className='page'>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Pricing/>
      <Testimonials/> 

    </main>   
    
    </div>
  )
}

export default HomePages