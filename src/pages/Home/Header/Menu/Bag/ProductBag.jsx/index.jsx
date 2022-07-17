import { useContext } from "react"

import { CounterBagContext } from "../../../../../../contexts/CounterBagContext"

import { ContainerProductBag } from './style'

export const ProductBag = ({ id,
                             img,
                             name,
                             price,
                             amount,
                             setStateAdd,
                             setStateSubtract }) => {

  const { counterGameCard1, setCounterGameCard1,
          counterGameCard2, setCounterGameCard2,
          counterGameCard3, setCounterGameCard3,
          totalRequests } = useContext(CounterBagContext)

  return (
    <>
      <ContainerProductBag>

        <div className="value">
          <div className="game">
            <img src={img}/>
            <p className="name">{name}</p>
          </div>
          <p>
            Valor: 
            <span className="price"> R$ {price} cada</span>
          </p>
        </div>

        <div className="amount">
          <p>
            Quantidade: 
            <span className="detail-amount">{amount}</span>
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