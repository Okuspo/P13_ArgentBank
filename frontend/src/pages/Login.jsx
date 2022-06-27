import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  return (
    <div className="login">
      {<Header />}
      {<FontAwesomeIcon icon={faCircleUser} />}
      <h1>Sign In</h1>
      <form className='login-form'>
        <label>Username
          <input type='text'></input>
        </label>
        <label>Password
          <input type='text'></input>
        </label>
        <label>
        <input type='checkbox'></input>
          Remember me
        </label>
        <button type='submit'>Sign In</button>
      </form>
      {<Footer />}

    </div>
  )
}

export default Login
