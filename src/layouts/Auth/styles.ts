import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
 min-height: 100vh;
 background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8e2de2, #4a00e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  color: #6c757d;
  border: 0 solid transparent;
  border-radius: 0.25rem;
  background-clip: border-box;
  padding: 1.25rem;
  background: #fff;
  width: 340px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    img {
      margin: auto;
      margin-bottom: 20px;
    }
  }
  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    /* color: #fff; */
    margin: 0 0 10px;
    /* &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    } */
  }
  span {
    color: #f64c75;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
  button {
    height: 44px;
    background: #8e2de2; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8e2de2, #4a00e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-weight: bold;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, "#8e2de2")};
    }
  }
  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;