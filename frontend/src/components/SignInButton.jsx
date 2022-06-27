import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const SignInButton = () => {
  return (
    <NavLink to='/login' className='sign-in-button'>
      {<FontAwesomeIcon icon={faCircleUser} />}
      <span>Sign In</span>
    </NavLink>
  )
}

export default SignInButton
