import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/argentBankLogo.png'
import SignInButton from './SignInButton'

const Header = () => {
  return (
    <header>
      <NavLink to='/'>
        <img src={Logo} alt='ArgentBank logo'></img>
      </NavLink>
      {<SignInButton />}
    </header>
  )
}

export default Header
