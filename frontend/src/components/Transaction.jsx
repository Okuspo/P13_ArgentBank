import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faPen } from '@fortawesome/free-solid-svg-icons'

const penIcon = <FontAwesomeIcon icon={faPen} />
const chevronDownIcon = <FontAwesomeIcon icon={faChevronDown} />
const chevronUpIcon = <FontAwesomeIcon icon={faChevronUp} />

const Transaction = () => {
  return (
    <div className='transaction'>
      <div className='transaction-overview'>
      {chevronDownIcon}
      {chevronUpIcon}
        <span className='transaction__date'>June 20th, 2020</span>
        <span className='transaction__description'>Golden Sun Bakery</span>
        <span className='transaction__amount'>$5.00</span>
        <span className='transaction__balance'>$2082.79</span>
      </div>
      <div className='transaction-edition'>
        <span className='transaction-edition__type'>Transaction Type: Electronic</span>
        <div className='transaction-edition__category'>
          <span className='transaction-edition__category__content'>Category: Food</span>
          {penIcon}
        </div>
        <div className='transaction-edition__notes'>
          <span className='transaction-edition__notes__content'>Notes:</span>
          {penIcon}
        </div>
      </div>
    </div>
  )
}

export default Transaction
