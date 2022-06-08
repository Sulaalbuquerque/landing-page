import { useContext } from "react"

// Contexts 
import { SearchIsVisibleContext } from "../../../contexts/SearchIsVisibleContext"
import { Banner1IsVisibleContext } from "../../../contexts/Banner1IsVisibleContext"

//Components 
import { BannerMasterComponent } from "./BannerMasterComponent"
import { CarouselBanner } from "./CarouselBanner"
import { SliderNav } from "./SliderNav"

//Styles 
import { ContainerBannerMaster, ContainerBannerMasterContent } from "./style"


export const BannerMaster = () => {

  const { banner1IsVisible } = useContext(Banner1IsVisibleContext)
  const { setSearchIsVisible } = useContext(SearchIsVisibleContext)

  return (
    <>
      <ContainerBannerMaster onClick={() => setSearchIsVisible(false)}>
        
        <CarouselBanner/>

        <ContainerBannerMasterContent isVisibleBanner1={banner1IsVisible}>
          <BannerMasterComponent
            className={'banner1'}
            title={'MORTAL KOMBAT'}
            value={'299'}
            penny={'99'}
            description={'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.'}
          />

          <BannerMasterComponent
            className={'banner2'}
            title={'RED DEAD II'}
            value={'289'}
            penny={'99'}
            description={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}
          />
          
          <SliderNav />

        </ContainerBannerMasterContent>

      </ContainerBannerMaster>
    </>
  )
}