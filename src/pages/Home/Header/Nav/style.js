import styled from 'styled-components'

export const ContainerNav = styled.div`
    background-color: ${({theme}) => theme.darkBlue};
    color: ${({theme}) => theme.text};
    display: flex;
    //gap: 1rem;
    //width: 60rem;
    position: absolute;
    z-index: 2;
    border: solid .13rem ${({theme}) => theme.blue};
    border-radius: .3rem;

    .list{
        width: 10rem;
       //background-color: #333;
       //border: solid 1px #fff;
       padding: 1rem;
       //gap: 1rem;
       //margin: 0 1.2rem;
       //width: 50%;
    }

    h4{
        //background-color: orange;
        font-size: 1rem;
        font-weight: 700;
        padding: 0 1rem;
    }

    ul{
        //align-content: flex-start;
        //list-style-type: none;
        //list-style: outside;
        //margin-block-end: 0;
        //margin-block-start: 0;
        //text-align: start;
        //background-color: pink;
        //display: flex;
        //flex-direction: column;
        //align-items: flex-start;
        //justify-content: flex-start;
    }

    li{
        //align-content: center;
        //list-style: outside;
        //width: 100%;
        display: flex;
        //text-align: start;
        //gap: 3rem;
        margin: .3rem 0;
        //background-color: green;
        list-style-type: none;
    }

    a{
        //margin: 0 1rem;
        padding: .6rem 1rem;
        //text-align: start;
        width: 100%;
        //background-color: blue;
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