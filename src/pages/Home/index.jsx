import { BannerMaster } from "./BannerMaster"
import { BannersSecondary } from "./BannersSecondary"
import { FeaturesProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ContainerHome } from "./style"

import { useState } from "react"
import { Success } from "../Success"

export const Home = () => {

  /* const [sucessIsVisible, setSuccessIsVisible] = useState(false)  *///estado para controlar se está aberto ou fechado

  return (
    <>
      <Success
       /*  sucessIsVisible={sucessIsVisible}
        setSuccessIsVisible={setSuccessIsVisible} */
      />
      <ContainerHome>
          <Header/>
          <BannerMaster/>
          <BannersSecondary/>
          <FeaturesProducts/>
          <Footer/>
      </ContainerHome>
    </>
  )
}