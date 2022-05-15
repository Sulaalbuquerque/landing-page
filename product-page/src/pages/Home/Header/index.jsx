import { ContainerHeader, ContainerLogo } from "./style"
import { Menu } from './Menu'

export const Header = () => {
    
      return (
        <>
          <ContainerHeader>
              <ContainerLogo>
                <img src="assets/svgs/icon_hamburguer.svg" alt="Ícone de menu" />
                <img src="assets/svgs/Logo_N1_Rush_fundo_escuro_bg_tranparente-1.svg" alt="Logomarca N1" />
              </ContainerLogo>

              <Menu/>
          </ContainerHeader>
        </>
      )
  }