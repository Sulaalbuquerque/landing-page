import { ContainerCarouselBanner} from "./style"

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import imgBanner1Desktop from '../../../../../assets/img/principal_banner_desktop.webp'
import imgBanner1Mobile from '../../../../../assets/img/principal_banner_mobile.webp'
import imgBanner2Desktop from '../../../../../assets/img/principal_banner_desktop_02.webp'
import imgBanner2Mobile from '../../../../../assets/img/principal_banner_mobile_02.webp'
import { useState } from "react";

export const CarouselBanner = () => {


  const options = {
    /* responsiveClass: true, */
    /* loop: true, */
    dotsClass: false,
    /* nav: true, */
    smartSpeed: 300,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    },
  };

  return (
    <>
      <ContainerCarouselBanner>

        <OwlCarousel 
          {...options}
          className='owl-theme' 
          items='2' 
          center
          mouseDrag
          touchDrag
        >
          <div className='item item1'>
            <img className="banner banner-mobile" src={imgBanner1Mobile} alt="" />
            <img className="banner banner-desktop" src={imgBanner1Desktop} alt="" />
          </div>
          <div class='item item2'>
            <img className="banner banner-mobile" src={imgBanner2Mobile} alt="" />
            <img className="banner banner-desktop" src={imgBanner2Desktop} alt="" />
          </div>
      </OwlCarousel>

      </ContainerCarouselBanner>
    </>
  )
}