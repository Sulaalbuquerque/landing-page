//Components 
import { Carousel } from "./Carousel"

//Imgs 
import iconTitle from '../../../../assets/svgs/group6.svg'

//Styles 
import { ContainerFeaturesProducts, ContainerFeaturesProductsCards } from "./style"


export const FeaturesProducts = () => {

  return (
    <>
      <ContainerFeaturesProducts>

        <div className="title">
          <img 
            className="icon-title" 
            src={iconTitle}
            alt="Ícone de título" 
          />
          <h3>Produtos em destaque</h3>
        </div>

        <ContainerFeaturesProductsCards>
          <Carousel/>
        </ContainerFeaturesProductsCards>

      </ContainerFeaturesProducts>
    </>
  )
}