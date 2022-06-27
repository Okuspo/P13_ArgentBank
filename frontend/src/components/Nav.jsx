import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/argentBankLogo.png'
import SignInButton from './SignInButton'

const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>
        <img className='nav-logo' src={Logo} alt='ArgentBank logo'></img>
      </NavLink>
      {<SignInButton />}
    </nav>
  )
}

export default Nav
