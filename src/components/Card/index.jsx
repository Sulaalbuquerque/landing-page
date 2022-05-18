import { ContainerCard } from "./style"

export const Card = ({ img, altImg, name, value/* , setSuccessIsVisible */ }) => {
    
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
            /* onClick={() => setSuccessIsVisible(true)} */
          >
            COMPRAR
          </button>
        </div>
      </ContainerCard>
    </>
  )
}