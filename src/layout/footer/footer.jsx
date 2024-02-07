import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <>
    <div className="blog-box"></div>

    <section className={`footer`}>
      <footer name="contact">
        <div className="container">
          <div className="footer-content">
            <h3 className='text-uppercase'>İLETİŞİM</h3>
            <ul className="social-icons">
            <li><a href="https://www.instagram.com/ekmkc_smnr/" target="_blank" rel="noreferrer noopener"><i className="s-btn fab fa-instagram btn-outline-light"></i></a></li>
            <li><a href="https://www.linkedin.com/in/sema-nur-ekmekci-360200226" target="_blank" rel="noreferrer noopener"><i className="s-btn fab fa-linkedin btn-outline-light"></i></a></li>
            <li><a href="https://github.com/SemaEkmekci" target="_blank" rel="noreferrer noopener"><i className="s-btn fab fa-github btn-outline-light"></i>
            <div className="bottom-bar"></div>
            </a>
            
            </li>
            </ul>
            <div className="bottom-bar">
          E-mail : ekmekci.semanur@gmail.com
        </div>
          </div>
        </div>
        
      </footer>
    </section>
    </>
  );
};

export default Footer;
