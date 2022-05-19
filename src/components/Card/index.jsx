import { useState } from "react"
import { ContainerCard } from "./style"

export const Card = ({ img, altImg, name, value }) => {
  
  const [clickedButton, setClickedButton] = useState(false)

  return (
    <>
      <ContainerCard isClickedButton={clickedButton}>
        <div className="image">
          <img src={img} alt={altImg} />
        </div>    

        <div className="description">
          <div className="details">
            <span className="name">{name}</span>
            <span className="value">{value}</span>
          </div>    

          <button
            onClick={() => setClickedButton(true)}
          >
            <div className="content">
              COMPRAR
            </div>
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