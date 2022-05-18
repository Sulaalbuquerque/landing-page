import { Card } from "../../../components/Card"
import { ContainerFeaturesProducts, ContainerFeaturesProductsCards } from "./style"

export const FeaturesProducts = (/* { setSuccessIsVisible } */) => {
    
      return (
        <>
          <ContainerFeaturesProducts>
            <div className="title">
              <img src="assets/svgs/group6.svg" alt="Ícone de título" />
              <h3>Produtos em destaque</h3>
            </div>

            <ContainerFeaturesProductsCards>
              <Card
                img='assets/img/products/product-outriders.svg'
                name='Outriders'
                altImg='Imagem do produto Outriders'
                value='R$ 200,00'
                /* setSuccessIsVisible={setSuccessIsVisible} */
              />
              <Card
                img='assets/img/products/product-cyberpunk2077.svg'
                name='CYBERPUNK 2077'
                altImg='Imagem do produto CYBERPUNK 2077'
                value='R$ 200,00'
                /* setSuccessIsVisible={setSuccessIsVisible} */
              />
              <Card
                img='assets/img/products/product-donkey-kong-country-tropical-freeze.svg'
                name='Donkey Kong Country Tropical Freeze'
                altImg='Imagem do produto Donkey Kong Country Tropical Freeze'
                value='R$ 200,00'
               /*  setSuccessIsVisible={setSuccessIsVisible} */
              />
            </ContainerFeaturesProductsCards>
          </ContainerFeaturesProducts>
        </>
      )
  }