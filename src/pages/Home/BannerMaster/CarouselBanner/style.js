import styled from 'styled-components'

export const ContainerCarouselBanner = styled.section`
    //background-color: green;

    .owl-theme{
        //width: 100vw;
    }

    .banner{
        max-width: 100vw;
        //height: 100%;
    }
    
    .item .banner-desktop{
        display: none;
    }

    @media (min-width: 550px) and (max-width: 770px) {
        //display: none;
    }

    @media (min-width: 771px) {
        .item .banner-mobile{
            display: none;
        }

        .item .banner-desktop{
            display: block;
        }
    }
` 



