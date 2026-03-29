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
        size="xl"
        isOpen={modal}
        toggle={() => setModal(!modal)}
        zIndex={0}
        centered
      >
        <ModalHeader toggle={() => setModal(!modal)}>{title}</ModalHeader>
        <ModalBody>
          <Row className="g-3">
            <Col lg={5}>
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
            <Col lg={7}>
              <ul className="modal-details-list">
                {details.map(({ title: detailTitle, desc, link }, index) => (
                  <li className="modal-detail-item" key={index}>
                    {detailTitle && <span className="item-title">{detailTitle}</span>}
                    {desc && <span className="item-details">{desc}</span>}
                    {link && (
                      <a href={link} target="_blank" rel="noreferrer noopener" className="item-link">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PortfolioItem;
