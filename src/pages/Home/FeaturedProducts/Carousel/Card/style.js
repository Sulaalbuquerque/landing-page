import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerCard = styled.div`
    background-color: ${({ theme }) => theme.text};
    box-shadow: 0px 4px 20px 7px #00000012;
    border-radius: .6rem;

    .container-image{
        height: 25rem;
        display: flex;
        align-items: center;
        border-bottom: solid .20rem  ${({ theme }) => theme.blue};
    }

    .image-card{
        width: 100%;
    }

    .description{
        border-radius: 0 0 .6rem .6rem;
        height: 9rem;
        padding: 1.6rem 1.6rem 3rem 1.6rem;
        background-color: ${({ theme }) => theme.silver};
    }

    .details{
        display: flex;
        flex-direction: column;
    }

    .name{
        min-height: 2.5rem;
        font-size: .9rem;
        font-weight: 400;
        color: ${({ theme }) => theme.darkBlue};
    }

    .value{
        margin: 1rem 0;
        font-weight: 900;
        color: ${({ theme }) => theme.darkBlue};
    }

    button{
        display: block;
        margin: 1rem auto;
        background-color: ${({ theme }) => theme.blue};
        border: none;
        padding: 1rem;
        border-radius: .3rem;
        font-size: .9rem;
        font-weight: 900;
        color: ${({ theme }) => theme.text};
        cursor: pointer;
        position: relative;
        width: 13rem;

        :hover{
            background-color: ${({ theme }) => theme.darkBlue};
        }
    }

    .content{
        display: block;
    }

    .success{
        display: none;
    }

   @media (min-width: 771px) {
       button{
           width: 15rem;
       }
   }

    ${({ isClickedButton }) => isClickedButton && css`
        button{
            background-color: ${({ theme }) => theme.darkBlue};
        }

        .content{
            display: none;
        }

        .success{
            display: flex;
        } 

        .text{
            display: flex;
            align-items: center;
        }

        .img{
            position: absolute;
            bottom: -.2rem;
            right: 1rem;
        }
    `}

    ${({ gameCard1Counter }) => ( gameCard1Counter[0] === 1 
                                  && gameCard1Counter[1] === 0
                                ) && css`
        button{
            background-color: ${({ theme }) => theme.blue};
        }
    
        .content{
            display: block;
        }
    
        .success{
            display: none;
        } 
    `}

    ${({ gameCard2Counter }) => ( gameCard2Counter[0] === 2 
                                  && gameCard2Counter[1] === 0
                                ) && css`
        button{
            background-color: ${({ theme }) => theme.blue};
        }
    
        .content{
            display: block;
        }
    
        .success{
            display: none;
        } 
    `}

    ${({ gameCard3Counter }) => ( gameCard3Counter[0] === 3 
                                  && gameCard3Counter[1] === 0
                                ) && css`
        button{
            background-color: ${({ theme }) => theme.blue};
        }
    
        .content{
            display: block;
        }
    
        .success{
            display: none;
        } 
    `}
` 