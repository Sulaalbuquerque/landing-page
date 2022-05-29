import { createGlobalStyle } from 'styled-components' ;   

export const GlobalStyle = createGlobalStyle`
  html,
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
` 

/* @media (max-width: 480px) {}
@media (min-width: 481px) and (max-width: 770px) {}
@media (min-width: 771px) {} */


/* 1rem = 16px.
0,0625rem = 1px. */