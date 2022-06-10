//Components 
import { BannerSecondaryComponent } from "./BannerSecondaryComponent"

//Styles 
import { ContainerBannersSecondary } from "./style"

//Datas
const gamesSecondarybanners = [
  {
    img: '../../../../assets/img/secondary-banners/zelda_banner.webp',
    altImg: 'Banner The Legend of Zelda - Breath of th wild',
    description: 'The Legend of Zelda - Breath of th wild'
  },
  {
    img: '../../../../assets/img/secondary-banners/sekiro_banner.webp',
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