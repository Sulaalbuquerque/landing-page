import { useState, useContext } from "react"

import { Banner1IsVisibleContext } from "../../../../contexts/Banner1IsVisibleContext"

import iconArrowLeft from '../../../../../assets/svgs/angle-left-solid.svg'
import iconArrowRight from '../../../../../assets/svgs/angle-right-solid.svg'

import { ContainerSliderNav } from "./style"

import { gamesBanners } from "../CarouselBanner"

export const SliderNav = () => {

  const { banner1IsVisible, setBanner1IsVisible} = useContext(Banner1IsVisibleContext);

  const [titleSlider, setTitleSlider] = useState(gamesBanners[0].title)
  const [counterSlider, setCounterSlider] = useState(gamesBanners[0].slide)

  const showBanner1 = () => {
    setBanner1IsVisible(true)
    setTitleSlider(gamesBanners[0].title)
    setCounterSlider(gamesBanners[0].slide)
  }

  const showBanner2 = () => {
    setBanner1IsVisible(false)
    setTitleSlider(gamesBanners[1].title)
    setCounterSlider(gamesBanners[1].slide)
  }

  return (
    <>
      <ContainerSliderNav isVisibleBanner1={banner1IsVisible}>
        
        <div className="title">
          <h3 className="mortal-kombat">{titleSlider}</h3>
          <hr className="divider" />
        </div>

        <div className="marker">
          <div className="title-marker">
            <p className="mortal-kombat counter">{counterSlider} / 2</p>
          </div>
          <div className="controllers">
              <img 
                onClick={showBanner1}
                className="controller controller-left" 
                src={iconArrowLeft} 
              />
              <img 
                onClick={showBanner2}
                className="controller controller-right" 
                src={iconArrowRight}
              />
          </div>
        </div>
        
      </ContainerSliderNav>
    </>
  )
}