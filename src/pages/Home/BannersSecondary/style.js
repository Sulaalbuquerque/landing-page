import styled from 'styled-components'

export const ContainerBannersSecondary = styled.section`
    z-index: 1;
    position: relative;
    top: -9rem;
    //gap: 2rem;

    @media (min-width: 771px) {
        display: flex;
        justify-content: center;
        position: relative;
        top: -15rem;
    }

    @media (min-width: 1150px) {
        top: -21rem;
    }
` 