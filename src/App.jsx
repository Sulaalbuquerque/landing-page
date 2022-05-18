import { ThemeProvider } from "styled-components"
import { light } from "./styles/themes/theme"
import { GlobalStyle } from "./styles/global"

import { ContainerApp } from "./styles/app"
import { Home } from './pages/Home'
import { Success } from "./pages/Success"

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle/>

        <ContainerApp>
          <Success/>
          <Home/>
        </ContainerApp>
        
      </ThemeProvider>
    </>
  )
}

export default App
