import { useContext } from "react"

import { SearchIsVisibleContext } from '../../../../contexts/SearchIsVisibleContext'
import { CounterBagContext }  from '../../../../contexts/CounterBagContext'
import { ContactIsVisibleContext } from '../../../../contexts/ContactIsVisibleContext'
import { BagIsVisibleContext } from "../../../../contexts/BagIsVisibleContext"

import { Search } from './Search'
import { Contact } from "./Contact"

import iconContact from '../../../../../assets/svgs/paper-plane.svg'
import iconSearch from '../../../../../assets/svgs/search-solid.svg'
import iconBag from '../../../../../assets/svgs/shopping-bag-solid.svg'

import { ContainerMenu } from './style'
import { Bag } from "./Bag"

export const Menu = () => {

  const { counterBag } = useContext(CounterBagContext);
  const { setSearchIsVisible } = useContext(SearchIsVisibleContext);
  const { setContactIsVisible } = useContext(ContactIsVisibleContext);
  const { setBagIsVisible } = useContext(BagIsVisibleContext);

  return (
    <>
      <ContainerMenu>
        
        <div className="list">

          <li className='contact'>
            <Contact/>
            <a href="#"
              onClick={() => setContactIsVisible(true)}
            >
              <img src={iconContact} alt="Ícone de contato" />
              <span>CONTATO</span>
            </a>
          </li>

          <li className='search'>
            <Search/>
            <a href="#"
              onClick={() => setSearchIsVisible(true)}
            >
              <img src={iconSearch} alt="Ícone de busca" />
              <span>BUSCAR</span>
            </a>
          </li>

          <li className="bag-li">
            <Bag/>
            <a 
              className="bag" 
              href="#" 
              onClick={() => setBagIsVisible(true)}
            >
              <img src={iconBag} alt="Ícone de compra" />
              <div className="item-counter">{counterBag}</div>
            </a>
          </li>

        </div>
      </ContainerMenu>
    </>
  )
}