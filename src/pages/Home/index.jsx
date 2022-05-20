import { BannerMaster } from "./BannerMaster"
import { BannersSecondary } from "./BannersSecondary"
import { FeaturesProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ContainerHome } from "./style"

import { useState } from "react"
import { Success } from "../Success"

export const Home = () => {

  const [navIsVisible, setNavIsVisible] = useState(false)

  function closeNav () {

    if(navIsVisible === true){
      setNavIsVisible(false)
    }
  }  

  return (
    <>
      <Success/>
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