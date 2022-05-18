import styled from 'styled-components'

export const ContainerSuccess = styled.div`
    background-color: ${({ theme }) => theme.backgroundSuccess};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    //overflow: hidden;
    //pointer-events: none;

    .popup{
        background-color: ${({ theme }) => theme.text};
        width: 20%;
        
    }

    .close{
        margin: .3rem;
        //width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .popup-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .text{
        color: ${({ theme }) => theme.darkBlue};
        //display: flex;
        text-align: center;
        font-weight: 300;
        font-size: 1.5rem;
    }
` 