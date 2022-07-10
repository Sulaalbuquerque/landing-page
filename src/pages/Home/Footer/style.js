import styled from 'styled-components'

export const ContainerFooter = styled.footer`
     display: flex;
     justify-content: space-between;
     margin-top: 5rem;
     width: 100%;

     .logo{
         display: flex;
         justify-content: flex-end;
         width: 10%;
         padding: 1rem 2rem;
         background-color: ${({theme}) => theme.darkBlue};
     }
 
     .description{
         display: flex;
         align-items: center;
         width: 90%;
         padding: 1rem 2rem;
         font-size: .9rem;
         font-weight: 400;
         background-color: ${({theme}) => theme.blue};
         color: ${({theme}) => theme.text};
     }

     @media (min-width: 771px) {
          .logo{
               width: 30%;
          }

          .description{
               width: 70%;
          }
     }  
` 