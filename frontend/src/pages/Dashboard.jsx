import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import AccountsOverview from '../components/AccountsOverview'

const Dashboard = () => {
  const userFirstName = 'Tony'
  const userLastName = 'Jarvis'
  return (
      <>
        {<Nav />}
        <main className="bg-dark">
          <header className='dashboard-header'>
            <h1 className='dashboard-header_h1'>Welcome back {`${userFirstName}`} <br/> {`${userLastName}`}</h1>
            <button className='dashboard-header_edit-button'>Edit Name</button>
          </header>
          { <AccountsOverview/>}
        </main>
        {<Footer />}
      </>
  )
}

export default Dashboard
