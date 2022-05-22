import styled from 'styled-components'

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100vw;
    padding: 1.7rem 0;
    min-width: 375px;
    z-index: 2;
` 

export const ContainerLogo = styled.div`
    
    .icon-hamburguer{
        margin: 0 1rem;
        cursor: pointer;
        height: 1.7rem;
    }

    .contentLogo{
        display: flex;
    }

    .logo{
        height: 1.7rem;
    }
` 

