import styled from "styled-components";

export const Container =styled.div`

    
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 2rem;
    

    @media(max-width: 767px){
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
  }

  .module{
    padding: 2rem;
    background: white;
    border-radius: 0.45rem;
    min-height: 12rem;
    min-width: 3rem;
    
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    display: flex;

    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9)
    }

    a{
      padding:  0.5rem 1rem;
      background: #1c0c3f;
      color: white;
      font-weight: 500;
      text-decoration: none;
      border-radius: 0.4rem;
        transition: background 0.3s;
      &:hover{
        background: #4c3286;
      }
    }
    

  }
`;