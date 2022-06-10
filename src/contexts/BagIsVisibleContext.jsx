import { createContext, useState} from "react";

export const BagIsVisibleContext = createContext();

export const BagIsVisibleContextProvider = ({ children }) => {

  const [bagIsVisible, setBagIsVisible] = useState(false)
  
  return (
    <>
      <BagIsVisibleContext.Provider value={{ bagIsVisible, setBagIsVisible }}>
        {children}
      </BagIsVisibleContext.Provider>
    </>
  )
} 