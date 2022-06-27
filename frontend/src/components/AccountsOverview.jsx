import React from 'react'
import Account from './Account'

const AccountsOverview = () => {
  return (
    <div className='accounts-overview'>
      {<Account />}
      {<Account />}
      {<Account />}
    </div>
  )
}

export default AccountsOverview
