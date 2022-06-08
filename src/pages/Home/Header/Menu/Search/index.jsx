import { useContext } from "react"

// Contexts 
import { SearchIsVisibleContext } from '../../../../../contexts/SearchIsVisibleContext'

//Imgs 
import imgSearch from '../../../../../../assets/svgs/search-solid.svg'

//Styles 
import { ContainerSearch } from './style'


export const Search = () => {

  const { searchIsVisible } = useContext(SearchIsVisibleContext);

  return (
    <>
      <ContainerSearch isVisibleSearch={searchIsVisible}>
        <div className="arrow"></div>
        <label htmlFor="search"></label>
        <input type="text" placeholder='Digite sua busca' />
        <button>
          <img src={imgSearch} />
        </button>
      </ContainerSearch>
    </>
  )
}