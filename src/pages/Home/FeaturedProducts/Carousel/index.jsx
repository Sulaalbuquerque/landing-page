import { SwiperSlide } from 'swiper/react'

import { Slider } from "../../../../components/Slider/Slider"
import { Card } from "./Card"

import { ContainerCarousel } from "./style"

import { games } from '../../../../../public/datas/products.json'

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
          {
            games.map((game) => {
              return (
                <SwiperSlide key={game.id}>
                  <Card
                    id={game.id}
                    name={game.name} 
                    img={game.image.img}      
                    altImg={game.image.altImg}
                    price={game.price}
                  />
                </SwiperSlide>
              )
            })
          }
        </Slider>
      </ContainerCarousel>
    </>
  )
}