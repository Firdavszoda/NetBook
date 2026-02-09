import React from 'react'
import ImgJob from '#/Image (15).png'
import "./cardsJob.css"
const CardsJob = () => {
  return (
    <div>
        <div className='cardJob'>
            <img src={ImgJob} alt="" />
            <div>
                <h3>It Does Not Matter Hows <br />Slowly go as Long</h3>
                <p style={{color:"#656464"}}>Continue Reading</p>
            </div>
        </div>
    </div>
  )
}

export default CardsJob