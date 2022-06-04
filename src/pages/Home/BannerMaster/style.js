import styled from 'styled-components'

export const ContainerBannerMaster = styled.section`
    color: ${({ theme }) => theme.text};
    position: relative;
    border-radius: 0 0 0 .6rem;

    @media (min-width: 771px) {
        border-radius: 0;
    }
` 

export const ContainerBannerMasterContent = styled.div`
    border-radius: 0 0 0 .6rem;
    position: absolute;
    bottom: 5rem;
    z-index: 1;
    background-color: ${({ theme }) => theme.backgroundBannerMasterContent};

    @media (min-width: 771px) {
        bottom: auto;
        top: 30%;
        display: flex;
        background: none;
    }
` 

