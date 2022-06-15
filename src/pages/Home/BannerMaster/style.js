import styled from 'styled-components'
import { css } from 'styled-components'

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
    position: relative;
    bottom: 19.5rem;
    background-color: ${({ theme }) => theme.backgroundBannerMasterContent};

    .banner2{
        display: none;
    }

    @media (min-width: 771px) {
        top: -16rem;
        display: flex;
        background: none;
    }

    @media (min-width: 1151px) {
        top: -23rem;
    }

    @media (min-width: 1600px) {
        top: -32rem;
    }

    ${({ isVisibleBanner1 }) => !isVisibleBanner1 && css`

        .banner1{
            display: none;
        }

        .banner2{
            display: flex;
        }
    `}
` 

