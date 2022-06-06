import { ContainerCarouselBanner} from "./style"

import React from 'react';

import imgBanner1Desktop from '../../../../../assets/img/principal_banner_desktop.webp'
import imgBanner1Mobile from '../../../../../assets/img/principal_banner_mobile.webp'
import imgBanner2Desktop from '../../../../../assets/img/principal_banner_desktop_02.webp'
import imgBanner2Mobile from '../../../../../assets/img/principal_banner_mobile_02.webp'

import { useContext } from "react";
import { Banner1IsVisibleContext } from "..";

export const CarouselBanner = () => {

  const { banner1IsVisible } = useContext(Banner1IsVisibleContext);  

  return (
    <>
      <ContainerCarouselBanner isVisibleBanner1={banner1IsVisible}>
        <div className='item item1'>
          <img className="banner banner-mobile" src={imgBanner1Mobile} alt="" />
          <img className="banner banner-desktop" src={imgBanner1Desktop} alt="" />
        </div>
        <div className='item item2'>
          <img className="banner banner-mobile" src={imgBanner2Mobile} alt="" />
          <img className="banner banner-desktop" src={imgBanner2Desktop} alt="" />
        </div>
      </ContainerCarouselBanner>
    </>
  )
}