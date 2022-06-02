import styled from 'styled-components'

export const ContainerBannerSecondaryComponent = styled.div`
    margin: 1rem;

    a{
        text-decoration: none;
    }

    img{
        width: 100%;
    }

   .description-banner{
        background-color: ${({ theme }) => theme.blue};
        display: flex;
        align-items: center;
        height: 1.9rem;
        border-radius: 0 0 .3rem .3rem;
        border-left: solid .6rem ${({ theme }) => theme.darkBlue};
        position: relative;
        top: -.5rem;
        padding-left: .6rem;
    }
   
    span{
       font-weight: 700;
       font-size: .75rem;
        color: ${({ theme }) => theme.darkBlue};
    }

    hr{
       height: .06rem;
       width: 4rem;
       border: none;
       background-color: ${({ theme }) => theme.darkBlue};
    }
  
    @media (min-width: 771px) {
        width: 40%;

        a{
            text-decoration: none;
        }        
    }
` 