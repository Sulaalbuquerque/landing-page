import { ContainerMenu } from './style'

export const Menu = () => {
    
      return (
        <>
          <ContainerMenu>
          <ul>
            <li>
              <a href="#">
                <img src="assets/svgs/paper-plane.svg" alt="Ícone de contato" />
                CONTATO
              </a>
            </li>

            <li>
              <a href="#">
                <img src="assets/svgs/search-solid.svg" alt="Ícone de contato" />
                BUSCAR
              </a>
            </li>

            <li>
              <a className="bag" href="#">
                <img src="assets/svgs/shopping-bag-solid.svg" alt="Ícone de contato" />
                <div className="item-counter">2</div>
              </a>
            </li>
          </ul>
          </ContainerMenu>
        </>
      )
  }