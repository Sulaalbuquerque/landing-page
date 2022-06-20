import { useContext } from "react"

import { Banner1IsVisibleContext } from "../../../contexts/Banner1IsVisibleContext"

import { BannerMasterComponent } from "./BannerMasterComponent"
import { CarouselBanner } from "./CarouselBanner"
import { SliderNav } from "./SliderNav"

import { ContainerBannerMaster, ContainerBannerMasterContent } from "./style"

import { gamesBannersMaster } from '../../../../public/datas/banners.json'

export const BannerMaster = () => {

  const { banner1IsVisible } = useContext(Banner1IsVisibleContext)

  return (
    <>
      <ContainerBannerMaster >
        
        <CarouselBanner/>

        <ContainerBannerMasterContent isVisibleBanner1={banner1IsVisible}>
          {
            gamesBannersMaster.map((game) => {
              return (
                <BannerMasterComponent
                  className={game.banner}
                  title={game.title}
                  price={game.price}
                  penny={game.penny}
                  description={game.description}
                />
              )
            })
          }
  
          <SliderNav />

        </ContainerBannerMasterContent>

      </ContainerBannerMaster>
    </>
  )
}