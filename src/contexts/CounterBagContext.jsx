import { createContext, useState} from "react";

export const CounterBagContext = createContext();

export const CounterBagContextProvider = ({ children }) => {

  const [counterBag, setCounterBag] = useState(0)
  
  return (
    <>
      <CounterBagContext.Provider value={{ counterBag, setCounterBag }}>
          {children}
      </CounterBagContext.Provider>
    </>
  )
} 