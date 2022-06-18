import { useContext } from "react"

import { Banner1IsVisibleContext } from "../../../contexts/Banner1IsVisibleContext"

import { BannerMasterComponent } from "./BannerMasterComponent"
import { CarouselBanner } from "./CarouselBanner"
import { SliderNav } from "./SliderNav"

import { ContainerBannerMaster, ContainerBannerMasterContent } from "./style"

import { gamesBannersMaster } from '../../../datas/banners.json'

export const BannerMaster = () => {

  const { banner1IsVisible } = useContext(Banner1IsVisibleContext)

  return (
    <>
      <ContainerBannerMaster >
        
        <CarouselBanner/>

        <ContainerBannerMasterContent isVisibleBanner1={banner1IsVisible}>
          <BannerMasterComponent
            className={'banner1'}
            title={gamesBannersMaster[0].title}
            price={gamesBannersMaster[0].price}
            penny={gamesBannersMaster[0].penny}
            description={gamesBannersMaster[0].description}
          />

          <BannerMasterComponent
            className={'banner2'}
            title={gamesBannersMaster[1].title}
            price={gamesBannersMaster[1].price}
            penny={gamesBannersMaster[1].penny}
            description={gamesBannersMaster[1].description}
          />
          
          <SliderNav />

        </ContainerBannerMasterContent>

      </ContainerBannerMaster>
    </>
  )
}