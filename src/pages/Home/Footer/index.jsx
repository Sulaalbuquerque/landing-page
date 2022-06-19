import logoFooter from '../../../../public/assets/svgs/logo_header-1.svg'

import { ContainerFooter } from "./style"

export const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <div className="logo">
          <img src={logoFooter} alt="Logo da agência" />
        </div>
        <span className="description">Agência N1 - Todos os direitos reservados</span>
      </ContainerFooter>
    </>
  )
}