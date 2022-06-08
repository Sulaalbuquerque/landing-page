import { BannerMasterComponent } from "./BannerMasterComponent"
import { CarouselBanner } from "./CarouselBanner"
import { SliderNav } from "./SliderNav"
import { ContainerBannerMaster, 
        ContainerBannerMasterContent } from "./style"

import { useState, createContext, useContext } from "react";
export const Banner1IsVisibleContext = createContext()
import { SearchIsVisibleContext } from "../../../contexts/SearchIsVisibleContext"; 

export const BannerMaster = () => {

  const [banner1IsVisible, setBanner1IsVisible] = useState(true)

  const { setSearchIsVisible } = useContext(SearchIsVisibleContext);

  return (
    <>
      <Banner1IsVisibleContext.Provider value={{ banner1IsVisible, setBanner1IsVisible }}>
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
      </Banner1IsVisibleContext.Provider>
    </>
  )
}