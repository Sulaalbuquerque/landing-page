import { Banner } from "../../../components/Banner"
import { ContainerBannersSecondary } from "./style"

export const BannersSecondary = () => {
  return (
    <>
      <ContainerBannersSecondary>
        <Banner
          img={'../../../../assets/img/secondary-banners/zelda_banner.webp'}
          altImg={'Banner The Legend of Zelda - Breath of th wild'}
          description={'The Legend of Zelda - Breath of th wild'}
        />

        <Banner
          img={'../../../../assets/img/secondary-banners/sekiro_banner.webp'}
          altImg={'Banner SEKIRO - Shadows die twice'}
          description={'SEKIRO - Shadows die twice'}
        />
      </ContainerBannersSecondary>
    </>
  )
}