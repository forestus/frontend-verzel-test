import styled from "styled-components";


export const Wrapper = styled.div`
 min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0) !important; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #8e2de2, #4a00e0) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;
export const Sidebar = styled.div`
width:100%;
display: flex;
padding: 1.2rem;
align-items: center;

a, button{
  display: block;
  color: #f1f1f1;
  padding: 0.3rem;
  text-decoration: none;
  border:none;
&:hover{
  text-decoration: underline;
}
}
button{
  margin-left: auto;
  text-decoration: none;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none; 
}
`;

export const Content = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 1636px;
  width: 100%;
  padding-bottom: 0.5rem;
  height: 100vh;
  .title{
    font-size: 2rem;
    color: white;
  }
`;