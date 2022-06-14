import { useContext } from "react"

import { NavIsVisibleContext } from "../../../../contexts/NavIsVisibleContext"
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
  const { navIsVisible, setNavIsVisible } = useContext(NavIsVisibleContext)
  const { searchIsVisible, setSearchIsVisible } = useContext(SearchIsVisibleContext);
  const { contactIsVisible, setContactIsVisible } = useContext(ContactIsVisibleContext);
  const { bagIsVisible, setBagIsVisible } = useContext(BagIsVisibleContext);

  const openOrCloseContact = () => {
    if (!contactIsVisible){
      setNavIsVisible(false)
      setContactIsVisible(true) 
      setSearchIsVisible(false)
      setBagIsVisible(false)
    } else {
      setContactIsVisible(false)
    }
  }  

  const openOrCloseSearch = () => {
    if (!searchIsVisible){
      setNavIsVisible(false)
      setContactIsVisible(false) 
      setSearchIsVisible(true)
      setBagIsVisible(false)
    } else {
      setSearchIsVisible(false)
    }
  }  

  const openOrCloseBag = () => {
    if (!bagIsVisible){
      setNavIsVisible(false)
      setContactIsVisible(false) 
      setSearchIsVisible(false)
      setBagIsVisible(true)
    } else {
      setBagIsVisible(false)
    }
  }  

  return (
    <>
      <ContainerMenu>
        
        <div className="list">

          <li className='contact'>
            <Contact/>
            <a href="#"
              onClick={openOrCloseContact}
            >
              <img src={iconContact} alt="Ícone de contato" />
              <span>CONTATO</span>
            </a>
          </li>

          <li className='search'>
            <Search/>
            <a href="#"
              onClick={openOrCloseSearch}
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
              onClick={openOrCloseBag}
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