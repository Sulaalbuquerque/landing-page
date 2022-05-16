import styled from 'styled-components'

export const ContainerCard = styled.div`
    background-color: ${({ theme }) => theme.text};
    width: 22rem;
    //height: 32rem;
    box-shadow: 0px 4px 20px 7px #00000012;


    .image{
        //background-color: green;
        height: 28rem;
        display: flex;
        align-items: center;
        border-bottom: solid .20rem  ${({ theme }) => theme.blue};
    }

    .description{
        padding: 1.6rem;
        background-color: ${({ theme }) => theme.silver};
    }

    .details{
        display: flex;
        flex-direction: column;
    }

    .name{
        font-size: .9rem;
        font-weight: 400;
        color: ${({ theme }) => theme.darkBlue};
    }

    .value{
        margin: 1rem 0;
        font-weight: 900;
        color: ${({ theme }) => theme.darkBlue};
    }

    button{
        display: block;
        margin-left: auto;
        margin-right: auto;
        background-color: ${({ theme }) => theme.blue};
        border: none;
        padding: 1rem 5rem;
        border-radius: .3rem;
        font-size: 1.1rem;
        font-weight: 900;
        color: ${({ theme }) => theme.text};
        margin-top: 1rem;
        cursor: pointer;

        :hover{
            background-color: ${({ theme }) => theme.darkBlue};
        }
    }
` 