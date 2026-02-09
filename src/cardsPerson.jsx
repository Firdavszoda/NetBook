import React from 'react'
import "./cardsPerson.css"
import ImgCardPerson from '#/Image (14).png'
const CardsPerson = () => {
  return (
    <div>
        <div  className='cardPerson'>
            <img src={ImgCardPerson} alt="" />
            <div>
                <h2>Fahim Rahman</h2>
                <p styюle={{color:"#656464"}}>@rahman</p>
            </div>
        </div>
    </div>
  )
}

export default CardsPerson