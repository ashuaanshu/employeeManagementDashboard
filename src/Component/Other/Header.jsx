import React from 'react'

const Header = ({ data }) => {
  const logHandler = () => {
    localStorage.removeItem("LoggedInUser")
    window.location.reload()
  }

  return (
    <div className='flex justify-between items-center p-4'>
      <h1 className='text-2xl text-white font-semibold'>Hello <br /> 
        <span className='text-4xl font-bold text-green-300'>
          {data ? data.first_name : 'Admin'}✌️
        </span>
      </h1>
      <button 
        className='bg-red-500 text-white rounded-2xl px-5 py-2 font-medium text-center' 
        onClick={logHandler}
      >
        LogOut
      </button>
    </div>
  )
}

export default Header