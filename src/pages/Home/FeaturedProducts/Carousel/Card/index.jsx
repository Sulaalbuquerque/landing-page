import { useState, useContext } from "react"

import { CounterBagContext }  from '../../../../../contexts/CounterBagContext'
import { SuccessIsVisibleContext } from "../../../../../contexts/SuccessIsVisibleContext"

import imgGameCharacter from '../../../../../../public/assets/svgs/image_6-removebg-preview-1.svg'

import { ContainerCard } from "./style"

export const Card = ({ key,
                       img, 
                       altImg, 
                       name, 
                       price }) => {
  
  const { setSuccessIsVisible } = useContext(SuccessIsVisibleContext)
  const { counterGameCard1, setCounterGameCard1,
          counterGameCard2, setCounterGameCard2,
          counterGameCard3, setCounterGameCard3,
          totalRequests } = useContext(CounterBagContext)
  
  const [clickedButton, setClickedButton] = useState(false)

  const hideScrollSuccess = () => {
    document.body.style.overflow = 'hidden'
  }

  const changeStyleButton = () => {
    setClickedButton(true)
    setSuccessIsVisible(true)
    hideScrollSuccess()
  }

  const toClickButton = () => {
    changeStyleButton()
  }

  return (
    <>
      <ContainerCard isClickedButton={clickedButton}>
        <div className="container-image">
          <img 
            className="image-card"
            src={img} 
            alt={altImg} 
          />
        </div>    

        <div className="description">
          <div className="details">
            <span className="name">{name}</span>
            <span className="value">R$ {price.toFixed(2)}</span>
          </div>    

          <button onClick={toClickButton}>
            <div className="content">COMPRAR</div>
            <div className="success">
              <div className="text">COMPRADO!</div>
              <div className="img">
                <img src={imgGameCharacter} />
              </div>
            </div>
          </button>
        </div>
      </ContainerCard>
    </>
  )
}