import React from 'react'
import Header from '../Other/Header'
import TaskList from '../Other/TaskList'
import Task from '../Other/Task'

const EmployDashboard = ({ data }) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={data} />
      <div className='mt-5'>
        <TaskList data={data} />
        <Task data={data} />
      </div>
    </div>
  )
}

export default EmployDashboard