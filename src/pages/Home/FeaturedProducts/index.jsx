import { Carousel } from "./Carousel"
import { ContainerFeaturesProducts, 
        ContainerFeaturesProductsCards } from "./style"

export const FeaturesProducts = () => {

  /* const handleLeftClick = (e) => {
    e.preventDefault()
  }

  const handleRightClick = (e) => {

  } */

  return (
    <>
      <ContainerFeaturesProducts>

        <div className="title">
          <img className="icon-title" src="assets/svgs/group6.svg" alt="Ícone de título" />
          <h3>Produtos em destaque</h3>
        </div>

        <ContainerFeaturesProductsCards>

          <div className="control">
            <img /* onClick={handleLeftClick} */ src="assets/svgs/angle-left-solid-black.svg" alt="" />
          </div>

          <Carousel/>

          <div className="control">
            <img /* onClick={handleRightClick} */ src="assets/svgs/angle-right-solid-black.svg" alt="" />
          </div>

        </ContainerFeaturesProductsCards>

      </ContainerFeaturesProducts>
    </>
  )
}