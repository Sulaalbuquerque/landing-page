import { useContext } from "react"

import { SearchIsVisibleContext } from "../../../contexts/SearchIsVisibleContext"
import { NavIsVisibleContext } from "../../../contexts/NavIsVisibleContext"
import { ContactIsVisibleContext } from '../../../contexts/ContactIsVisibleContext'
import { BagIsVisibleContext } from "../../../contexts/BagIsVisibleContext"

import { Menu } from './Menu'
import { Nav } from "./Nav"

import iconHamburguerClose from '../../../../public/assets/svgs/icon_hamburguer-close.svg'
import iconHamburguerClose2 from '../../../../public/assets/svgs/icon_hamburguer-close-2.svg'
import iconHamburguer from '../../../../public/assets/svgs/icon_hamburguer.svg'
import logo from '../../../../public/assets/svgs/Logo_N1_Rush_fundo_escuro_bg_tranparente-1.svg'

import { ContainerHeader, ContainerLogo } from "./style"

export const hideScroll = (state) => {
  if (window.innerWidth <= 770) document.body.style.overflow = !state ? 'hidden' : 'auto'
}

export const showScroll = () => document.body.style.overflow = 'auto'

export const Header = () => {
  
  const { navIsVisible, setNavIsVisible } = useContext(NavIsVisibleContext)
  const { contactIsVisible, setContactIsVisible } = useContext(ContactIsVisibleContext)
  const { searchIsVisible, setSearchIsVisible } = useContext(SearchIsVisibleContext)
  const { bagIsVisible, setBagIsVisible } = useContext(BagIsVisibleContext)

  const openOrCloseNav = () => {
    if (!navIsVisible){
      setNavIsVisible(true) 
      setContactIsVisible(false)
      setSearchIsVisible(false)
      setBagIsVisible(false)
      //hideScroll(navIsVisible)
    } else {
      setNavIsVisible(false)
    }
  }
  
  const closeNavMobile = () => {
    !navIsVisible ? setNavIsVisible(true) : setNavIsVisible(false)
    showScroll()
  }

  return (
    <>
      <ContainerHeader 
        navIsVisible={navIsVisible}
        contactIsVisible={contactIsVisible}
        bagIsVisible={bagIsVisible}
      >
        
        <ContainerLogo>
          <Nav
            navIsVisible={navIsVisible}
            setNavIsVisible={setNavIsVisible}
          />
          <div className="content-logo">

            <div 
              className="icon-close-hamburguer"
              onClick={closeNavMobile}
            >
              <img className="primary" src={iconHamburguerClose2}/>
              <img className="secondary" src={iconHamburguerClose}/>
            </div>

            <img 
              onClick={openOrCloseNav}
              className="icon-hamburguer" 
              src={iconHamburguer} 
              alt="Ícone de menu"
            />

            <img className="logo" src={logo} alt="Logomarca N1" />
          </div>
        </ContainerLogo>

        <Menu/>
        
      </ContainerHeader>
    </>
  )
}