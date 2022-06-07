import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerSearch = styled.div`
    background-color: ${({theme}) => theme.darkBlue};
    position: absolute;
    padding: .5rem 1rem .5rem 0;
    top: 4rem;
    right: -1rem; 
    display: none;
    gap: 1rem;
    border-radius: .3rem;
    box-shadow: .3rem .3rem ${({theme}) => theme.blue};
    border: solid .13rem ${({theme}) => theme.blue};

    .arrow{
        transform: rotate(45deg);
        z-index: -1;
        position: absolute;
        top: -.6rem;
        right: 1.5rem;
        height: 1.12rem;
        width: 1.12rem;
        background-color: ${({theme}) => theme.blue};
    }

    input{
        padding: 1rem;
        font-size: 1rem;
        border-radius: .3rem;
        border: none;
        background-color: ${({theme}) => theme.darkBlue};
        color: ${({theme}) => theme.text};
        
    }

    button{
        background-color: ${({theme}) => theme.darkBlue};
        border: none;
        border-radius: .3rem;
        cursor: pointer;

        :hover{
            background-color: ${({theme}) => theme.blue};

        }
    }

    @media (min-width: 771px) {
        width: 25rem;

        input{
            width: 19rem;
        }

        .arrow{
            right: 5rem;
        }
        
    }

    ${({ isVisibleSearch }) => isVisibleSearch && css`
        display: flex;
    `}
` 