import { createContext, useState} from "react"

export const CounterBagContext = createContext()

export const CounterBagContextProvider = ({ children }) => {
  
  const [counterGameCard1, setCounterGameCard1] = useState(0)
  const [counterGameCard2, setCounterGameCard2] = useState(0)
  const [counterGameCard3, setCounterGameCard3] = useState(0)

  const totalRequests = counterGameCard1 + counterGameCard2 + counterGameCard3

  return (
    <>
      <CounterBagContext.Provider value={{ counterGameCard1, setCounterGameCard1,
                                           counterGameCard2, setCounterGameCard2,
                                           counterGameCard3, setCounterGameCard3,
                                           totalRequests }}>
        {children}
      </CounterBagContext.Provider>
    </>
  )
} 