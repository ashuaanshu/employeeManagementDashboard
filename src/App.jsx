import React, { useState, useEffect, useContext } from 'react'
import './App.css'
import SignupLogin from './Component/Auth/SignupLogin'
import EmployDashboard from './Component/Dashboard/EmployDashboard'
import Header from './Component/Other/Header'
import AdminDashboard from './Component/Dashboard/AdminDashboard'
import { setLocalStorage, getLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/ContextProider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedUserData, setLoggedUserData] = useState(null)
  const AuthData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      if (userData.data) {
        setLoggedUserData(userData.data)
      }
    }
  }, [])

  const handLogin = (email, password) => {
    if (AuthData && AuthData.admin.find((e) => email === e.email && password === e.password)) {
      setUser('admin')
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: 'admin' }))
    }
    else if (AuthData) {
      const employee = AuthData.employees.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employees')
        setLoggedUserData(employee)
        localStorage.setItem("LoggedInUser", JSON.stringify({ role: 'employees', data: employee }))
      }
    }
    else {
      console.log("fthg")
      alert("Invalid credentials")
    }
  }

  return (
    <>
      {!user && <SignupLogin handlogin={handLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employees' && <EmployDashboard data={loggedUserData} />}
    </>
  )
}

export default App