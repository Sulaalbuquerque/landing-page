import { SwiperSlide } from 'swiper/react'

import { Slider } from "../../../../components/Slider/Slider"
import { Card } from "./Card"

import imgGameOutriders from '../../../../../assets/img/products/product-outriders.webp'
import imgGameCyberpunk2077 from '../../../../../assets/img/products/product-cyberpunk2077.webp'
import imgGameDonkeyKongCountryTropicalFreeze from '../../../../../assets/img/products/product-donkey-kong-country-tropical-freeze.webp'

import { ContainerCarousel } from "./style"

import { games } from '../../../../datas/products.json'

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
              img={imgGameOutriders}
              name={games[0].name}       
              altImg={games[0].image.altImg}
              price={games[0].price}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={imgGameCyberpunk2077}
              name={games[1].name}       
              altImg={games[1].image.altImg}
              price={games[1].price}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={imgGameDonkeyKongCountryTropicalFreeze}
              name={games[2].name}       
              altImg={games[2].image.altImg}
              price={games[2].price}
            />
          </SwiperSlide>
        </Slider>
      </ContainerCarousel>
    </>
  )
}