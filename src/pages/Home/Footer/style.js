import styled from 'styled-components'

export const ContainerFooter = styled.div`
background-color: green;
   display: flex;
    justify-content: space-between;

   .logo{
        display: flex;
        justify-content: flex-end;
        width: 30%;
        padding: 1rem 2rem;
        background-color: ${({theme}) => theme.darkBlue};
   }

   .description{
       display: flex;
       align-items: center;
        width: 70%;
        padding: 1rem 2rem;
        font-size: .9rem;
        font-weight: 400;
        background-color: ${({theme}) => theme.blue};
        color: ${({theme}) => theme.text};
   }
` 