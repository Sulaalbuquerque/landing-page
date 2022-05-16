import { Banner } from "../../../components/Banner"
import { ContainerBannersSecondary } from "./style"

export const BannersSecondary = ({ img, altImg, description }) => {
    
      return (
        <>
          <ContainerBannersSecondary>
            <Banner
              img={'../../../../assets/img/zelda_banner.jpg'}
              altImg={'Banner The Legend of Zelda - Breath of th wild'}
              description={'The Legend of Zelda - Breath of th wild'}
            />

            <Banner
              img={'../../../../assets/img/sekiro_banner.jpg'}
              altImg={'Banner SEKIRO - Shadows die twice'}
              description={'SEKIRO - Shadows die twice'}
            />
          </ContainerBannersSecondary>
        </>
      )
  }