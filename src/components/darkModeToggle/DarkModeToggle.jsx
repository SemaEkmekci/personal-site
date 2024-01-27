import React, { useState, useEffect } from 'react';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';


const DarkModeToggle = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode === '1';
      });
    
      useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark-theme');
        } else {
          document.body.classList.remove('dark-theme');
        }
    
        localStorage.setItem('darkMode', darkMode ? '1' : '0');
      }, [darkMode]);
    
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };


      return (
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? (
            <img src={Sun} alt="Light Mode" id="sunDarkMode"/>
          ) : (
            <img src={Moon} alt="Dark Mode" id="moonDarkMode"/>
          )}
        </div>
        
      );
    };

export default DarkModeToggle

   