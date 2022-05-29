import { ContainerHeader, ContainerLogo } from "./style"
import { Menu } from './Menu'
import { Nav } from "./Nav"
import { useEffect } from "react"

import iconHamburguerClose from '../../../../assets/svgs/icon_hamburguer-close.svg'
import iconHamburguerClose2 from '../../../../assets/svgs/icon_hamburguer-close-2.svg'
import iconHamburguer from '../../../../assets/svgs/icon_hamburguer.svg'
import logo from '../../../../assets/svgs/Logo_N1_Rush_fundo_escuro_bg_tranparente-1.svg'

export const Header = ({ navIsVisible, setNavIsVisible }) => {
  
  return (
    <>
      <ContainerHeader navIsVisible={navIsVisible}>
        
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