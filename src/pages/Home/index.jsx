import { useContext } from "react"

import { NavIsVisibleContext } from "../../contexts/NavIsVisibleContext"

import { BannerMaster } from "./BannerMaster"
import { BannersSecondary } from "./BannersSecondary"
import { FeaturesProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import { Header } from "./Header"

import { ContainerHome } from "./style"

export const Home = () => {

  const { navIsVisible, setNavIsVisible } = useContext(NavIsVisibleContext)

  return (
    <>
      <ContainerHome >
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