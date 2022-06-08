import { useContext } from "react"

// Contexts 
import { SearchIsVisibleContext } from '../../../../contexts/SearchIsVisibleContext'
import { CounterBagContext }  from '../../../../contexts/CounterBagContext'

//Components 
import { Search } from './Search'

//Imgs 
import iconContact from '../../../../../assets/svgs/paper-plane.svg'
import iconSearch from '../../../../../assets/svgs/search-solid.svg'
import iconBag from '../../../../../assets/svgs/shopping-bag-solid.svg'

//Styles 
import { ContainerMenu } from './style'


export const Menu = () => {

  const { counterBag } = useContext(CounterBagContext);
  const { setSearchIsVisible } = useContext(SearchIsVisibleContext);

  return (
    <>
      <ContainerMenu>
        
        <div className="list">
          <li>
            <a href="#">
              <img src={iconContact} alt="Ícone de contato" />
              <span>CONTATO</span>
            </a>
          </li>
          <li className='search'>
            <Search/>
            <a href="#"
              onClick={() => setSearchIsVisible(true)}
            >
              <img src={iconSearch} alt="Ícone de busca" />
              <span>BUSCAR</span>
            </a>
          </li>
          <li>
            <a className="bag" href="#">
              <img src={iconBag} alt="Ícone de compra" />
              <div className="item-counter">{counterBag}</div>
            </a>
          </li>
        </div>
      </ContainerMenu>
    </>
  )
}