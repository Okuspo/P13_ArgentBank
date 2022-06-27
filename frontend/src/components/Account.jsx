import React from 'react'
import { NavLink } from 'react-router-dom'

const Account = () => {
  return (
    <section className='account'>
      <div className='account__details'>
        <span className='account__details__title'>Argent Bank Checking (x8349)</span>
        <span className='account__details__amount'>$2,082.79</span>
        <span className='account__details__type'>Available Balance</span>
      </div>
      <NavLink to='/account' className='account__view-button cta'>
        <button className='view-transaction-button'>View transactions</button>
      </NavLink>
    </section>
  )
}

export default Account
