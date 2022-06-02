import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    padding: 1.7rem 0;
    min-width: 375px;
    z-index: 2;

    @media (min-width: 771px) {
        background: none;
    } 

    ${({ navIsVisible }) => navIsVisible && css`
        background-color: ${({theme}) => theme.darkBlue};
    `}
` 

export const ContainerLogo = styled.div`

    .content-logo{
        display: flex;
    }

    .icon-hamburguer{
        margin: 0 1rem;
        cursor: pointer;
        height: 1.7rem;
        display: block;
    }

    .icon-close-hamburguer{
        position: relative;
        margin-right: 1rem;
        cursor: pointer;
        display: none;
    }

    .primary{
        position: absolute;
        top: .1rem;
        right: -.25rem;
    }

    .logo{
        height: 1.7rem;
    }

    ${({ navIsVisible }) => navIsVisible && css`
        .icon-close-hamburguer{
            display: block;
        }

        .icon-hamburguer{
            display: none;
        }

        @media (min-width: 771px) {
            .icon-close-hamburguer{
                display: none;
            }

            .icon-hamburguer{
                display: block;
            }
        }
    `}
` 

