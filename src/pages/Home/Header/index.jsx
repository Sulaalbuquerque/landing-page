import { useContext } from "react"

import { SearchIsVisibleContext } from "../../../contexts/SearchIsVisibleContext"
import { NavIsVisibleContext } from "../../../contexts/NavIsVisibleContext"
import { ContactIsVisibleContext } from '../../../contexts/ContactIsVisibleContext'
import { BagIsVisibleContext } from "../../../contexts/BagIsVisibleContext"

import { Menu } from './Menu'
import { Nav } from "./Nav"

import iconHamburguerClose from '../../../../assets/svgs/icon_hamburguer-close.svg'
import iconHamburguerClose2 from '../../../../assets/svgs/icon_hamburguer-close-2.svg'
import iconHamburguer from '../../../../assets/svgs/icon_hamburguer.svg'
import logo from '../../../../assets/svgs/Logo_N1_Rush_fundo_escuro_bg_tranparente-1.svg'

import { ContainerHeader, ContainerLogo } from "./style"

export const Header = () => {
  
  const { searchIsVisible, setSearchIsVisible } = useContext(SearchIsVisibleContext)
  const { navIsVisible, setNavIsVisible } = useContext(NavIsVisibleContext)
  const { contactIsVisible, setContactIsVisible } = useContext(ContactIsVisibleContext);
  const { bagIsVisible, setBagIsVisible } = useContext(BagIsVisibleContext);
 
  const openOrCloseNav = () => {
    if (!navIsVisible){
      setNavIsVisible(true) 
      setContactIsVisible(false)
      setSearchIsVisible(false)
      setBagIsVisible(false)
    } else {
      setNavIsVisible(false)
    }
  }
  
  const closeNavMobile = () => !navIsVisible 
                               ? setNavIsVisible(true) 
                               : setNavIsVisible(false)

  return (
    <>
      <ContainerHeader 
        navIsVisible={navIsVisible}
        contactIsVisible={contactIsVisible}
        bagIsVisible={bagIsVisible}
      >
        
        <ContainerLogo 
          navIsVisible={navIsVisible}
          contactIsVisible={contactIsVisible}
          bagIsVisible={bagIsVisible}
        >
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