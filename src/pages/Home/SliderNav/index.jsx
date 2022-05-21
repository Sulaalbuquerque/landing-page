import { ContainerSliderNav } from "./style"

export const SliderNav = () => {

  return (
    <>
      <ContainerSliderNav>
        
        <div className="title">
          <h3>MORTAL KOMBAT</h3>
          <hr />
        </div>

        <div className="marker">
          <div className="title-marker">
            <p>1 / 2</p>
          </div>
          <div className="controllers">
            <img src="assets/svgs/angle-left-solid.svg" alt="" />
            <img src="assets/svgs/angle-right-solid.svg" alt="" />
          </div>

        </div>
      </ContainerSliderNav>
    </>
  )
}