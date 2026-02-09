import React from 'react'
import "./cardC.css"
import ImgCardC from "#/Icon (2).png"
const CardC = () => {
  return (
    <div>
        <div className='cardC'>
            <img src={ImgCardC} alt="" />
            <div>
                <h2>Members, Friends</h2>
                <p style={{color:"#656464"}}>Members, Friends Connection ( like <br />followers ), Private Message</p>
            </div>
        </div>
    </div>
  )
}

export default CardC