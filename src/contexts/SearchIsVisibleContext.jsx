import { createContext, useState} from "react";

export const SearchIsVisibleContext = createContext();

export const SearchIsVisibleContextProvider = ({ children/* , value  */}) => {

  const [searchIsVisible, setSearchIsVisible] = useState(false)
  
    return (
      <>
        <SearchIsVisibleContext.Provider value={{ searchIsVisible, setSearchIsVisible }}>
            {children}
        </SearchIsVisibleContext.Provider>
      </>
    )
} 