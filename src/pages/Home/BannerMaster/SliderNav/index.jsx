//import { useRef, useState } from "react"
import { ContainerSliderNav } from "./style"

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
                src="assets/svgs/angle-left-solid.svg" 
              />
              <img 
                className="controller controller-right" 
                src="assets/svgs/angle-right-solid.svg" 
              />
          </div>
        </div>
        
      </ContainerSliderNav>
    </>
  )
}