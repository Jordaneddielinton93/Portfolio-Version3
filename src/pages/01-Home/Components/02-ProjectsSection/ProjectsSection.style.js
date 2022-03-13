import styled from "styled-components"
export const ProjectsSectionStyled = styled.section`
  width:100% ;
  display:flex ;
  justify-content:center;
  align-items:center;
  z-index:3;
  position:relative ;
  flex-direction:column;
  color:white;
  
  .TopProjects{
    font-size:5vw;
    font-weight:200;
    height:200px ;
    width:100% ;
    font-family: 'Inter', sans-serif;
    display:flex ;
    justify-content:center;
    align-items:center;
  }
  .Project-list{
    height:850px;
    width:100% ;
    z-index:1;
    position:relative ;
    overflow:hidden;
    &-Left{
      position:absolute ;
      left:0;
      width:33% ;
      height:100% ;
      transition:2s;
      display:flex ;
      justify-content:center;
      align-items:center;
    }
    &-Right{
      position:absolute ;
      right:0;
      width:33% ;
      height:100% ;
      transition:2s;
      display:flex ;
      justify-content:flex-start;
      align-items:center;

    }
  }
  .Project-img{
    position:absolute ;
    left: 33%;
    height:50%;

  }
`
