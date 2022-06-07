import { ContainerMenu } from './style'

import iconContact from '../../../../../assets/svgs/paper-plane.svg'
import iconSearch from '../../../../../assets/svgs/search-solid.svg'
import iconBag from '../../../../../assets/svgs/shopping-bag-solid.svg'

import { useContext } from "react";
import { CounterContext } from "../../../Home"
import { Search } from './Search';
import { useState } from 'react';

export const Menu = () => {

  const { counterBag } = useContext(CounterContext);

  const [searchIsVisible, setSearchIsVisible] = useState(false)

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
          <li className='search'>
            <Search  
              searchIsVisible={searchIsVisible} 
              setSearchIsVsible={setSearchIsVisible}
            />
            <a href="#"
              onClick={() => setSearchIsVisible(true)}
            >
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