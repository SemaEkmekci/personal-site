import React from 'react'
import Data from './Data'
import PortfolioItem from './PortfolioItem'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <div>
      <section className='portfolio section'>
        <h2 className='section-title'>
          <span>
              Portföy
          </span>
        <div className="portfolio-container grid">
          {Data.map((item) => {
            return <PortfolioItem key={item.id} {...item}/>

          })}


        </div>
        </h2>
      </section>

    </div>
  )
}

export default Portfolio