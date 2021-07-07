import styled from "styled-components";

export const Header = styled.div`
display:flex;
color: #f1f1f1;
flex-direction: row;
justify-content: space-between;
`;

export const Content = styled.div`
.content table tr{
    background: #f1f1f1;
    box-sizing: border-box;
    border: 1px solid blue;
}

.content table *{
    background: transparent;
    background-color: transparent;
}
`;