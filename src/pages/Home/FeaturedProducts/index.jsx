import { useContext } from "react"

import { SuccessIsVisibleContext } from '../../../contexts/SuccessIsVisibleContext.jsx'

import { Carousel } from "./Carousel"
import { Success } from "../Success/index"

import iconTitle from '../../../../public/assets/svgs/group6.svg'

import { ContainerFeaturesProducts, 
         ContainerFeaturesProductsCards } from "./style"

export const FeaturesProducts = () => {

  const { successIsVisible, setSuccessIsVisible } = useContext(SuccessIsVisibleContext)

  return (
    <>
      <Success
        successIsVisible={successIsVisible}
        setSuccessIsVisible={setSuccessIsVisible}
      />

      <ContainerFeaturesProducts>

        <div className="title">
          <img 
            className="icon-title" 
            src={iconTitle}
            alt="Ícone de título" 
          />
          <h3>Produtos em destaque</h3>
        </div>

        <ContainerFeaturesProductsCards>
          <Carousel/>
        </ContainerFeaturesProductsCards>

      </ContainerFeaturesProducts>
    </>
  )
}