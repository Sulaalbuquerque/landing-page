import { ThemeProvider } from "styled-components"
import { light } from "./styles/themes/theme"
import { GlobalStyle } from "./styles/global"

import { ContainerApp } from "./styles/app"
import { Home } from './pages/Home'

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle/>

        <ContainerApp>
          <Home/>
        </ContainerApp>
        
      </ThemeProvider>
    </>
  )
}

export default App
