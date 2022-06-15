import { createContext, useState} from "react";

export const NavIsVisibleContext = createContext();

export const NavIsVisibleContextProvider = ({ children }) => {

  const [navIsVisible, setNavIsVisible] = useState(false)
  
  return (
    <>
      <NavIsVisibleContext.Provider value={{ navIsVisible, setNavIsVisible }}>
        {children}
      </NavIsVisibleContext.Provider>
    </>
  )
} 