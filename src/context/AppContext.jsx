import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
  const [menuClick, setMenuClick] = useState(false)
  const [mobile, setMobile] = useState(false)

  const toggleMenubar = () => {
      setMenuClick(!menuClick)
  }
  return (
    <AppContext.Provider value={{menuClick, toggleMenubar, mobile}}>
      {children}
    </AppContext.Provider>
  )
}
