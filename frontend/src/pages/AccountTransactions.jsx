import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Account from '../components/Account'
import TransactionsBoard from '../components/TransactionsBoard'

const AccountTransactions = () => {
  return (
    <div className="account-transactions">
      {<Header />}
      {<Account />}
      {<TransactionsBoard />}
      {<Footer />}
    </div>
  )
}

export default AccountTransactions
