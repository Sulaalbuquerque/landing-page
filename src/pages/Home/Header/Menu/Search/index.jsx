import { useContext } from "react"

import { SearchIsVisibleContext } from '../../../../../contexts/SearchIsVisibleContext'

import imgSearch from '../../../../../../assets/svgs/search-solid.svg'

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