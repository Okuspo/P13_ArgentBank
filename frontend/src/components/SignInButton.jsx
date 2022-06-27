import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const SignInButton = () => {
  return (
    <NavLink to='/login' className='nav-button sign-in'>
      {<FontAwesomeIcon icon={faCircleUser} />}
      <div>Sign In</div>
    </NavLink>
  )
}

export default SignInButton
