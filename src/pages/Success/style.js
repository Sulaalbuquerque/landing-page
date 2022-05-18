import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerSuccess = styled.section`
    background-color: ${({ theme }) => theme.backgroundSuccess};
    position: absolute;
    display: flex; //flex
    //display: none;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    //overflow-y: hidden;
   /*  top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    pointer-events: none; */

    .popup{
        background-color: ${({ theme }) => theme.text};
        width: 20%;
        
    }

    .close{
        margin: .3rem;
        //width: 100%;
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
        //display: flex;
        text-align: center;
        font-weight: 300;
        font-size: 1.5rem;
    }

    /* ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
    `} */
` 