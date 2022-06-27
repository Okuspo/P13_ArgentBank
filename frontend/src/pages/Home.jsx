import React from 'react'
import Header from '../components/Header'
import SliderPicture from '../assets/bank-tree.jpeg'
import ChatIcon from '../assets/icon-chat.png'
import MoneyIcon from '../assets/icon-money.png'
import SecurityIcon from '../assets/icon-security.png'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="Home">
      {<Header />}
      <div className='home-slider'>
        <img src={SliderPicture} alt='slider-picture' />
        <div className='slider-text'>
        <h1>
          No fees.
          No minimum deposit.
          High interest rates.
          Open a savings account with Argent Bank today!
        </h1>
        </div>
      </div>

      <div className='home-claims'>

        <div className='home-claims'>
          <div className='claim-icon-background'>
            <img className='claim-icon' src={ChatIcon} alt='icon'/>
          </div>
          <h2 className='claim-title'>You are our #1 priority</h2>
          <div className='claim-text'>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</div>
        </div>

        <div className='home-claims'>
          <div className='claim-icon-background'>
            <img className='claim-icon' src={MoneyIcon} alt='icon'/>
          </div>
          <h2 className='claim-title'>More savings means higher rates</h2>
          <div className='claim-text'>The more you save with us, the higher your interest rate will be!</div>
        </div>

        <div className='home-claims'>
          <div className='claim-icon-background'>
            <img className='claim-icon' src={SecurityIcon} alt='icon'/>
          </div>
          <h2 className='claim-title'>Security you can trust</h2>
          <div className='claim-text'>We use top of the line encryption to make sure your data and money is always safe.</div>
        </div>

      </div>
      {<Footer />}
    </div>
  )
}

export default Home
