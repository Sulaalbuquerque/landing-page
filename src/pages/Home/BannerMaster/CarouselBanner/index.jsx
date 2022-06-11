import { useContext } from "react"

import { Banner1IsVisibleContext } from "../../../../contexts/Banner1IsVisibleContext"

import imgMobileSlide1 from '../../../../../assets/img/principal_banner_mobile.webp'
import imgMobileSlide2 from '../../../../../assets/img/principal_banner_mobile_02.webp'
import imgDesktopSlide1 from '../../../../../assets/img/principal_banner_desktop.webp'
import imgDesktopSlide2 from '../../../../../assets/img/principal_banner_desktop_02.webp'

import { ContainerCarouselBanner} from "./style"

export const gamesBanners = [
  {
    slide: '1',
    title: 'MORTAL KOMBAT',
    imgMobile: imgMobileSlide1,
    imgDesktop: imgDesktopSlide1,
    value: '299',
    penny: '99',
    description: 'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.'
  },
  {
    slide:'2',
    title: 'RED DEAD II',
    imgMobile: imgMobileSlide2,
    imgDesktop: imgDesktopSlide2,
    value: '289',
    penny: '99',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
  }
]

export const CarouselBanner = () => {

  const { banner1IsVisible } = useContext(Banner1IsVisibleContext)

  return (
    <>
      <ContainerCarouselBanner isVisibleBanner1={banner1IsVisible}>
        <div className='item item1'>
          <img className="banner banner-mobile" src={gamesBanners[0].imgMobile}/>
          <img className="banner banner-desktop" src={gamesBanners[0].imgDesktop}/>
        </div>
        <div className='item item2'>
          <img className="banner banner-mobile" src={gamesBanners[1].imgMobile}/>
          <img className="banner banner-desktop" src={gamesBanners[1].imgDesktop}/>
        </div>
      </ContainerCarouselBanner>
    </>
  )
}