import styled from 'styled-components'

export const ContainerFeaturesProducts = styled.section`
   padding: 3rem 12rem;

   .title{
       display: flex;
       gap: 2rem;
   }

   h3{
       font-size: 2.25rem;
       font-weight: 300;
       color:  ${({theme}) => theme.darkBlue};
   }
` 

export const ContainerFeaturesProductsCards = styled.div`
    //background-color: orange;
    display: flex;
    gap: 1rem;
` 