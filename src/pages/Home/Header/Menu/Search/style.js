import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerSearch = styled.div`
    background-color: ${({theme}) => theme.darkBlue};
    position: absolute;
    padding: .5rem 1rem .5rem 0;
    top: 4rem;
    right: -4rem; 
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
        right: 4.4rem;
        height: 1.12rem;
        width: 1.12rem;
        background-color: ${({theme}) => theme.blue};
    }

    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .main{
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .data-result{
        border-radius: .3rem;
        color: ${({theme}) => theme.text};
        margin-left: 1rem;
        max-height: 200px;
        overflow: hidden;
        overflow-y: auto;
        width: 100%;
    }

    .data-result::-webkit-scrollbar{
        display: none;
    }

    .data-item{
        padding: .1rem 1rem;
        cursor: pointer;
        border-radius: .3rem;
        color: ${({theme}) => theme.text};
    }

    .data-item:hover{
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
            right: 8rem;
        }
    }

    ${({ isVisibleSearch }) => isVisibleSearch && css`
        display: flex;
    `}
` 