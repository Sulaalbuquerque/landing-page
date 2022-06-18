import { useContext } from "react"

import { Banner1IsVisibleContext } from "../../../../contexts/Banner1IsVisibleContext"

import imgMobileSlide1 from '../../../../../assets/img/principal_banner_mobile.webp'
import imgMobileSlide2 from '../../../../../assets/img/principal_banner_mobile_02.webp'
import imgDesktopSlide1 from '../../../../../assets/img/principal_banner_desktop.webp'
import imgDesktopSlide2 from '../../../../../assets/img/principal_banner_desktop_02.webp'

import { ContainerCarouselBanner} from "./style"

export const CarouselBanner = () => {

  const { banner1IsVisible } = useContext(Banner1IsVisibleContext)

  return (
    <>
      <ContainerCarouselBanner isVisibleBanner1={banner1IsVisible}>
        <div className='item item1'>
          <img className="banner banner-mobile" src={imgMobileSlide1}/>
          <img className="banner banner-desktop" src={imgDesktopSlide1}/>
        </div>
        <div className='item item2'>
          <img className="banner banner-mobile" src={imgMobileSlide2}/>
          <img className="banner banner-desktop" src={imgDesktopSlide2}/>
        </div>
      </ContainerCarouselBanner>
    </>
  )
}