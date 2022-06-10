import { useContext } from "react"

// Contexts 
import { Banner1IsVisibleContext } from "../../../contexts/Banner1IsVisibleContext"

//Components 
import { BannerMasterComponent } from "./BannerMasterComponent"
import { CarouselBanner } from "./CarouselBanner"
import { SliderNav } from "./SliderNav"

//Styles 
import { ContainerBannerMaster, ContainerBannerMasterContent } from "./style"

//Datas
import { gamesBanners } from "./CarouselBanner"

export const BannerMaster = () => {

  const { banner1IsVisible } = useContext(Banner1IsVisibleContext)

  return (
    <>
      <ContainerBannerMaster >
        
        <CarouselBanner/>

        <ContainerBannerMasterContent isVisibleBanner1={banner1IsVisible}>
          <BannerMasterComponent
            className={'banner1'}
            title={gamesBanners[0].title}
            value={gamesBanners[0].value}
            penny={gamesBanners[0].penny}
            description={gamesBanners[0].description}
          />

          <BannerMasterComponent
            className={'banner2'}
            title={gamesBanners[1].title}
            value={gamesBanners[1].value}
            penny={gamesBanners[1].penny}
            description={gamesBanners[1].description}
          />
          
          <SliderNav />

        </ContainerBannerMasterContent>

      </ContainerBannerMaster>
    </>
  )
}