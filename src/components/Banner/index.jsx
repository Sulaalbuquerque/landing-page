import { ContainerBanner } from "./style"

export const Banner = ({ img, altImg, description }) => {
    
  return (
    <>
      <ContainerBanner>

        <a href="#">
          <div className="banner">
              <img src={img} alt={altImg} /* width='800rem' height='300rem' *//>
          </div>

          <div className="description-banner">
            <span>{description}</span>
            <hr />
          </div>
        </a>
        
      </ContainerBanner> 
    </>
  )
}