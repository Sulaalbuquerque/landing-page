import { BannerMaster } from "./BannerMaster"
import { BannersSecondary } from "./BannersSecondary"
import { FeaturesProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ContainerHome } from "./style"

import { useState } from "react"

export const Home = () => {

  const [navIsVisible, setNavIsVisible] = useState(false)

  function closeNav () {

    if(navIsVisible === true){
      setNavIsVisible(false)
    }
  }  

  return (
    <>
      <ContainerHome 
        onClick={closeNav}
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