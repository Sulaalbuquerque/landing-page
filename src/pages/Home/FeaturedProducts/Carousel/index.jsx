import { ContainerCarousel, ContainerCarouselCards} from "./style"
import { Card } from "../../../../components/Card"

export const Carousel = () => {
  return (
    <>
      <ContainerCarousel>
        <ContainerCarouselCards>
          <Card
            img='assets/img/products/product-outriders.svg'
            name='Outriders'            
            altImg='Imagem do produto Outriders'
            value='R$ 200,00'
          />
          <Card
            img='assets/img/products/product-cyberpunk2077.svg'
            name='CYBERPUNK 2077'
            altImg='Imagem do produto CYBERPUNK 2077'
            value='R$ 200,00'
          />
          <Card
            img='assets/img/products/product-donkey-kong-country-tropical-freeze.svg'
            name='Donkey Kong Country Tropical Freeze'            altImg='Imagem do produto Donkey Kong Country Tropical Freeze'
            value='R$ 200,00'
          />
        </ContainerCarouselCards>
      </ContainerCarousel>
    </>
  )
}