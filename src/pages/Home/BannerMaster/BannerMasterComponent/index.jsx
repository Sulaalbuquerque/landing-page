import { ContainerBannerMasterComponent } from "./style"

import { useState, createContext, useContext } from "react";
import { Banner1IsVisibleContext } from "..";

export const BannerMasterComponent = ({ title, value, penny, description, className }) => {
  
  //const { banner1IsVisible, setBanner1IsVisible } = useContext(Banner1IsVisibleContext);  

  return (
    <>
      <ContainerBannerMasterComponent
        className={className}
      >
        <h1>{title}</h1>
        <h2>
          R$ {value}
          <span className="penny">,{penny}</span>
        </h2>
        <p>{description}</p>
      </ContainerBannerMasterComponent> 
    </>
  )
}