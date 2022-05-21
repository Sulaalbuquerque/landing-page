import styled from 'styled-components'

export const ContainerSliderNav = styled.div`
    position: absolute;
    top: 20rem;
    right: -13rem;
    width: 30rem;
    display: flex;
    justify-content: space-between;
    transform: rotate(90deg);
    z-index: 1;

    .title{
        background-color: ${({ theme }) => theme.blue};
        width: 25rem;
        display: flex;
        padding: 1.5rem;
    }

    hr{
        transform: rotate(90deg);
    }

    .marker{
        background-color: ${({ theme }) => theme.darkBlue};
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title-marker{
        transform: rotate(270deg);
        width: 2.5rem;
    }

    .controllers{
        transform: rotate(270deg);
        display: flex;
        gap: 1rem;
    }
` 

