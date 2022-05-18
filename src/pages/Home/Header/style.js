import styled from 'styled-components'

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100vw;
` 

export const ContainerLogo = styled.div`
    padding: 2.75rem; //44px
    //background-color: green;
    
    .icon-hamburguer{
        margin-right: 2rem;
        cursor: pointer;

        :hover{
            color: ${({ theme }) => theme.blue};
        }
    }
` 

