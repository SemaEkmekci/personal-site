import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap';
import "./portfolio.css";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);
  const [visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      const triggerBottom = window.innerHeight * 0.8;

      portfolioItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={`portfolio-item ${visible ? 'visible' : ''}`}>
      <img src={img} alt="resim-1" className="portfolio-img" />
      <div className='portfolio-hover' onClick={toggleModal}>
        <h3 className='portfolio-title'>
          {title}
        </h3>
      </div>

      <Modal size="m" isOpen={modal} toggle={() => setModal(!modal)} zIndex={0} >
        <ModalHeader toggle={() => setModal(!modal)}>
          {title}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg={12}>
              <div>
                {details.map(({ icon, title, desc, link }, index) => (
                  <li className="modal-item" key={index}>
                    <span className={`item-icon ${icon}`}></span>
                    <div>
                      <span className="item-title">{title}</span>
                      <span className='item-details'>{desc}</span>
                      <span className='item-details'><a href={link} target="_blank" rel="noreferrer noopener">{link}</a></span>
                    </div>
                  </li>
                ))}
              </div>
            </Col>
            <Col lg={12}>
              <img src={img} alt="" className='modal-img' />
              <br />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PortfolioItem;
