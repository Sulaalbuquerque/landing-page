import styled from 'styled-components'

export const ContainerMenu = styled.div`
    //background-color: palegoldenrod;
    padding: 2.75rem; //44px

    ul{
        display: flex;
        gap: 2rem;
    }
    
    li{
       list-style-type: none;
    }

    a{
        text-decoration: none;
        border-right: solid 2px ${({ theme }) => theme.text};
        padding-right: 2rem;
        color: ${({ theme }) => theme.text};

        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .bag{
        display: flex;
        border-right: none;
        gap: .2rem;
    }

    .item-counter{
        background-color: ${({ theme }) => theme.blue};
        padding: .2rem .4rem;
        border-radius: 50%;
    }
` 