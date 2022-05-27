import styled from 'styled-components'
import imgBannerMaster from '../../../../assets/img/principal_banner_desktop.webp'
import imgBannerMasterMobile from '../../../../assets/img/principal_banner_mobile.webp'

export const ContainerBannerMaster = styled.section`
    background-image: url(${imgBannerMaster});
    background-size: cover;
    background-repeat: no-repeat;
    height: 40rem;
    color: ${({ theme }) => theme.text};
    position: relative;

    @media (max-width: 770px) {
        background-image: url(${imgBannerMasterMobile});
    }
` 

export const ContainerBannerMasterContent = styled.div`` 

export const ContainerSliderNavContent = styled.div`

    @media (min-width: 771px) {
        position: absolute;
        right: -10.55rem;
        top: 40%;
    }
` 