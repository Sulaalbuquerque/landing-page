import { BannerSecondaryComponent } from "./BannerSecondaryComponent"

import imgBannerZelda from '../../../../assets/img/secondary-banners/zelda_banner.webp'
import imgBannerSekiro from  '../../../../assets/img/secondary-banners/sekiro_banner.webp'

import { ContainerBannersSecondary } from "./style"

const gamesSecondarybanners = [
  {
    img: imgBannerZelda,
    altImg: 'Banner The Legend of Zelda - Breath of th wild',
    description: 'The Legend of Zelda - Breath of th wild'
  },
  {
    img: imgBannerSekiro,
    altImg: 'Banner SEKIRO - Shadows die twice',
    description: 'SEKIRO - Shadows die twice'
  }
]

export const BannersSecondary = () => {

  return (
    <>
      <ContainerBannersSecondary>
        
        <BannerSecondaryComponent
          img={gamesSecondarybanners[0].img}
          altImg={gamesSecondarybanners[0].altImg}
          description={gamesSecondarybanners[0].description}
        />

        <BannerSecondaryComponent
          img={gamesSecondarybanners[1].img}
          altImg={gamesSecondarybanners[1].altImg}
          description={gamesSecondarybanners[1].description}
        />
        
      </ContainerBannersSecondary>
    </>
  )
}