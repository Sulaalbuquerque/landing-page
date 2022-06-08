import { ThemeProvider } from "styled-components"
import { light } from "./styles/themes/theme"
import { GlobalStyle } from "./styles/global"

// Contexts 
import { SearchIsVisibleContextProvider } from "./contexts/SearchIsVisibleContext"
import { CounterBagContextProvider } from "./contexts/CounterBagContext"
import { Banner1IsVisibleContextProvider } from './contexts/Banner1IsVisibleContext'

// Components
import { Home } from './pages/Home'

// Styles 
import { ContainerApp } from "./styles/app"
 

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle/>

        <SearchIsVisibleContextProvider>
          <CounterBagContextProvider>
            <Banner1IsVisibleContextProvider>

              <ContainerApp>
                <Home/>
              </ContainerApp>

            </Banner1IsVisibleContextProvider>
          </CounterBagContextProvider>
        </SearchIsVisibleContextProvider>
        
      </ThemeProvider>
    </>
  )
}

export default App
