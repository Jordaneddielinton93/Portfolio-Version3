import styled from "styled-components"
export const MainSectionStyled = styled.main`
  width:100% ;
  height:100vh;
  display:flex ;
  flex-direction:column;
  z-index:1;
  .Main{
    display:flex ;
    width:100% ;
    height:90% ;
    &-LeftSide{
      position:relative ;
      display:flex ;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width:30% ;
      height:100%;
      &-middle{
        color:white;
        font-size:8vw;
        font-weight:100;
        width:90% ;
        display:flex ;
        flex-direction:column;
        text-align:left;
        span{
          z-index:0;
        }
      }
    }
    &-Middle{
      position:relative ;
      display:flex ;
      width:40% ;
      height:100%;
      justify-content:center;
      align-items:center;

      &-img{
        z-index:1;
        /* width:100% ; */
        height:80%;
        max-width:100%;
      }
    }
    &-RightSide{
      display:flex;
      position:relative ;
      justify-content:center;
      width:30%;
      height:100%;
      &-img{
        width:100% ;
        max-width:300px;
        align-self:center;
        
      }
    }
  }
  
`