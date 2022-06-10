import { useContext } from "react"

// Contexts 
import { SearchIsVisibleContext } from "../../../contexts/SearchIsVisibleContext"
import { NavIsVisibleContext } from "../../../contexts/NavIsVisibleContext"
import { ContactIsVisibleContext } from '../../../contexts/ContactIsVisibleContext'

//Components 
import { Menu } from './Menu'
import { Nav } from "./Nav"

//Imgs 
import iconHamburguerClose from '../../../../assets/svgs/icon_hamburguer-close.svg'
import iconHamburguerClose2 from '../../../../assets/svgs/icon_hamburguer-close-2.svg'
import iconHamburguer from '../../../../assets/svgs/icon_hamburguer.svg'
import logo from '../../../../assets/svgs/Logo_N1_Rush_fundo_escuro_bg_tranparente-1.svg'

//Styles 
import { ContainerHeader, ContainerLogo } from "./style"


export const Header = () => {
  
  const { searchIsVisible, setSearchIsVisible } = useContext(SearchIsVisibleContext)
  const { navIsVisible, setNavIsVisible } = useContext(NavIsVisibleContext)
  const { contactIsVisible, setContactIsVisible } = useContext(ContactIsVisibleContext);
 
  const closeSearch = () => {
    if (searchIsVisible === true){
      setSearchIsVisible(false)
    }
  }

  const closeNavDesktop = () => {
    if(navIsVisible === true){
      setNavIsVisible(false)  
    }
  }  

  const closeContact = () => {
    if(contactIsVisible === true){
      setContactIsVisible(false)  
    }
  }  

  const close = () => {
    closeSearch()
    closeNavDesktop()
    closeContact()
  }

  return (
    <>
      <ContainerHeader 
        navIsVisible={navIsVisible}
        contactIsVisible={contactIsVisible}
        onClick={close}
      >
        
        <ContainerLogo navIsVisible={navIsVisible}>
          <Nav
            navIsVisible={navIsVisible}
            setNavIsVisible={setNavIsVisible}
          />
          <div className="content-logo">
            <div className="icon-close-hamburguer">
              <img className="primary" src={iconHamburguerClose2}/>
              <img className="secondary" src={iconHamburguerClose}/>
            </div>
            <img 
              onClick={() => setNavIsVisible(true)}
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