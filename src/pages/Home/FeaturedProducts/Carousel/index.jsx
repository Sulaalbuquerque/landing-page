import { ContainerCarousel } from "./style"
import { Card } from "../../../../components/Card"
import { useRef } from "react"

export const Carousel = () => {

  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <>
      <div className="control">
          <img onClick={handleLeftClick} src="assets/svgs/angle-left-solid-black.svg" alt="" />
      </div>

      <ContainerCarousel>
        <div ref={carousel} className="cards">
          <Card
            img='assets/img/products/product-outriders.webp'
            name='Outriders'            
            altImg='Imagem do produto Outriders'
            value='R$ 200,00'
          />
          <Card
            img='assets/img/products/product-cyberpunk2077.webp'
            name='CYBERPUNK 2077'
            altImg='Imagem do produto CYBERPUNK 2077'
            value='R$ 200,00'
          />
          <Card
            img='assets/img/products/product-donkey-kong-country-tropical-freeze.webp'
            name='Donkey Kong Country Tropical Freeze'            altImg='Imagem do produto Donkey Kong Country Tropical Freeze'
            value='R$ 200,00'
          />
        </div>

      </ContainerCarousel>
      
      <div className="control">
          <img onClick={handleRightClick} src="assets/svgs/angle-right-solid-black.svg" alt="" />
      </div>
    </>
  )
}