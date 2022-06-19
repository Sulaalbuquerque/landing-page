import { useContext } from "react"

import { BagIsVisibleContext } from '../../../../../contexts/BagIsVisibleContext'
import { CounterBagContext } from '../../../../../contexts/CounterBagContext'

import imgArrowLeft from '../../../../../../public/assets/svgs/angle-left-solid.svg'

import { ContainerBag } from "./style"

export const Bag = () => {

  const { bagIsVisible } = useContext(BagIsVisibleContext)
  const { counterBag } = useContext(CounterBagContext)

  return (
    <>
      <ContainerBag isVisibleBag={bagIsVisible}>

        <div className="arrow"></div>

        <div className="main">
          <p>Você tem {counterBag} pedido(s):</p>
          <a href="#">
            <img src={imgArrowLeft}/>
            Adicionar mais
          </a>

          <div className="content">
            <div className="value">
              <p>Donkey Kong Country Tropical Freeze </p>
              <p>Valor: R$ 00,00 cada</p>
            </div>
            <div className="amount">
              <p>Quantidade: 0</p>
              <div className="change">
                <button className='add'>+</button>
                <button className='remove'>-</button>
              </div>
            </div>
          </div>

          <div className="total">
            <p>Valor total: R$ 00,00</p>
          </div>

          <button className="finish">Fializar compra</button>
        </div>

      </ContainerBag>
    </>
  )
}