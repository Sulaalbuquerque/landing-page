import { useContext } from "react"

import { NavIsVisibleContext } from "../../../../contexts/NavIsVisibleContext"
import { SearchIsVisibleContext } from '../../../../contexts/SearchIsVisibleContext'
import { CounterBagContext }  from '../../../../contexts/CounterBagContext'
import { ContactIsVisibleContext } from '../../../../contexts/ContactIsVisibleContext'
import { BagIsVisibleContext } from "../../../../contexts/BagIsVisibleContext"

import { Search } from './Search'
import { Contact } from "./Contact"
import { Bag } from "./Bag"

import iconContact from '../../../../../public/assets/svgs/paper-plane.svg'
import iconSearch from '../../../../../public/assets/svgs/search-solid.svg'
import iconBag from '../../../../../public/assets/svgs/shopping-bag-solid.svg'

import { ContainerMenu } from './style'

import { hideScroll } from ".."
import { showScroll } from ".."

export const Menu = () => {

  const { totalRequests } = useContext(CounterBagContext)

  const { navIsVisible, setNavIsVisible } = useContext(NavIsVisibleContext)
  const { searchIsVisible, setSearchIsVisible } = useContext(SearchIsVisibleContext)
  const { contactIsVisible, setContactIsVisible } = useContext(ContactIsVisibleContext)
  const { bagIsVisible, setBagIsVisible } = useContext(BagIsVisibleContext)

  const openOrCloseContact = () => {
    if (!contactIsVisible){
      setNavIsVisible(false)
      setContactIsVisible(true) 
      setSearchIsVisible(false)
      setBagIsVisible(false)
      //hideScroll(contactIsVisible)
    } else {
      setContactIsVisible(false)
      //showScroll()
    }
  }  

  const openOrCloseSearch = () => {
    if (!searchIsVisible){
      setNavIsVisible(false)
      setContactIsVisible(false) 
      setSearchIsVisible(true)
      setBagIsVisible(false)
      //showScroll()
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
      //hideScroll(bagIsVisible)
    } else {
      setBagIsVisible(false)
      //showScroll()
    }
  }  

  return (
    <>
      <ContainerMenu>
        
        <div className="list">

          <li className='contact'>
            <Contact/>
            <a 
              href="#"
              className="icon"
              onClick={openOrCloseContact}
            >
              <img src={iconContact} alt="Ícone de contato" />
              <span className="title">CONTATO</span>
            </a>
          </li>

          <li className='search'>
            <Search/>
            <a 
              href="#"
              className="icon"
              onClick={openOrCloseSearch}
            >
              <img src={iconSearch} alt="Ícone de busca" />
              <span className="title">BUSCAR</span>
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
              <div className="item-counter">{totalRequests}</div>
            </a>
          </li>

        </div>
      </ContainerMenu>
    </>
  )
}