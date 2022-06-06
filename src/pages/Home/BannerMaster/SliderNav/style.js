import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerSliderNav = styled.div`
    display: flex;
    color: ${({ theme }) => theme.text};
    position: absolute;
    width: 100%;
    bottom: -4.9rem;

    .title{
        background-color: ${({ theme }) => theme.blue};
        display: flex;
        align-items: center;
        padding: .5rem 1.5rem;
        width: 65%;
        border-radius: 0 0 0 .6rem;
    }

    .marker{
        background-color: ${({ theme }) => theme.darkBlue};
        padding: .5rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        width: 35%;
    }

    .title-marker{
        font-size: .71rem;
    }

    .controllers{
        display: flex;
        gap: 1.5rem;
    }

    .controller{
        cursor: pointer;
    }

    @media (max-width: 1000px) {
        .title .divider{
            display: none;
        }
    }

    @media (min-width: 771px) {
        transform: rotate(90deg);
        width: 24rem;
        height: 3rem;
        right: -10.5rem;
        top: 5rem;
        
        .title{
            background-color: ${({ theme }) => theme.blue};
            display: flex;
            align-items: center;
            padding: 0 1.5rem;
            width: 70%;
            border-radius: 0;
        }

        h3{
            font-size: .9rem;
            font-weight: 400;
        }

        .divider{
            display: inline-block;
            width: 3rem;
            margin-right: .5rem;
        }

        .marker{
            background-color: ${({ theme }) => theme.darkBlue};
            padding: .1rem 1rem;
            display: flex;
            width: 30%;
            gap: 0;
            border-radius: 0 0 1rem 0;
        }

        .title-marker{
            transform: rotate(270deg);
        }

        .controllers{
            transform: rotate(270deg);
            gap: 1rem;
        }
    }

    @media (min-width: 771px) and (max-width: 1000px) {
        width: 17.5rem;
        right: -7.25rem;
        top: 4rem;
    }

    ${({ isVisibleBanner1 }) => isVisibleBanner1 && css`
        .controller-left{
            opacity: .4;
            cursor: default;
        }
    `}

    ${({ isVisibleBanner1 }) => !isVisibleBanner1 && css`
        .controller-right{
            opacity: .4;
            cursor: default;
        }
    `}
` 

