import { BannerMaster } from "./BannerMaster"
import { BannersSecondary } from "./BannersSecondary"
import { FeaturesProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ContainerHome } from "./style"

import { useState, createContext} from "react";
export const CounterContext = createContext(); 

export const Home = () => {

  const [navIsVisible, setNavIsVisible] = useState(false)

  const [counterBag, setCounterBag] = useState(0)

  function closeNavDesktop () {
    if(navIsVisible === true){
      setNavIsVisible(false)  
    }
  }  

  return (
    <>
      <CounterContext.Provider value={{counterBag, setCounterBag}}>
          <ContainerHome 
            onClick={closeNavDesktop}
          >
              <Header
                navIsVisible={navIsVisible}
                setNavIsVisible={setNavIsVisible}
              />
              <BannerMaster/> 
              <BannersSecondary/>
              <FeaturesProducts/> 
              <Footer/>
          </ContainerHome>
      </CounterContext.Provider>
    </>
  )
}