import React from 'react'
import Navbar from '../compenents/navbar'



export const Home = () => {
  const influencer = require ('../assets/influencer-2.png');
  const logo = require ('../assets/gari-icon-new.png');
  const discordicon = require ('../assets/discord-icon-1.png');
  const telegramicon = require ('../assets/telegram-icon-1.png');

  return (
    <div className='bg-pink-400'>
      <Navbar />
      <div className='flex justify-between w-full mx-0'>
      <div className='mx-10'>
        <ul className='flex justify-start gap-7 items-center'>
        
          <li><img src={logo} alt="logo" className='w-32 h-32 my-5'/></li>
          <li><h1 className='text-8xl font-bold font-sans'>MBK</h1></li>        
        </ul>
        <br></br>
        <br></br>
        <h2 className=' font-bold text-5xl first-letter:text-8xl font-semi-bold mx-12'>Get Rich While Enjoy !</h2>
        <br></br>
        <br></br>
        <h2 className='text-5xl first-letter:text-7xl font-semi-bold mx-24'>social media network <br></br>powered with <span className='text-white font-bold'>$Crypto</span></h2>
      </div>
      <div className='rotate-6 mx-12 my-12'>
        <img src={influencer} alt="influencer" />
      </div>
      </div>
      <div className='mx-auto text-center w-full bg-white'>
        <h1 className='text-7xl font-semibold font-sans'><span className='underline'>Join the community</span> </h1>
        <br></br>
        <div className='mx-10 flex-col items-center justify-between'> 
          <div className='bg-black flex items-center w-full'>
            <img src={telegramicon} alt="telegram" className='w-36 h-36'/>
            <span> Join the main <span className='font-bold underline'>Telegram</span> server for Announcements, and invite codes </span>
          </div>
          <div className='mx-10 flex items-center w-full'>
            <img src={discordicon} alt="discord" className='w-36 h-36'/>
            <span> Join the main <span className='font-bold underline'>Discord</span> server for Announcements, and invite codes </span>
          </div>
          <div className='flex items-center mx-auto justify-between w-full'>
            <img src={telegramicon} alt="telegram" className='w-36 h-36'/>
            <span> Join the main <span className='font-bold underline'>Twitter</span> page for Announcements, and invite codes </span>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

