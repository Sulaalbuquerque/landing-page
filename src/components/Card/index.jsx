import { useRef } from "react"
import { ContainerCard } from "./style"

export const Card = ({ img, altImg, name, value/* , setSuccessIsVisible */ }) => {
  
  /* const content = useRef(null)
  const success = useRef(null)

  const buyProduct = () => {
    console.log(success.current)
    content.current.style.display = 'none'
    success.current.style.display = 'flex'
  } */

  return (
    <>
      <ContainerCard>
        <div className="image">
          <img src={img} alt={altImg} />
        </div>    

        <div className="description">
          <div className="details">
            <span className="name">{name}</span>
            <span className="value">{value}</span>
          </div>    

          <button
           /*  onClick={buyProduct} */
            /* onClick={() => setSuccessIsVisible(true)} */
          >
            <div className="content"/*  useRef={content} */>
              COMPRAR
            </div>
            <div className="success"/*  useRef={success} */>
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