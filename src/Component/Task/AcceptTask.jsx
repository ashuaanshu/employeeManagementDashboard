import React from 'react'

const AcceptTask = ({ task }) => {
    return (
        <div className='h-ful flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 rounded-xl py-1 px-3'>High</h3>
                <h4>{task.date}</h4>
            </div>
            <p className='mt-5 text-xl font-semibold'>{task.title}</p>
            <p className='mt-2 text-sm'>{task.description}</p>

            <div className='flex justify-between mt-4'>
                <button className='bg-green-600 px-2 py-1 text-sm'>mark as completed</button>
                <button className='bg-red-500 px-2 py-1 text-sm'>mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask