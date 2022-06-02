import { BannerSecondaryComponent } from "./BannerSecondaryComponent"
import { ContainerBannersSecondary } from "./style"

import imgBannerZelda from '../../../../assets/img/secondary-banners/zelda_banner.webp'
import imgBannerSekiro from '../../../../assets/img/secondary-banners/sekiro_banner.webp'

export const BannersSecondary = () => {
  return (
    <>
      <ContainerBannersSecondary>
        
        <BannerSecondaryComponent
          img={imgBannerZelda}
          altImg={'Banner The Legend of Zelda - Breath of th wild'}
          description={'The Legend of Zelda - Breath of th wild'}
        />

        <BannerSecondaryComponent
          img={imgBannerSekiro}
          altImg={'Banner SEKIRO - Shadows die twice'}
          description={'SEKIRO - Shadows die twice'}
        />
      </ContainerBannersSecondary>
    </>
  )
}