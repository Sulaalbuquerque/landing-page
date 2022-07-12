import { useContext } from "react"

import { CounterBagContext } from "../../../../../../contexts/CounterBagContext"

import { ContainerProductBag } from './style'

export const ProductBag = ({ id,
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
      <ContainerProductBag 
        
      >

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