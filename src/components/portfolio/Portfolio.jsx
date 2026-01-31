import React from 'react'
import Data from './Data'
import PortfolioItem from './PortfolioItem'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfoy">
      <h2 className="section-title">Portföy</h2>
      <div className="portfolio-container grid">
        {Data.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio