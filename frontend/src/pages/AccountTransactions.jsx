import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Account from '../components/Account'
import TransactionsBoard from '../components/TransactionsBoard'

const AccountTransactions = () => {
  return (
    <div className="account-transactions">
      {<Nav />}
      {<Account />}
      {<TransactionsBoard />}
      {<Footer />}
    </div>
  )
}

export default AccountTransactions
