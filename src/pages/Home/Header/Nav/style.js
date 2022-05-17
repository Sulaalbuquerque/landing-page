import styled from 'styled-components'

export const ContainerNav = styled.div`
    color: ${({theme}) => theme.text};
    display: flex;
    position: absolute;
    top: 6.3rem;
    //left: .1rem;
    //right: 3rem;
    z-index: 1;
    border: solid .13rem ${({theme}) => theme.blue};
    border-radius: .3rem;
    box-shadow: .6rem .6rem ${({theme}) => theme.blue};

    .lists{
        z-index: 1;
        display: flex;
        background-color: ${({theme}) => theme.darkBlue};
    }

    .arrow{
        transform: rotate(45deg);
        z-index: 0;
        position: absolute;
        top: -.6rem;
        left: 1.5rem;
        height: 1.12rem;
        width: 1.12rem;
        background-color: ${({theme}) => theme.blue};
    }

    .list{
        width: 10rem;
       padding: 1rem;
    }

    h4{
        //background-color: orange;
        font-size: 1rem;
        font-weight: 700;
        padding: 0 1rem;
    }

    li{
        display: flex;
        margin: .3rem 0;
        //background-color: green;
        list-style-type: none;
    }

    a{
        padding: .6rem 1rem;
        width: 100%;
        color: ${({theme}) => theme.text};
        text-decoration: none;
        font-weight: 400;
        font-size: .85rem; 
        border-radius: .3rem;

        :hover{
            background-color: ${({theme}) => theme.blue};
        }
    }
` 