import React from 'react'
import "./App.css"
import ImgLogo from "#/a.png"
import ImgHeader from "#/Iamge.png"
import ImgSection1 from "#/Image (11).png"
import ImgSection12 from "#/Image (12).png"
import ImgSection13 from "#/Image (13).png"
import CardsAbout from '@/cardsAbout.jsx'
import CardC from '@/cardC.jsx'
import CardsPerson from '@/CardsPerson.jsx'
import ImageAppStore from '#/image 288.png'
import ImagePlayMarket from "#/image 289.png"
import ImageMobile from "#/mobile.png"
import CardsJob from '@/cardsJob.jsx'
import ImgIcon from '#/Social icon.png'

const App = () => {
  return (
    <div>
        <nav className='navbar'>
          <div>
          <img src={ImgLogo} alt="" />
          </div>
          <div style={{display:"flex", gap:"30px", color:"#656464"}}>
            <h3>Home</h3>
            <h3>Community</h3>
            <h3>Blog</h3>
            <h3>Events</h3>
          </div>
          <div>
            <input className='inputNavbar' type="text" placeholder='Search Hare...' />
          </div>
        </nav>

      <header className='header'>
        <div style={{maxWidth:"1400px", margin:"auto", display:"flex", justifyContent:"space-evenly"}}>
        <div>
          <button className='btnNetbook'>Netbook community</button>
          <h1 style={{fontSize:"56px",color:"#0A093D"}}>Your Solutions For <br />Community!</h1>
          <p style={{marginTop:"20px", color:"#656464"}}>More than 2 billion people in over countries use socibook <br />to stay in touch with friends & family.</p>
          <div style={{display:"flex",gap:"30px"}}>
            <button className='btnAbout'>About More</button>
            <button className='btnInvite'>Invite Friend</button>
          </div>
        </div>
        <div>
          <img src={ImgHeader} alt="" />
        </div>
        </div>
      </header>

      <main className='section1'>
        <div>
          <p style={{color:"#217BF4",fontWeight:"700"}}>Whats Netboks?</p>
          <h2 style={{fontSize:"40px"}}>Why Join to Netbook <br />Social Network?</h2>
          <p style={{fontSize:"16px", color:"#656464"}}>Recent surveys have indicated that small businesses <br />recognise the need they have to connect with <br />consumer.</p>
          <div style={{marginTop:"30px"}}>
            <li>Groups</li>
            <li style={{marginTop:"10px"}}>Messages</li>
            <li style={{marginTop:"10px"}}>Share</li>
          </div>
        </div>
        <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
        <img style={{width:"270px",height:"360px"}} src={ImgSection1} alt="" />
        <div>
          <img  src={ImgSection12} alt="" />
          <img style={{display:"block", marginTop:"20px"}} src={ImgSection13} alt="" />
        </div>
        </div>
      </main>

      <main className='section2'>
        <CardsAbout/>
        <CardsAbout/>
        <CardsAbout/>
      </main>

      <main className='section3'>
        <div style={{textAlign:"center"}}>
        <p style={{color:"#217BF4"}}>Our Community</p>
        <h2>Community Main Feature</h2>
        <p style={{color:"#656464"}}>The wise man therefore always holds in these matters <br />to this principle of selection.</p>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <CardC/>
          <CardC/>
        </div>

         <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <CardC/>
          <CardC/>
        </div>

         <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <CardC/>
          <CardC/>
        </div>
      </main>

      <main className='section4'>
                <div style={{textAlign:"center"}}>
        <p style={{color:"#217BF4"}}>Valuable Team</p>
        <h2>Our Active Members</h2>
        <p style={{color:"#656464"}}>when an unknown printer took a galley of type and meeting <br />fari scrambled it.</p>
        </div>
        <div className='actions'>
          <p>Newst</p>
          <p>Popular</p>
          <button style={{width:"150px",height:"55px",backgroundColor:"#217BF4",border:"none",color:"white",borderRadius:"14px"}}>Active</button>
        </div>


        <div style={{display:"flex", justifyContent:"space-evenly",marginTop:"30px"}}>
        <CardsPerson/>
        <CardsPerson/>
        <CardsPerson/>
        <CardsPerson/>
        </div>
      </main>

      <main className='section5'>
        <div style={{maxWidth:"1400px",margin:"auto",display:"flex",justifyContent:"space-evenly"}}>

            <div style={{marginTop:"100px"}}>
        <p style={{color:"#217BF4"}}>Get Our Aplication</p>
        <h2>Why Join to Netbook <br />You Can Easily Find <br />
This App…!</h2>
        <p style={{color:"#656464"}}>I say chap that’s suing lavatory chip shop <br />gosh off his smashing boot are you taking <br />the piss posh loo brilliant.</p>
        <div style={{display:"flex", gap:"20px", marginTop:"30px"}}>
        <img style={{width:"140px",height:"50px"}} src={ImageAppStore} alt="" />
        <img style={{width:"140px",height:"50px"}} src={ImagePlayMarket} alt="" />
        </div>
        </div>
        <div>
          <img style={{width:"500px",height:"400px"}} src={ImageMobile} alt="" />
        </div>
        </div>
      </main>

      <main className='section6'>
        <div style={{textAlign:"center"}}>
        <p style={{color:"#217BF4",fontWeight:"700"}}>Get Our Aplication</p>
        <h2>Latest News</h2>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}}>
          <CardsJob/>
          <CardsJob/>
          <CardsJob/>
        </div>
      </main>

      <footer className='footer'>
        <div style={{maxWidth:"1400px",margin:"auto", display:"flex",justifyContent:"space-evenly",alignItems:"center", gap:"100px"}} >

        <div>
          <h2>Home</h2>
          <p style={{color:"#E7E7E7"}}>Home</p>
          <p style={{color:"#E7E7E7"}}>Community</p>
          <p style={{color:"#E7E7E7"}}>Events</p>
          <p style={{color:"#E7E7E7"}}>Contact</p>
        </div>

                <div>
          <h2>Resources</h2>
          <p style={{color:"#E7E7E7"}}>Home</p>
          <p style={{color:"#E7E7E7"}}>Community</p>
          <p style={{color:"#E7E7E7"}}>Events</p>
          <p style={{color:"#E7E7E7"}}>Contact</p>
        </div>        <div>
          <h2>Community</h2>
          <p style={{color:"#E7E7E7"}}>Home</p>
          <p style={{color:"#E7E7E7"}}>Community</p>
          <p style={{color:"#E7E7E7"}}>Events</p>
          <p style={{color:"#E7E7E7"}}>Contact</p>
        </div>

                <div>
          <h2>Main links</h2>
          <p style={{color:"#E7E7E7"}}>Home</p>
          <p style={{color:"#E7E7E7"}}>Community</p>
          <p style={{color:"#E7E7E7"}}>Events</p>
          <p style={{color:"#E7E7E7"}}>Contact</p>
        </div>

        <div>
          <h3>Subscribe Cirkle <br />Newsletter</h3>
          <p style={{color:"#E7E7E7"}}>Subscribe to be the first one to know <br />about updates. Enter your email</p>
          <div style={{marginTop:"30px"}}>
          <input className='inpFooter' type="text" placeholder='Email Address' name="" id="" />
          <button className='btnSubscribe'>Subscribe</button>
          </div>
        </div>
        </div>
      </footer>

      <footer className='footer2'>
        <div style={{maxWidth:"1400px",margin:"auto",display:"flex",alignItems:"center", gap:"400px"}}>
        <p>Besnik Creative Agency.</p>
        <img style={{widows:"140px", height:"30px"}} src={ImgLogo} alt="" />
        <img style={{width:"160px",height:"30px"}} src={ImgIcon} alt="" />
        </div>
      </footer>

    </div>
  )
}

export default App