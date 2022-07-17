import { useContext } from "react"

import { BagIsVisibleContext } from '../../../../../contexts/BagIsVisibleContext'
import { CounterBagContext } from '../../../../../contexts/CounterBagContext'

import imgArrowLeft from '../../../../../../public/assets/svgs/angle-left-solid.svg'

import { ContainerBag } from "./style"

import { ProductBag } from "./ProductBag.jsx"

import { games } from '../../../../../../public/datas/products.json'

export const Bag = () => {

  const { bagIsVisible, setBagIsVisible } = useContext(BagIsVisibleContext)
  const { counterGameCard1, setCounterGameCard1,
          counterGameCard2, setCounterGameCard2,
          counterGameCard3, setCounterGameCard3,
          totalRequests } = useContext(CounterBagContext)

  const addTotalAmount = () => {
    const amountCard1 = counterGameCard1 * games[0].price
    const amountCard2 = counterGameCard2 * games[1].price
    const amountCard3 = counterGameCard3 * games[2].price

    const totalAmount = amountCard1 + amountCard2 + amountCard3

    return totalAmount.toFixed(2)
  }

  /* const closeBag = () => {
    setBagIsVisible(false)
    showScroll()
  } */

  return (
    <>
      <ContainerBag 
        isVisibleBag={bagIsVisible}
      >

        <div className="arrow"></div>

        <div className={(totalRequests === 0) ? 'main' : 'main reset-padding'}>
          <p>Você tem {totalRequests} pedido(s)</p>
          <a 
            onClick={() => setBagIsVisible(false)}
            className={(totalRequests === 0) ? 'visible' : 'invisible'}
            href="#">
            <img src={imgArrowLeft}/>
            Adicionar pedidos
          </a>
          <a 
            onClick={() => setBagIsVisible(false)}
            className={(totalRequests === 0) ? 'invisible' : ''}
            href="#">
            <img src={imgArrowLeft}/>
            Adicionar mais pedidos
          </a>

          <div className={(counterGameCard1 === 0) ? 'invisible' : 'visible'}>
            <ProductBag
              img={games[0].image.img}
              name={games[0].name}
              price={(games[0].price).toFixed(2)}
              amount={counterGameCard1}
              setStateAdd={() => setCounterGameCard1(counterGameCard1 + 1)}
              setStateSubtract={() => setCounterGameCard1(
                counterGameCard1 > 0 ? counterGameCard1 - 1 : counterGameCard1
              )}
            />
          </div>

          <div className={(counterGameCard2 === 0) ? 'invisible' : 'visible'}>
            <ProductBag
              img={games[1].image.img}
              name={games[1].name}
              price={(games[1].price).toFixed(2)}
              amount={counterGameCard2}
              setStateAdd={() => setCounterGameCard2(counterGameCard2 + 1)}
              setStateSubtract={() => setCounterGameCard2(
                counterGameCard2 > 0 ? counterGameCard2 - 1 : counterGameCard2
              )}
            />
          </div>

          <div className={(counterGameCard3 === 0) ? 'invisible' : 'visible'}>
            <ProductBag
              img={games[2].image.img}
              name={games[2].name}
              price={(games[2].price).toFixed(2)}
              amount={counterGameCard3}
              setStateAdd={() => setCounterGameCard3(counterGameCard3 + 1)}
              setStateSubtract={() => setCounterGameCard3(
                counterGameCard3 > 0 ? counterGameCard3 - 1 : counterGameCard3
              )}
            />
          </div>

            
          <div className={(totalRequests === 0) ? 'invisible total' : 'visible total'}>
            <p>
              <strong className="detail">Valor total: </strong> 
              R$ {addTotalAmount()}
            </p>
          </div>

            
          <button 
            className={(totalRequests === 0) ? 'invisible finish' : 'visible finish'}
          >
            Fializar compra
          </button>
        </div>

      </ContainerBag>
    </>
  )
}