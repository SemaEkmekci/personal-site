import React, { useState } from 'react';
import Robot from "../../assets/robot.gif"
import './robotGif.css';

const RobotGif = () => {
  const [isJumping, setIsJumping] = useState(false);

  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      let position = 0;
      const jumpInterval = setInterval(() => {
        if (position >= 100) {
          clearInterval(jumpInterval);
          const fallInterval = setInterval(() => {
            if (position === 0) {
              clearInterval(fallInterval);
              setIsJumping(false);
            }
            position -= 5;
            document.getElementById('robot').style.bottom = position + 'px';
          }, 20);
        }
        position += 5;
        document.getElementById('robot').style.bottom = position + 'px';
      }, 20);
    }
  };

  return (
    <div className="robot-container">
      <div id="robot" >
          <img src={Robot} alt="robot" className={isJumping ? 'robot-gif jump' : 'robot-gif'}  onClick={jump}/>
      </div>
    </div>
  );
};

export default RobotGif;
