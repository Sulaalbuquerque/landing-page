import { useContext } from "react"

import { NavIsVisibleContext } from "../../contexts/NavIsVisibleContext"
import { BagIsVisibleContext } from "../../contexts/BagIsVisibleContext"
import { ContactIsVisibleContext } from "../../contexts/ContactIsVisibleContext"
import { SearchIsVisibleContext } from "../../contexts/SearchIsVisibleContext"

import { BannerMaster } from "./BannerMaster"
import { BannersSecondary } from "./BannersSecondary"
import { FeaturesProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import { Header } from "./Header"

import { ContainerHome } from "./style"

export const Home = () => {

  const { navIsVisible, setNavIsVisible } = useContext(NavIsVisibleContext)
  const { bagIsVisible } = useContext(BagIsVisibleContext)
  const { contactIsVisible } = useContext(ContactIsVisibleContext)
  const { searchIsVisible } = useContext(SearchIsVisibleContext)

  return (
    <>
      <ContainerHome>
        <Header
          navIsVisible={navIsVisible}
          setNavIsVisible={setNavIsVisible}
        />
        <div 
          className={(navIsVisible 
                    || contactIsVisible 
                    || searchIsVisible 
                    || bagIsVisible) ? 'blur' : ''}
        >
          <BannerMaster/> 
          <BannersSecondary/>
          <FeaturesProducts/> 
          <Footer/>
        </div>
      </ContainerHome>
    </>
  )
}