import styled from 'styled-components'

export const ContainerSliderNav = styled.div`
    display: flex;
    color: ${({ theme }) => theme.text};
    min-width: 375px;

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

    @media (max-width: 770px) {
        .divider{
            display: none;
        }
    }

    @media (min-width: 771px) {
        display: flex;
        transform: rotate(90deg);
        width: 24rem;
        
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
` 

