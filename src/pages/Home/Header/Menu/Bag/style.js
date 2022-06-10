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

    .content{
        border-radius: .3rem;

        padding: 1rem;
        border: .1rem solid ${({theme}) => theme.background};
    }

    .change button{
        font-size: 1.2rem;
        padding: .5rem 1.2rem;
        border: none;
        cursor: pointer;

        :hover{
            background-color: ${({theme}) => theme.blue};
        }
    }

    .add{
        border-radius: .3rem 0 0 .3rem;
    }

    .remove{
        border-radius: 0 .3rem .3rem 0;
    }

    a{
        font-size: 1.2rem;
        width: 10rem;

        :hover{
            color: ${({theme}) => theme.blue};
        }
    }

    a img{
        height: .8rem;
        margin-right: .7rem;
        
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
    
    @media (min-width: 771px) {
        padding: 3rem;
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
            border: none;
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