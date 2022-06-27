import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AccountsOverview from '../components/AccountsOverview'

const Dashboard = () => {
  const userFirstName = 'Tony'
  const userLastName = 'Jarvis'
  return (
    <div className="Dashboard">
      {<Header />}
      <h1 className='dashboard-h1'>Welcome back {`${userFirstName} ${userLastName}`}</h1>
      <button>Edit Name</button>
      { <AccountsOverview/>}
      {<Footer />}
    </div>
  )
}

export default Dashboard
