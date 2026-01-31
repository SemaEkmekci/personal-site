/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./about.css";
import Avatar from "../../assets/female-programmer.svg";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <section
      className={`about container2 section ${visible ? "visible" : ""}`}
      id="about"
    >
      <div className="about-container grid">
        <div className="about-data">
          <img src={Avatar} alt="" className="about-img" />
          <div className="about-info grid">
            <p className="about-description">
              Merhaba, ben Sema Nur Ekmekci. Bilgisayar Mühendisiyim. Yapay zeka ve yazılım geliştirme alanlarında çalışmalar yürütüyor, bu alanlarda teknik yetkinliğimi sürekli geliştirmeye odaklanıyorum. Özellikle yapay zeka tabanlı uygulamalar ve web teknolojileri üzerine projeler geliştiriyorum.
            </p>
            <a
              href="https://drive.google.com/file/d/1HG8dxrY6mL1VrqHpj7O67_1s9E_LDiFJ/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="a-btn"
            >
              Özgeçmişi Görüntüle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
