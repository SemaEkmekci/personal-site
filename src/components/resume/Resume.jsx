/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import "./resume.css"
import Data from "./Data"
import Card from './Card'

const Resume = () => {

  const [visible, setVisible] = useState(false); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true); 
    }, 500); 

    return () => clearTimeout(timeout); 
  }, []);


  return (
    <section className={`resume container-resume section ${visible ? 'visible' : ''}`}>
      <div className="resume-container grid">

        <div className='timeline grid'>
        <h2 className='section-title'>Eğitim</h2> <br />
          {Data.map((val, id)=>{
            if(val.category === "education"){
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
              )
            }

          })}
        </div>
        <div className='timeline grid'>
        <h2 className='section-title'>Deneyim</h2> <br />

          {Data.map((val, index)=>{
            if(val.category === "experience"){
              return (
                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
              )
            }
          })}
        </div>


      </div>
    </section>
  )
}

export default Resume