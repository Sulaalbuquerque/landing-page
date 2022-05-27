//import { useRef, useState } from "react"
import { ContainerSliderNav } from "./style"

import iconArrowLeft from '../../../../../assets/svgs/angle-left-solid.svg'
import iconArrowRight from '../../../../../assets/svgs/angle-right-solid.svg'

export const SliderNav = () => {

  return (
    <>
      <ContainerSliderNav>
        
        <div className="title">
          <h3 className="mortal-kombat">MORTAL KOMBAT</h3>
          <hr className="divider" />
        </div>

        <div className="marker">
          <div className="title-marker">
            <p className="mortal-kombat">1 / 2</p>
          </div>
          <div className="controllers">
              <img 
                className="controller controller-left" 
                src={iconArrowLeft} 
              />
              <img 
                className="controller controller-right" 
                src={iconArrowRight}
              />
          </div>
        </div>
        
      </ContainerSliderNav>
    </>
  )
}