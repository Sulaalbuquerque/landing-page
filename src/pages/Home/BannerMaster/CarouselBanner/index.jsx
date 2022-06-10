import { useContext } from "react"

// Contexts 
import { Banner1IsVisibleContext } from "../../../../contexts/Banner1IsVisibleContext"

//Styles 
import { ContainerCarouselBanner} from "./style"

//Datas
export const gamesBanners = [
  {
    slide: '1',
    title: 'MORTAL KOMBAT',
    imgMobile: '../../../../../assets/img/principal_banner_mobile.webp',
    imgDesktop: '../../../../../assets/img/principal_banner_desktop.webp',
    value: '299',
    penny: '99',
    description: 'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.'
  },
  {
    slide:'2',
    title: 'RED DEAD II',
    imgMobile: '../../../../../assets/img/principal_banner_mobile_02.webp',
    imgDesktop: '../../../../../assets/img/principal_banner_desktop_02.webp',
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