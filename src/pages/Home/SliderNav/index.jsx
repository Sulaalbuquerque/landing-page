import { ContainerSliderNav } from "./style"

export const SliderNav = () => {

  return (
    <>
      <ContainerSliderNav>
        
        <div className="title">
          <h3>MORTAL KOMBAT</h3>
          <hr className="divider" />
        </div>

        <div className="marker">
          <div className="title-marker">
            <p>1 / 2</p>
          </div>
          <div className="controllers">
            <a href="#">
              <img src="assets/svgs/angle-left-solid.svg" alt="" />
            </a>
            <a href="#">
              <img src="assets/svgs/angle-right-solid.svg" alt="" />
            </a>
          </div>
        </div>
        
      </ContainerSliderNav>
    </>
  )
}