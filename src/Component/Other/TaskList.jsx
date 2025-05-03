import React from 'react'

const TaskList = ({ data }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
      <div className='bg-blue-500 rounded-xl p-6 shadow-lg'>
        <h2 className='text-3xl font-bold text-white'>{data.task_summary.new_task}</h2>
        <h3 className='text-xl font-semibold text-white'>New Tasks</h3>
      </div>

      <div className='bg-green-500 rounded-xl p-6 shadow-lg'>
        <h2 className='text-3xl font-bold text-white'>{data.task_summary.completed}</h2>
        <h3 className='text-xl font-semibold text-white'>Completed</h3>
      </div>

      <div className='bg-purple-500 rounded-xl p-6 shadow-lg'>
        <h2 className='text-3xl font-bold text-white'>{data.task_summary.active}</h2>
        <h3 className='text-xl font-semibold text-white'>In Progress</h3>
      </div>

      <div className='bg-red-500 rounded-xl p-6 shadow-lg'>
        <h2 className='text-3xl font-bold text-white'>{data.task_summary.failed}</h2>
        <h3 className='text-xl font-semibold text-white'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskList