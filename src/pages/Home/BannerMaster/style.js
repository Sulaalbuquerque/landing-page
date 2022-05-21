import styled from 'styled-components'

export const ContainerBannerMaster = styled.section`
    //background-color: ${({theme}) => theme.silver };
    background-image: url('assets/img/principal_banner_desktop.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 45rem; // 52.5rem
    width: 100vw;
    margin-bottom: 18rem;

    color: ${({ theme }) => theme.text};
` 

export const ContainerBannerMasterContent = styled.div`
    //background-color: ${({theme}) => theme.silver };
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    position: absolute;
    margin-top: 1rem;
    transform: translate(45rem, 10rem);

    h1{
        //background-color: pink;
        font-size: 2.9rem;
        margin: 0;
    }

    h2{
        margin: 0;
        //background-color: green;
        padding-right: 2.5rem;
        margin: .2rem 0 2rem 0;
        position: relative;
        font-size: 4.3rem;
        color: ${({ theme }) => theme.blue};
    }

    .cents{
        position: absolute;
        top: .6rem;
        //background-color: orange;
        font-size: 1.75rem;
    }

    h1, 
    h2{
        font-weight: 900;
    }

    p{
        margin: 0;
        //background-color: blue;
        max-width: 30rem;
        text-align: end;
        line-height: 1.55rem;
        font-weight: 400;
        font-size: 1rem;
    }
` 

export const ContainerSliderNavContent = styled.div`
    //background-color: ${({theme}) => theme.silver };
    
` 