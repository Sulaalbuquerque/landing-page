import { createContext, useState} from "react";

export const SuccessIsVisibleContext = createContext();

export const SuccessIsVisibleContextProvider = ({ children }) => {

  const [successIsVisible, setSuccessIsVisible] = useState(false)
  
  return (
    <>
      <SuccessIsVisibleContext.Provider value={{ successIsVisible, setSuccessIsVisible }}>
        {children}
      </SuccessIsVisibleContext.Provider>
    </>
  )
} 