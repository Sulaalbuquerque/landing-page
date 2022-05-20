import { ContainerHeader, ContainerLogo } from "./style"
import { Menu } from './Menu'
import { Nav } from "./Nav"

export const Header = ({ navIsVisible, setNavIsVisible }) => {

  return (
    <>
      <ContainerHeader>
        
        <ContainerLogo>
          <Nav
            navIsVisible={navIsVisible}
            setNavIsVisible={setNavIsVisible}
          />
          <div className="contentLogo">
            <img 
              onClick={() => setNavIsVisible(true)}
              className="icon-hamburguer" 
              src="assets/svgs/icon_hamburguer.svg" 
              alt="Ícone de menu"
            />
            <img src="assets/svgs/Logo_N1_Rush_fundo_escuro_bg_tranparente-1.svg" alt="Logomarca N1" />
          </div>
        </ContainerLogo>

        <Menu/>
        
      </ContainerHeader>
    </>
  )
}