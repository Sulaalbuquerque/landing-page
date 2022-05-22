import { SliderNav } from "../SliderNav"
import { ContainerBannerMaster, 
        ContainerBannerMasterContent, 
        ContainerSliderNavContent } from "./style"

export const BannerMaster = () => {
  return (
    <>
      <ContainerBannerMaster>

        <ContainerBannerMasterContent>
          <h1>MORTAL KOMBAT</h1>
          <h2>
            R$ 299
            <span className="cents">,99</span>
          </h2>
          <p>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
        </ContainerBannerMasterContent>

      </ContainerBannerMaster>

      <ContainerSliderNavContent>
        <SliderNav/>
      </ContainerSliderNavContent>
    </>
  )
}