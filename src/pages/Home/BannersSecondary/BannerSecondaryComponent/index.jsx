import { ContainerBannerSecondaryComponent } from "./style"

export const BannerSecondaryComponent = ({ img, altImg, description }) => {
    
  return (
    <>
      <ContainerBannerSecondaryComponent>

        <a href="#">

          <div className="banner">
              <img src={img} alt={altImg} /* width='800rem' height='300rem' *//>
          </div>
         
          <div className="description-banner">
            <span>{description}</span>
            <hr />
        </div>

        </a>
        
      </ContainerBannerSecondaryComponent> 
    </>
  )
}