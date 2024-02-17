import React from 'react';
import About from '../../components/about/About.jsx'
import Resume from '../../components/resume/Resume.jsx'
import Portfolio from '../../components/portfolio/Portfolio.jsx'
import AnimatedFollowCursor from '../../components/animatedCursor/AnimatedFollowCursor.jsx'
import Robot from '../../components/robotGif/RobotGif.jsx';

import "./homepage.css"


const HomePages = () => {


  return (
    <div>
      <AnimatedFollowCursor/>
    <main className='page'>
      <About/>
      <Resume/>
      <Portfolio/>
      <Robot />

    </main>   
    
    </div>
  )
}

export default HomePages