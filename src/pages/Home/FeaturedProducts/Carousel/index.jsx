import { useRef } from "react"

import { Card } from "./Card"

import iconArrowLeft from '../../../../../assets/svgs/angle-left-solid-black.svg'
import iconArrowRight from '../../../../../assets/svgs/angle-right-solid-black.svg'

import { ContainerCarousel } from "./style"

const games = [
  {
    img: '../../../../../assets/img/products/product-outriders.webp',
    name: 'Outriders', 
    altImg:'Imagem do produto Outriders',
    value: 'R$ 200,00'
  },
  {
    img: '../../../../../assets/img/products/product-cyberpunk2077.webp',
    name: 'CYBERPUNK 2077', 
    altImg:'Imagem do produto CYBERPUNK 2077',
    value: 'R$ 200,00'
  },
  {
    img: '../../../../../assets/img/products/product-donkey-kong-country-tropical-freeze.webp',
    name: 'Donkey Kong Country Tropical Freeze', 
    altImg:'Imagem do produto Donkey Kong Country Tropical Freeze',
    value: 'R$ 200,00'
  }
]

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
          <img 
            onClick={handleLeftClick} 
            src={iconArrowLeft} 
          />
      </div>

      <ContainerCarousel>
        <div 
          ref={carousel} 
          className="cards"
        >
          <Card
            img={games[0].img}
            name={games[0].name}           
            altImg={games[0].altImg}
            value={games[0].value}
          />
          <Card
            img={games[1].img}
            name={games[1].name}           
            altImg={games[1].altImg}
            value={games[1].value}
          />
          <Card
            img={games[2].img}
            name={games[2].name}           
            altImg={games[2].altImg}
            value={games[2].value}
          />
        </div>

      </ContainerCarousel>
      
      <div className="control">
          <img 
            onClick={handleRightClick} 
            src={iconArrowRight} 
          />
      </div>
    </>
  )
}