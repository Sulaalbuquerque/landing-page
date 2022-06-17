import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'

import { ContainerSlider } from './style'

import 'swiper/css/navigation'

import 'swiper/css'

export const Slider = ({ settings, children }) => {
    return (
        <ContainerSlider>
            <Swiper  modules={[Navigation, A11y]} {...settings}>
                {children}
            </Swiper>
        </ContainerSlider>
    )
}