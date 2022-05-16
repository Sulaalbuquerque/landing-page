import { ContainerFooter } from "./style"

export const Footer = () => {
    
      return (
        <>
          <ContainerFooter>
            <div className="logo">
              <img src="assets/svgs/logo_header-1.svg" alt="Logo da agência" />
            </div>
            <span className="description">Agência N1 - Todos os direitos reservados</span>
          </ContainerFooter>
        </>
      )
  }