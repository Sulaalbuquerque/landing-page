import { ContainerCard } from "./style"

export const Card = ({ img, altImg, name, value }) => {
    
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

          <button>COMPRAR</button>
        </div>
      </ContainerCard>
    </>
  )
}