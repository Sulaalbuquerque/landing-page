import { ContainerSearch } from './style'
import imgSearch from '../../../../../../assets/svgs/search-solid.svg'

export const Search = ({ searchIsVisible, setSearchIsVisible }) => {

  return (
    <>
      <ContainerSearch isVisibleSearch={searchIsVisible}>
        <div className="arrow"></div>
        <label htmlFor="search"></label>
        <input type="text" placeholder='Digite sua busca' />
        <button
          onClick={() => setSearchIsVisible(false)}
        >
          <img src={imgSearch} alt="" />
        </button>
      </ContainerSearch>
    </>
  )
}