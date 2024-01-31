/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import Profile from '../../assets/profile.jpg';
import "./sidebar.css";

const Sidebar = ({isSidebar, setisSidebar}) => {;


  const toggleSidebar = () => {
    setisSidebar(!isSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setisSidebar(true);
      }else{
        setisSidebar(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  return (
    <div>
        <div className={`sidebar ${isSidebar ? 'close' : ''}`}>      
          <div className="logo-details">
            <i className='bx bx-code' ></i>
            <span className="logo_name">SNE</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="">
                <i className="bx bx-grid-alt"></i>
                <span className="link_name">Anasayfa</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name">Anasayfa</a></li>
              </ul>
            </li>
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className="bx bx-collection"></i>
                  <span className="link_name">Yazılarım</span>
                </a>
              </div>
            </li>
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className="bx bx-book-alt"></i>
                  <span className="link_name">Projelerim</span>
                </a>
              </div>
            </li>
           
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className='bx bxs-contact' ></i>
                  <span className="link_name">İletişim</span>
                </a>
              </div>
            </li>
            <li>
              <div className="profile-details">
                <div className="profile-content">
                    <img src={Profile} alt="profileImg" />
                </div>
                <div className="name-job">
                  <div className="profile_name">Sema Nur Ekmekci</div>
                  <div className="job">Bilgisayar Mühendisliği Öğrencisi</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <div className="home-content">
            <i className="bx bx-menu" onClick={toggleSidebar}></i>
            <DarkModeToggle />
          </div>
        </section>
        </div>
  );
};

export default Sidebar;



