import React from 'react'
import Transaction from './Transaction'

const TransactionsBoard = () => {
  return (
    <div className='transactions-board'>
      <header className='transactions-board__header'>
        <span className='transactions-board__header__date'>Date</span>
        <span className='transactions-board__header__description'>description</span>
        <span className='transactions-board__header__amount'>amount</span>
        <span className='transactions-board__header__balance'>balance</span>
      </header>
      <div className='transaction-board__transactions'>
        {<Transaction />}
        {<Transaction />}
        {<Transaction />}
        {<Transaction />}
      </div>
    </div>
  )
}

export default TransactionsBoard
