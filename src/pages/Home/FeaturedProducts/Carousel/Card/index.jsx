import { ContainerCard } from "./style"
import { Success } from "../../../Success/index"

import imgGameCharacter from '../../../../../../assets/svgs/image_6-removebg-preview-1.svg'

import { useState, useContext } from "react";
import { CounterContext } from "../../../../Home"

export const Card = ({ img, altImg, name, value }) => {
  
  const {counterBag, setCounterBag} = useContext(CounterContext);

  const [clickedButton, setClickedButton] = useState(false)

  const [successIsVisible, setSuccessIsVisible] = useState(false)

  const changeStyleButton = () => {
    setClickedButton(true)
    setSuccessIsVisible(true)
    setCounterBag(counterBag + 1)
  }

  return (
    <>
      <Success
        successIsVisible={successIsVisible}
        setSuccessIsVisible={setSuccessIsVisible}
      />

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
            <span className="value">{value}</span>
          </div>    

          <button onClick={changeStyleButton}>
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