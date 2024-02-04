/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./about.css";
import Avatar from "../../assets/female-programmer.svg"

const About = () => {
  return (
    <section className="about container2 section" id='about'>
      <div className="about-container grid">
        <div className='about-data'>
        <img src={Avatar} alt="" className='about-img' />
          <div className="about-info grid">
            <p className="about-description">Merhaba, ben Sema Nur Ekmekci. Necmettin Erbakan Üniversitesi Bilgisayar Mühendisliği 3.sınıf öğrencisiyim.
            Kendimi yapay zeka alanında geliştirmeye çalışıyorum. "NEÜ Kapsül AIgenZ" takımının bir üyesiyim. Takımımızla birlikte yapay zeka alanında çalışmalar             yapıyoruz. Aynı zamanda web geliştirmeye ilgiliyim. Amatör olarak gitar            ve bağlama çalıyorum.</p>
            <a href="https://drive.google.com/file/d/1QppO8XsjrMnviIHWXMbNG--lbDTAZy3V/view?usp=sharing" className="a-btn">Download CV</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About