import styled from 'styled-components'

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100vw;
    padding: 1.7rem 0;
    min-width: 375px;
    //background-color: green;

    @media (min-width: 771px) {
        //background-color: orange;
        //margin: 0 1rem;
    }
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

