import { BannerMasterComponent } from "./BannerMasterComponent"
import { CarouselBanner } from "./CarouselBanner"
import { SliderNav } from "./SliderNav"
import { ContainerBannerMaster, 
        ContainerBannerMasterContent } from "./style"
import { useState } from "react"

export const BannerMaster = () => {

  //const [banner1IsVisible, setBanner1IsVisible] = useState(true)


  return (
    <>
      <ContainerBannerMaster>
        
        {<CarouselBanner/>}

        <ContainerBannerMasterContent>
          <BannerMasterComponent
            title={'MORTAL KOMBAT'}
            value={'299'}
            penny={'99'}
            description={'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.'}
          />
         
          <SliderNav />

        </ContainerBannerMasterContent>

      </ContainerBannerMaster>
    </>
  )
}