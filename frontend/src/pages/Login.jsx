import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      {<Nav />}
      <main className='bg-dark'>
        <section className='sign-in-content'>
        {<FontAwesomeIcon icon={faCircleUser} />}
        <h1>Sign In</h1>
        <form>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text'></input>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input id='username' type='text'></input>
          </div>
          <div className='input-remember'>
            <input id='username' type='checkbox'></input>
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <NavLink to='/dashboard'>
            <button className='sign-in-submit'>Sign In</button>
          </NavLink>
        </form>
        </section>
      </main>
      {<Footer />}
    </>
  )
}

export default Login
