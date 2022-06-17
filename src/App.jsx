import { ThemeProvider } from "styled-components"
import { light } from "./styles/themes/theme"
import { GlobalStyle } from "./styles/global"

import { SearchIsVisibleContextProvider } from "./contexts/SearchIsVisibleContext"
import { CounterBagContextProvider } from "./contexts/CounterBagContext"
import { Banner1IsVisibleContextProvider } from './contexts/Banner1IsVisibleContext'
import { NavIsVisibleContextProvider } from "./contexts/NavIsVisibleContext"
import { ContactIsVisibleContextProvider } from "./contexts/ContactIsVisibleContext"
import { BagIsVisibleContextProvider } from "./contexts/BagIsVisibleContext"
import { SuccessIsVisibleContextProvider } from "./contexts/SuccessIsVisibleContext"

import { Home } from './pages/Home'

import { ContainerApp } from "./styles/app"

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle/>

        <SuccessIsVisibleContextProvider>
          <NavIsVisibleContextProvider>
            <ContactIsVisibleContextProvider>
              <SearchIsVisibleContextProvider>
                <BagIsVisibleContextProvider>
                  <CounterBagContextProvider>
                    <Banner1IsVisibleContextProvider>

                      <ContainerApp>
                        <Home/>
                      </ContainerApp>

                    </Banner1IsVisibleContextProvider>
                  </CounterBagContextProvider>
                </BagIsVisibleContextProvider>
              </SearchIsVisibleContextProvider>
            </ContactIsVisibleContextProvider>
          </NavIsVisibleContextProvider>
        </SuccessIsVisibleContextProvider>

      </ThemeProvider>
    </>
  )
}

export default App
