import styled from 'styled-components'

export const ContainerFeaturesProducts = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container{
        max-width: 90%;
    }    

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
        font-size: 1.5rem;
        font-weight: 300;
        color:  ${({theme}) => theme.darkBlue};
    }

    @media (min-width: 771px) {
        margin-top: -5rem;

        .icon-title{
            width: 1.75rem;
            height: 1.75rem;
            margin-left: 2rem;
        }

        h3{
            font-size: 2.25rem;
        }
    } 

    @media (min-width: 1000px) {
        margin-top: -7rem;
    }
` 

export const ContainerFeaturesProductsCards = styled.div`
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    
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

    @media (min-width: 1340px) {
        width: 70rem;
    }
` 