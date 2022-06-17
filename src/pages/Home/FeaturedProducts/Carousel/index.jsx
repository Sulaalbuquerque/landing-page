import { SwiperSlide } from 'swiper/react'

import { Slider } from "../../../../components/Slider/Slider"
import { Card } from "./Card"

import imgGameOutriders from '../../../../../assets/img/products/product-outriders.webp'
import imgGameCyberpunk2077 from '../../../../../assets/img/products/product-cyberpunk2077.webp'
import imgGameDonkeyKongCountryTropicalFreeze from '../../../../../assets/img/products/product-donkey-kong-country-tropical-freeze.webp'

import { ContainerCarousel } from "./style"

const games = [
  {
    img: imgGameOutriders,
    name: 'Outriders', 
    altImg:'Imagem do produto Outriders',
    value: 'R$ 200,00'
  },
  {
    img: imgGameCyberpunk2077,
    name: 'CYBERPUNK 2077', 
    altImg:'Imagem do produto CYBERPUNK 2077',
    value: 'R$ 200,00'
  },
  {
    img: imgGameDonkeyKongCountryTropicalFreeze,
    name: 'Donkey Kong Country Tropical Freeze', 
    altImg:'Imagem do produto Donkey Kong Country Tropical Freeze',
    value: 'R$ 200,00'
  }
]

export const Carousel = () => {

  const settings = {
    navigation: true,
    breakpoints: {
      770: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
  }

  return (
    <>
      <ContainerCarousel>
        <Slider settings={settings}>
          <SwiperSlide>
            <Card
              img={games[0].img}
              name={games[0].name}           
              altImg={games[0].altImg}
              value={games[0].value}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={games[1].img}
              name={games[1].name}           
              altImg={games[1].altImg}
              value={games[1].value}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={games[2].img}
              name={games[2].name}           
              altImg={games[2].altImg}
              value={games[2].value}
            />
          </SwiperSlide>
        </Slider>
      </ContainerCarousel>
    </>
  )
}