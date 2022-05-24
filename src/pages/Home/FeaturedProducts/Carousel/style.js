import styled from 'styled-components'

export const ContainerCarousel = styled.div`
    overflow-x: auto;
    scroll-behavior: smooth;

    .cards{
        display: flex;
        gap: 3rem;
        margin: .5rem;
        overflow-x: auto;
        scroll-behavior: smooth;

        ::-webkit-scrollbar{
            display: none;
        }
    }
` 




