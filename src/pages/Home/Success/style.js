import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerSuccess = styled.section`
    background-color: ${({ theme }) => theme.backgroundSuccess};
    position: fixed; 
    display: none;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .popup{
        background-color: ${({ theme }) => theme.text};
        position: relative;
        padding: .8rem .8rem 0 .8rem;
    }

    .close{
        cursor: pointer;
        margin: .3rem;
        display: flex;
        justify-content: flex-end;
    }

    .popup-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .text{
        color: ${({ theme }) => theme.darkBlue};
        text-align: center;
        font-weight: 300;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
    }

    hr{
        transform: rotate(90deg);
        position: absolute;
        height: 1rem;
    }

    .left{
        left: .5rem;
    }

    .right{
        right: .5rem;
    }

    ${({ isVisibleSuccess }) => isVisibleSuccess && css`
        display: flex;
    `}
` 