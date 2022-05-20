import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerCard = styled.div`
    background-color: ${({ theme }) => theme.text};
    width: 22rem;
    box-shadow: 0px 4px 20px 7px #00000012;

    .image{
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
        padding: 1rem;
        border-radius: .3rem;
        font-size: 1.1rem;
        font-weight: 900;
        color: ${({ theme }) => theme.text};
        margin-top: 1rem;
        cursor: pointer;
        position: relative;
        width: 16rem;

        :hover{
            background-color: ${({ theme }) => theme.darkBlue};
        }
    }

    .content{
        display: block;
    }

    .success{
        display: none;
    }

    ${({ isClickedButton }) => isClickedButton && css`
        button{
            background-color: ${({ theme }) => theme.darkBlue};
        }

        .content{
            display: none;
        }

        .success{
            display: flex;
        }

        .text{
            display: flex;
            align-items: center;
        }

        .img{
            position: absolute;
            bottom: -.3rem;
            right: 1rem;
        }
    `}
` 