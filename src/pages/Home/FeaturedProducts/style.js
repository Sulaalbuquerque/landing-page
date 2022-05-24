import styled from 'styled-components'

export const ContainerFeaturesProducts = styled.section`
    margin-bottom: 4rem;

    .title{
        padding: 0 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 1rem;
    }

    .icon-title{
        width: 1.1rem;
        height: 1.1rem;
    }

    h3{
        font-size: 1.1rem;
        font-weight: 300;
        color:  ${({theme}) => theme.darkBlue};
    }

    @media (min-width: 771px) {
        margin-top: -9rem;

        .icon-title{
            width: 1.75rem;
            height: 1.75rem;
            margin-left: 2rem;
        }

        h3{
            font-size: 2.25rem;
        }
    } 
` 

export const ContainerFeaturesProductsCards = styled.div`
    width: 90vw;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    
    .control{
        padding: .6rem;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    @media (min-width: 1093px) {
        .control{
            display: none;
        }
    } 
` 