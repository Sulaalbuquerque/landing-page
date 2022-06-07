import styled from 'styled-components'

export const ContainerMenu = styled.div`

    .list{
        display: flex;
        justify-content: space-between;
        gap: 1.2rem;
    }
    
    li{
       list-style-type: none;
    }

    .search{
        position: relative;
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.text};
        display: flex;
        align-items: center;
    }

    span{
        display: none;
    }

    .bag{
        display: flex;
        border-right: none;
        margin-right: 3rem;
        position: relative;
    }

    .item-counter{
        background-color: ${({ theme }) => theme.blue};
        padding: .2rem .4rem;
        border-radius: 50%;
        position: absolute;
        right: -1.14rem;
    }

    @media (min-width: 771px) {

        span{
            display: block;
        }

        a{
            gap: .5rem;
            padding-right: 2rem;
            border-right: solid 2px ${({ theme }) => theme.text};
        }

        .item-counter{
            right: .4rem;
        }
    }
` 