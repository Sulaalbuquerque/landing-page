import { BannerSecondaryComponent } from "./BannerSecondaryComponent"

//import imgBannerZelda from '../../../../public/assets/img/secondary-banners/zelda_banner.webp'
//import imgBannerSekiro from '../../../../public/assets/img/secondary-banners/sekiro_banner.webp'

import { ContainerBannersSecondary } from "./style"

import { gamesBannersSecondary } from '../../../../public/datas/banners.json'

export const BannersSecondary = () => {

  return (
    <>
      <ContainerBannersSecondary>
        
        <BannerSecondaryComponent
          img={gamesBannersSecondary[0].image.img}
          altImg={gamesBannersSecondary[0].image.altImg}
          description={gamesBannersSecondary[0].description}
        />

        <BannerSecondaryComponent
          img={gamesBannersSecondary[1].image.img}
          altImg={gamesBannersSecondary[1].image.altImg}
          description={gamesBannersSecondary[1].description}
        />
        
      </ContainerBannersSecondary>
    </>
  )
}