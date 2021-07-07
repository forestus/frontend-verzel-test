import styled from "styled-components";
export const Container =styled.div`
`;

export const ContainerItem = styled.div`
p, p time{
    color: #fff;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9)
    }
}
width: 100%;
padding: 1rem 1.5rem;
`;