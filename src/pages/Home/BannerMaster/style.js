import styled from 'styled-components'
import imgBannerMaster from '../../../../assets/img/principal_banner_desktop.webp'
import imgBannerMasterMobile from '../../../../assets/img/principal_banner_mobile.webp'

export const ContainerBannerMaster = styled.section`
    background-image: url(${imgBannerMasterMobile});
    background-size: cover;
    background-repeat: no-repeat;
    height: 40rem;
    color: ${({ theme }) => theme.text};
    position: relative;
    border-radius: 0 0 0 .6rem;

    @media (min-width: 771px) {
        background-image: url(${imgBannerMaster});
        border-radius: 0;
    }
` 

export const ContainerBannerMasterContent = styled.div`
    border-radius: 0 0 0 .6rem;
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => theme.backgroundBannerMasterContent};

    @media (min-width: 771px) {
        bottom: auto;
        top: 30%;
        display: flex;
        background: none;
    }
` 

