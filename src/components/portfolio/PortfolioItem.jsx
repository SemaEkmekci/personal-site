import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./portfolio.css";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);
  const [visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const portfolioItems = document.querySelectorAll(".portfolio-item");
      const triggerBottom = window.innerHeight * 0.8;

      portfolioItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
          item.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={`portfolio-item ${visible ? "visible" : ""}`}>
      <img src={img[0]} alt="resim-1" className="portfolio-img" />
      <div className="portfolio-hover" onClick={toggleModal}>
        <h3 className="portfolio-title">{title}</h3>
      </div>

      <Modal
        size="lg"
        isOpen={modal}
        toggle={() => setModal(!modal)}
        zIndex={0}
      >
        <ModalHeader toggle={() => setModal(!modal)}>{title}</ModalHeader>
        <ModalBody>
          <Row>
            <Col lg={12}>
              <div>
                {details.map(({ icon, title, desc, link }, index) => (
                  <li className="modal-item" key={index}>
                    <div>
                      <span className="item-title">{title}</span>
                      <span className="item-details">{desc}</span>
                      <span className="item-details">
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {link}
                        </a>
                      </span>
                    </div>
                  </li>
                ))}
              </div>
            </Col>
            {/* <Col lg={12}>
              <img src={img} alt="" className='modal-img' />
              <br />
           </Col> */}

            <Col lg={12}>
              <div className="slide-container">
                <Slide autoplay={true} duration={2000}>
                  {img.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Proje ${index}`}
                      className="modal-img"
                    />
                  ))}
                </Slide>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PortfolioItem;
