import styled from 'styled-components'

export const ContainerBannersSecondary = styled.section`
    margin: 2rem 0;
    z-index: 1;
    
    @media (min-width: 771px) {
        display: flex;
        justify-content: center;
        position: relative;
        top: -7.5rem;
        gap: 1rem;
    }
    
    @media (min-width: 771px) and (max-width: 900px) {
        top: -5rem;
    }
` 