import { createGlobalStyle } from 'styled-components' ;   
 
export const GlobalStyle = createGlobalStyle`
  body{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;

      /* a cada 1rem será considera 10px */
      //font-size: 62.5%;
  }
` 
/* @media (min-width: 550px) {}
@media (max-width: 770px) {}
@media (max-width: 990px) {}
@media (max-width: 1200px) {}
@media (max-width: 1400px) {}
@media (max-width: 1600px) {} */

/* 1rem = 16px.
0,0625rem = 1px. */