import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext();

const ContextProider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage();
    
    if (employees && admin) {
      setUserData({ employees, admin });
    } else {
      console.log("No data in localStorage");
    }
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default ContextProider