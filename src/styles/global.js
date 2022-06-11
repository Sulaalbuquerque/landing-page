import { createGlobalStyle } from 'styled-components' ;   

export const GlobalStyle = createGlobalStyle`
  html,
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    ::-webkit-scrollbar {
      width: 6px;
      background-color: ${({ theme }) => theme.silver};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.darkBlue};
    }
  }
` 
