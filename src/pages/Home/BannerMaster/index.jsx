import { BannerMasterComponent } from "./BannerMasterComponent"
import { SliderNav } from "./SliderNav"
import { ContainerBannerMaster, 
        ContainerBannerMasterContent, 
        ContainerSliderNavContent } from "./style"

export const BannerMaster = () => {

  return (
    <>
      <ContainerBannerMaster>

        <ContainerBannerMasterContent>

          <BannerMasterComponent
            title={'MORTAL KOMBAT'}
            value={'299'}
            penny={'99'}
            description={'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.'}
          />

        </ContainerBannerMasterContent>

      </ContainerBannerMaster>

      <ContainerSliderNavContent>
        <SliderNav />
      </ContainerSliderNavContent>
    </>
  )
}