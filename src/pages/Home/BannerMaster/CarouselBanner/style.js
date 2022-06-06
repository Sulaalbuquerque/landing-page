import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerCarouselBanner = styled.section`

    .item .banner-desktop{
        display: none;
    }

    .item2{
        display: none;
    }

    .banner{
        width: 100%;
        border-radius: 0 0 0 .6rem;
    }

    @media (min-width: 771px) {
        .banner{
            border-radius: 0%;
        }

        .item .banner-mobile{
            display: none;
        }

        .item .banner-desktop{
            display: block;
        }
    } 

    ${({ isVisibleBanner1 }) => !isVisibleBanner1 && css`
    
        .item1{
            display: none;
        }

        .item2{
            display: block;
        }
        
    `}
` 



