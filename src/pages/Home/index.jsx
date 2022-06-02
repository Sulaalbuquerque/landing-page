import { BannerMaster } from "./BannerMaster"
import { BannersSecondary } from "./BannersSecondary"
import { FeaturesProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ContainerHome } from "./style"

import { useState, useEffect } from "react"

export const Home = () => {

  const [navIsVisible, setNavIsVisible] = useState(false)

  function closeNavDesktop () {
    if(navIsVisible === true){
      setNavIsVisible(false)  
    }
  }  

  return (
    <>
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
    </>
  )
}