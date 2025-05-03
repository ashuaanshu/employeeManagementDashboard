import React from 'react'

const FailTask = ({ task }) => {
  return (
    <div className='h-ful flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 rounded-xl py-1 px-3'>High</h3>
            <h4>{task.date}</h4>
        </div>
        <p className='mt-5 text-xl font-semibold'>{task.title}</p>
        <p className='mt-2 text-sm'>{task.description}</p>
        <div className='mt-5 flex items-center justify-center'>
            <button className='bg-green-600 px-2 py-1 text-sm'>Failed</button>
        </div>
    </div>
  )
}

export default FailTask