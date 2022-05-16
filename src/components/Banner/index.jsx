import { ContainerBanner } from "./style"

export const Banner = ({ img, altImg, description }) => {
    
  return (
    <>
      <ContainerBanner>
        <img src={img} alt={altImg} width='800rem' height='300rem'/>
        <div className="description-banner">
          <span>{description}</span>
          <hr />
        </div>
      </ContainerBanner> 
    </>
  )
}