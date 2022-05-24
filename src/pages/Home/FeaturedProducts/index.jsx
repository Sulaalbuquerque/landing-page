import { Carousel } from "./Carousel"
import { ContainerFeaturesProducts, 
        ContainerFeaturesProductsCards } from "./style"

export const FeaturesProducts = () => {

  return (
    <>
      <ContainerFeaturesProducts>

        <div className="title">
          <img className="icon-title" src="assets/svgs/group6.svg" alt="Ícone de título" />
          <h3>Produtos em destaque</h3>
        </div>

        <ContainerFeaturesProductsCards>
          <Carousel/>
        </ContainerFeaturesProductsCards>

      </ContainerFeaturesProducts>
    </>
  )
}