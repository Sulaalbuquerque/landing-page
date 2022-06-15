import styled from 'styled-components'

export const ContainerBannersSecondary = styled.section`
    z-index: 1;
    position: relative;
    top: -10rem;

    @media (min-width: 771px) {
        display: flex;
        justify-content: center;
        position: relative;
        top: -17rem;
    }

    @media (min-width: 1150px) {
        top: -25rem;
    }

    @media (min-width: 1600px) {
        top: -29rem;
    }
` 