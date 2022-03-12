import styled from "styled-components"
export const NavbarStyled = styled.nav`
  height:80px;
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:white;
  .NavTitle{
    display:flex ;
    width:25% ;
    justify-content:center;
    font-size:4vh;
  }

  .NavLinks{
    display:flex;
    width:50% ;
    justify-content:space-evenly;
    &li{
      cursor:pointer;
    }
  }

  .NavDarkmode{
    display:flex ;
    justify-content:center;
    width:25% ;
    font-size:4vh;
    &-dark{
      padding-right:10px;
    }
  }

`