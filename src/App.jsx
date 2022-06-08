import { ThemeProvider } from "styled-components"
import { light } from "./styles/themes/theme"
import { GlobalStyle } from "./styles/global"

import { ContainerApp } from "./styles/app"
import { Home } from './pages/Home'

import { SearchIsVisibleContext } from "./contexts/SearchIsVisibleContext"

import { useState } from "react"

function App() {

  const [searchIsVisible, setSearchIsVisible] = useState(false)

  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle/>

        <SearchIsVisibleContext.Provider value={{searchIsVisible, setSearchIsVisible}}>
          <ContainerApp>
            <Home/>
          </ContainerApp>
        </SearchIsVisibleContext.Provider>
        
      </ThemeProvider>
    </>
  )
}

export default App
