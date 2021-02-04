import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
export const GlobalStyle = createGlobalStyle`
body{
background-color:#F1EBE4;
}
`;

export const AddNewbtn = styled.button`
float: right;
margin: 10px;
background-color:#6c584c;
color:white;
`
export const LibBtn = styled.button`
background-color:#6c584c;
color:white;
`

export const Navitem = styled(NavLink)`
color: white;
padding: 1.0em 1em;
font-size:18px;

&:hover {
  color: black;
}


`
export const HomeWrapper = styled.div`

color:#5B4533;
h1{
    text-align: center;
    
  }
  h3 {
    text-align: center;
    color:#A98467;
  }
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 55%;
  }
`
export const Silver = styled.h3`
color: #727272;
`

export const Gold = styled.h3`
color:#d4af37;
`

export const Platinum = styled.h3`
color:#a0b2c6;
`
export const PageTitle = styled.h1`
color:#5B4533;
`
export const Comment = styled.p`
color:#828387;
font-style: italic;
`