import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8e2de2, #4a00e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
export const Content = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1636px;
  width: 100%;
  padding-bottom: 0.5rem;

  .title{
    font-size: 2rem;
    color: white;
    margin: 2rem;
  }
`;