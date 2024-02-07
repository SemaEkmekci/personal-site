import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const AnimatedFollowCursor = () => {
  
  return (
    <AnimatedCursor 
    innerSize={8}
    outerSize={8}
    color='75, 135, 191'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    />
  )
}

export default AnimatedFollowCursor