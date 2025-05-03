import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header />
      <div className='mt-5'>
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard