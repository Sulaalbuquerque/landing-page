import styled from 'styled-components'

export const ContainerBannerMasterComponent = styled.div`
    background-color: ${({ theme }) => theme.backgroundBannerMasterContent};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    padding: 1rem 2rem;

    h1{
        font-size: 2.9rem;
        margin: 0;
    }

    h2{
        margin: 0;
        padding-right: 2.5rem;
        position: relative;
        font-size: 4.3rem;
        color: ${({ theme }) => theme.blue};
    }

    .penny{
        position: absolute;
        top: .6rem;
        font-size: 1.75rem;
    }

    h1, 
    h2{
        font-weight: 900;
    }

    p{
        margin: 0;
        text-align: end;
        line-height: 1.55rem;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 770px) {

        h1{
            font-size: 1.6rem;
        }

        h2{
            font-size: 3rem;
            margin-top: .6rem;
        }

        .cents{
            font-size: 1.75rem;
            top: .4rem;
        }
    }

    @media (min-width: 771px) {
        background: none;
        bottom: 20%;
        top: 25%;
        right: 15%;

        h2{
            margin-bottom: 1.3rem;
        }

        p{
            max-width: 50%;
        }
    }
` 