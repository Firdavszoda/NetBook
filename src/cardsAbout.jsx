import React from 'react'
import ImgStar from '#/Star.png' 
import ImgPeople from '#/people.png'
import "./cardsAbout.css"
const CardsAbout = () => {
  return (
    <div>
        <div className='cardAbout'>
            <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
                <img style={{width:"28px",height:"28px"}} src={ImgStar} alt="" />
                <h2>4.8 Rating</h2>
            </div>
            <div style={{display:"flex",gap:"20px"}}>
                <img src={ImgPeople} alt="" />
                <p style={{color:"#8C8C8C"}}><span style={{color:"#217BF4"}}>+836k</span> Members</p>
            </div>
            <p style={{color:"#8C8C8C"}}>More than 2 billion we people over <br />countries use socibooks we to stay <br />in touch with friends.</p>
            <p style={{color:"#217BF4",fontWeight:"700", marginTop:"50px"}}>Join Our Community</p>
        </div>
    </div>
  )
}

export default CardsAbout