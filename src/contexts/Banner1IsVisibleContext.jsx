import { createContext, useState} from "react";

export const Banner1IsVisibleContext = createContext();

export const Banner1IsVisibleContextProvider = ({ children }) => {

  const [banner1IsVisible, setBanner1IsVisible] = useState(true)
  
  return (
    <>
      <Banner1IsVisibleContext.Provider value={{ banner1IsVisible, setBanner1IsVisible }}>
        {children}
      </Banner1IsVisibleContext.Provider>
    </>
  )
} 