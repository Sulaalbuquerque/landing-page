import { BannerMaster } from "./BannerMaster"
import { BannersSecondary } from "./BannersSecondary"
import { FeaturesProducts } from "./FeaturedProducts"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ContainerHome } from "./style"

export const Home = () => {
    
      return (
        <>
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