//Components 
import { BannerSecondaryComponent } from "./BannerSecondaryComponent"

//Imgs 
import imgBannerZelda from '../../../../assets/img/secondary-banners/zelda_banner.webp'
import imgBannerSekiro from '../../../../assets/img/secondary-banners/sekiro_banner.webp'

//Styles 
import { ContainerBannersSecondary } from "./style"


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