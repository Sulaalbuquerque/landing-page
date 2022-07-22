import { useContext,useState, useEffect } from "react"

import { SearchIsVisibleContext } from '../../../../../contexts/SearchIsVisibleContext'

import imgSearch from '../../../../../../public/assets/svgs/search-solid.svg'

import { ContainerSearch } from './style'
 
export const Search = ({ data }) => {

  const { searchIsVisible } = useContext(SearchIsVisibleContext)


  const [inputSearch, setInputSearch] = useState('')
  const [filterSearch, setFilterSearch] = useState([])

  const handleFilter = (event) => {
    setInputSearch(event.target.value)

    const newFilter = data.games.filter(value => {
      if(inputSearch.length >= 1) {
        return value.name.toLocaleLowerCase()
          .includes(inputSearch.toLocaleLowerCase())
      } 
    })

    setFilterSearch(newFilter)
  }

  const selectItem = (value) => {
    setInputSearch(value.name)
    setFilterSearch([])
  }

  useEffect(() => {
    if(inputSearch === ''){
      setFilterSearch([])
    }
  }, [inputSearch])

  return (
    <>
      <ContainerSearch isVisibleSearch={searchIsVisible}>
        <div className="arrow"></div>

        <div className="content">

          <div className="main">
            <label htmlFor="search"></label>
            <input 
              ref={input => input && input.focus()}
              type="text" 
              placeholder='Digite sua busca' 
              value={inputSearch}
              onChange={handleFilter}
            />
            <button>
              <img src={imgSearch} />
            </button>
          </div>

          {filterSearch !== 0 &&
            <div className="data-result">
              {filterSearch.map(value => (
                <div 
                  onClick={() => selectItem(value)}
                  key={value.id} 
                  className="data-item"
                >
                  <p>{value.name}</p>
                </div> 
              ))}
            </div>
          }

        </div>

      </ContainerSearch>
    </>
  )
}