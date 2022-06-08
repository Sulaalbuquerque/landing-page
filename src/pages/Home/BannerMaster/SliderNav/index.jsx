import { useState, useContext } from "react"

// Contexts 
import { Banner1IsVisibleContext } from "../../../../contexts/Banner1IsVisibleContext"

//Imgs 
import iconArrowLeft from '../../../../../assets/svgs/angle-left-solid.svg'
import iconArrowRight from '../../../../../assets/svgs/angle-right-solid.svg'

//Styles 
import { ContainerSliderNav } from "./style"


export const SliderNav = () => {

  const { banner1IsVisible, setBanner1IsVisible} = useContext(Banner1IsVisibleContext);

  const [titleSlider, setTitleSlider] = useState('MORTAL KOMBAT')
  const [counterSlider, setCounterSlider] = useState('1')

  const showBanner1 = () => {
    setBanner1IsVisible(true)
    setTitleSlider('MORTAL KOMBAT')
    setCounterSlider('1')
  }

  const showBanner2 = () => {
    setBanner1IsVisible(false)
    setTitleSlider('RED DEAD II')
    setCounterSlider('2')
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