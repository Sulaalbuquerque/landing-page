import { createContext, useState} from "react";

export const ContactIsVisibleContext = createContext();

export const ContactIsVisibleContextProvider = ({ children }) => {

  const [contactIsVisible, setContactIsVisible] = useState(false)
  
  return (
    <>
      <ContactIsVisibleContext.Provider value={{ contactIsVisible, setContactIsVisible }}>
        {children}
      </ContactIsVisibleContext.Provider>
    </>
  )
} 