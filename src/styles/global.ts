import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle  =createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
*:focus{
    outline:0;
  }

  html{
     @media (max-width: 1080px) {
    font-size: 93.75%; //15px
    /* 16 * 0.9375 = 15 */

  }
  @media (max-width: 720px) {
    font-size: 87.5%; //14px
    /* 16 * 0.875 = 14 */
  }
  }
  html, body, #root{
    font-family: 'Rubik', sans-serif;
    min-height: 100vh;
    
  }
 
  button{
    cursor: pointer;
  }
  body{
    -webkit-font-smoothing: antialiased;
    background: #f1f1f1;
  }

  .btn{
    box-sizing: border-box;
    color: #f1f1f1;
    background-color: #1c0c3f;
    color: white;
    font-weight: 500;
    -webkit-text-decoration: none;
    text-decoration: none;
    border-radius: 0.4rem;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
    padding: 0.3rem 0.5rem;
    border-radius: 0.2rem;
  
  }
  button.btn {
    padding: 0 1.5rem;
    height: 2.75rem;
    font-size: 1rem;
    
  }
.content{
padding-top: 2rem;
}

.options{
  button, a{
    border: none;
    font-size: 1rem;
    text-decoration: none;
    &:not(:first-child){
    margin-left:0.2rem ;
  }
  }
}
.table{
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: #f1f1f1;

td, .content table th {
  border: 1px solid #ddd;
  padding: 8px;
}
.options{
  display: flex;
    flex-direction: row-reverse
}


tr:nth-child(even){background-color: #f2f2f2;}
tr:nth-child(3){
  background-color: #f2f2f2;
  }

tr:hover {background-color: transparent;}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4a00e0;
  color: white;
}
}
.input{
  width: 20% !important;
}
.checkbox{
  width: 1rem !important;
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
  
}
.boxcheckbox h4{
  margin-right: 1rem;
  color: #f1f1f1;
}
.boxcheckbox{
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
`;