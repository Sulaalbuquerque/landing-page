import { ContainerMenu } from './style'

import iconContact from '../../../../../assets/svgs/paper-plane.svg'
import iconSearch from '../../../../../assets/svgs/search-solid.svg'
import iconBag from '../../../../../assets/svgs/shopping-bag-solid.svg'

import { useContext } from "react";
import { CounterContext } from "../../../Home"

export const Menu = () => {

  const { counterBag } = useContext(CounterContext);

  return (
    <>
      <ContainerMenu>
        <div className="list">
          <li>
            <a href="#">
              <img src={iconContact} alt="Ícone de contato" />
              <span>CONTATO</span>
            </a>
          </li>

          <li>
            <a href="#">
              <img src={iconSearch} alt="Ícone de contato" />
              <span>BUSCAR</span>
            </a>
          </li>

          <li>
            <a className="bag" href="#">
              <img src={iconBag} alt="Ícone de contato" />
              <div className="item-counter">{counterBag}</div>
            </a>
          </li>
        </div>
      </ContainerMenu>
    </>
  )
}