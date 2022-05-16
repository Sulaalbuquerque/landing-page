import styled from 'styled-components'

export const ContainerBanner = styled.div`
    //background-color: green;

   .description-banner{
        background-color: ${({ theme }) => theme.blue};
        display: flex;
        padding: 1.3rem;
        border-radius: 0 0 .3rem .3rem;
        border-left: solid .6rem ${({ theme }) => theme.darkBlue};
    }

    img{
        object-fit: cover;
        width: auto;
    }
   
   span{
       font-weight: 700;
       font-size: 1rem;
        color: ${({ theme }) => theme.darkBlue};
   }

   hr{
       height: .06rem;
       width: 8rem;
       border: none;
       background-color: ${({ theme }) => theme.darkBlue};
   }
  
` 