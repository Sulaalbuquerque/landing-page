import { BannerSecondaryComponent } from "../../../components/BannerSecondaryComponent"
import { ContainerBannersSecondary } from "./style"

export const BannersSecondary = () => {
  return (
    <>
      <ContainerBannersSecondary>
        <BannerSecondaryComponent
          img={'../../../../assets/img/secondary-banners/zelda_banner.webp'}
          altImg={'Banner The Legend of Zelda - Breath of th wild'}
          description={'The Legend of Zelda - Breath of th wild'}
        />

        <BannerSecondaryComponent
          img={'../../../../assets/img/secondary-banners/sekiro_banner.webp'}
          altImg={'Banner SEKIRO - Shadows die twice'}
          description={'SEKIRO - Shadows die twice'}
        />
      </ContainerBannersSecondary>
    </>
  )
}