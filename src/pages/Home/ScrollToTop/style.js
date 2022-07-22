import styled from 'styled-components'

export const ContainerScrollToTop = styled.div`
     display: flex;
     justify-content: center;
     margin-top: 2rem;
     padding: 1rem 2rem;

     button{
          padding: 1rem;
          border-radius: .3rem;
          border: none;
          background-color: ${({ theme }) => theme.darkBlue};
          color: ${({ theme }) => theme.background};
          font-size: 1rem;
     }

     button:hover{
          cursor: pointer;
          background-color: ${({ theme }) => theme.blue};
     }
` 