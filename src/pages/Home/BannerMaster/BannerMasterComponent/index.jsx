import { ContainerBannerMasterComponent } from "./style"

export const BannerMasterComponent = ({ title, 
                                        price, 
                                        penny, 
                                        description, 
                                        className }) => {
  return (
    <>
      <ContainerBannerMasterComponent
        className={className}
      >
        <h1>{title}</h1>
        <h2>
          R$ {price}
          <span className="penny">,{penny}</span>
        </h2>
        <p>{description}</p>
      </ContainerBannerMasterComponent> 
    </>
  )
}