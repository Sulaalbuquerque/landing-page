import { useState } from "react"
import { ContainerCard } from "./style"
import { Success } from "../../pages/Home/Success"

export const Card = ({ img, altImg, name, value }) => {
  
  const [clickedButton, setClickedButton] = useState(false)

  const [successIsVisible, setSuccessIsVisible] = useState(false)

  const changeStyleButton = () => {
    setClickedButton(true)
    setSuccessIsVisible(true)
  }

  return (
    <>
      <Success
        successIsVisible={successIsVisible}
        setSuccessIsVisible={setSuccessIsVisible}
      />

      <ContainerCard isClickedButton={clickedButton}>
        <div className="container-image">
          <img className="image-card" src={img} alt={altImg} />
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
                <img src="assets/svgs/image_6-removebg-preview-1.svg" alt="" />
              </div>
            </div>
          </button>
        </div>
      </ContainerCard>
    </>
  )
}