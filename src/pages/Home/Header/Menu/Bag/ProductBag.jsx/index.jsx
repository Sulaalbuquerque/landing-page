import { ContainerProductBag } from './style'

export const ProductBag = ({ name,
                             price,
                             amount,
                             setStateAdd,
                             setStateSubtract }) => {

  return (
    <>
      <ContainerProductBag >

        <div className="value">
          <p className="name">{name}</p>
          <p>Valor: R$ {price} cada</p>
        </div>

        <div className="amount">
          <p>
            Quantidade: 
            <span>{amount}</span>
          </p>

          <div className="change">
            <button 
              className='add'
              onClick={setStateAdd}
            >+</button>

            <button 
              className='remove'
              onClick={setStateSubtract}
            >-</button>

          </div>

        </div>

      </ContainerProductBag>
    </>
  )
}