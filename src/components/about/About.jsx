/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import "./about.css";
import Avatar from "../../assets/female-programmer.svg"

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 500); 

    return () => clearTimeout(timeout); 
  }, []);
  return (
    <section className={`about container2 section ${visible ? 'visible' : ''}`} id='about'>
      <div className="about-container grid">
        <div className='about-data'>
        <img src={Avatar} alt="" className='about-img' />
          <div className="about-info grid">
            <p className="about-description">Merhaba, ben Sema Nur Ekmekci. Necmettin Erbakan Üniversitesi Bilgisayar Mühendisliği 3.sınıf öğrencisiyim.
            Kendimi yapay zeka alanında geliştirmeye çalışıyorum. "NEÜ Kapsül AIgenZ" takımının bir üyesiyim. Takımımızla birlikte yapay zeka alanında çalışmalar             yapıyoruz. Aynı zamanda web geliştirmeye ilgiliyim. Amatör olarak gitar            ve bağlama çalıyorum.</p>
            <a href="https://drive.google.com/file/d/1qiMUbtcDwME6WWmeP9Y89W5oH9H435lC/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="a-btn">Download CV</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About