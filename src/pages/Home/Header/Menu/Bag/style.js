import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerBag = styled.div`
    position: absolute;
    background-color: ${({theme}) => theme.darkBlue};
    top: 5rem;
    left: 0;
    right: 0;
    height: 100vh;
    padding: 2rem;
    display: none;
    color: ${({theme}) => theme.text};

    .arrow{
        display: none;
    }

    .main{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

   /*  .main a{
        //display: flex;
        
    } */

    .main a:hover{
        color: ${({theme}) => theme.blue};
    }

    a img{
        margin-right: 1rem;  
    }

    .finish{
        border-radius: .3rem;
        border: none;
        padding: .7rem;
        width: 100%;
        background-color: ${({theme}) => theme.background};
        cursor: pointer;
        font-size: 1rem;

        :hover{
            background-color: ${({theme}) => theme.blue};
            color: ${({theme}) => theme.text};
        }
    }

    .invisible{
        display: none;
    }

    /* .visible{
        //display: flex;
        //display: block;
    } */

    @media (max-width: 470px) {

        .amount{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .change{
            margin-left: 1.5rem;
        }
    }
    
    @media (min-width: 771px) {
        //padding: 3rem;
        top: 4rem;
        left: -25rem;
        right: auto;
        bottom: auto;
        width: 23rem;
        height: auto;
        border: solid .13rem ${({theme}) => theme.blue};
        border-radius: .3rem;
        box-shadow: .6rem .6rem ${({theme}) => theme.blue};
        font-size: .9rem;

        .reset-padding{
            padding: 1rem;
        }

        .arrow{
            display: block;
            transform: rotate(45deg);
            z-index: -1;
            position: absolute;
            top: -.6rem;
            left: 25.5rem;
            height: 1.12rem;
            width: 1.12rem;
            background-color: ${({theme}) => theme.blue};
        }

        .main{
            gap: 1.5rem;
        }

        .content{
            display: flex;
            gap: 1rem;
        }

        a{
            font-size: 1rem;
            width: 9rem;
        }

        .change button{
            font-size: 1rem;
            padding: .5rem 1rem;
        }
    }

    ${({ isVisibleBag }) => isVisibleBag && css`
        display: block;
    `}
` 