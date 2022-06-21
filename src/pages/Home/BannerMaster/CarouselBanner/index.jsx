import { useContext } from "react"

import { Banner1IsVisibleContext } from "../../../../contexts/Banner1IsVisibleContext"

import { gamesBannersMaster } from '../../../../../public/datas/banners.json'

import { ContainerCarouselBanner} from "./style"

export const CarouselBanner = () => {

  const { banner1IsVisible } = useContext(Banner1IsVisibleContext)

  return (
    <>
      <ContainerCarouselBanner isVisibleBanner1={banner1IsVisible}>
        <div className='item item1'  key={gamesBannersMaster[0].slide}>
          <img 
            className="banner banner-mobile" 
            src={gamesBannersMaster[0].image.mobile.img}
          />
          <img 
            className="banner banner-desktop" 
            src={gamesBannersMaster[0].image.desktop.img}
          />
        </div>
        <div className='item item2'  key={gamesBannersMaster[1].slide}>
          <img 
            className="banner banner-mobile" 
            src={gamesBannersMaster[1].image.mobile.img}
          />
          <img 
            className="banner banner-desktop" 
            src={gamesBannersMaster[1].image.desktop.img}
          />
        </div>
      </ContainerCarouselBanner>
    </>
  )
}