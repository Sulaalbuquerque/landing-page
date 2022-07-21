import { useContext, useRef } from "react"

import { SearchIsVisibleContext } from '../../../../../contexts/SearchIsVisibleContext'

import imgSearch from '../../../../../../public/assets/svgs/search-solid.svg'

import { ContainerSearch } from './style'

import games from './../../../../../../public/datas/products.json'

export const Search = () => {

  const { searchIsVisible } = useContext(SearchIsVisibleContext)

  const ulRef = useRef()

  const autoComplete = (game) => {

    const games = ['Outriders', 'CYBERPUNK 2077', 'Donkey Kong Country Tropical Freeze'];

    return games.filter((value) => {
      const valueLowerCase = value.toLowerCase()
      const gameLowerCase = game.toLowerCase()
    
      return valueLowerCase.includes(gameLowerCase)
    })
  }

  return (
    <>
      <ContainerSearch isVisibleSearch={searchIsVisible}>
        <div className="arrow"></div>
        <div className="content">
          <div className="main">
            <label htmlFor="search"></label>
            <input 
              type="text" 
              placeholder='Digite sua busca' 
              onInput={(e) => {
                const valueInput = e.target.value
                if(valueInput.length) {
                  const autoCompleteValues = autoComplete(valueInput)

                  console.log(autoCompleteValues)
                  console.log(ulRef)

                  ulRef.innerHTML = `
                    ${autoCompleteValues.map((value) => {
                      return (
                        `<li>${value}</li>`
                        )
                      }).join('')
                    }
                  `
                }
              }}
            />
            <button>
              <img src={imgSearch} />
            </button>
          </div>
          <ul ref={ulRef}></ul>
        </div>
      </ContainerSearch>
    </>
  )
}