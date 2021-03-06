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
      &-Top{
        color:white;
        font-size:5.5vw;
        font-weight:100;
        width:90% ;
        display:flex ;
        flex-direction:column;
        text-align:left;
        span{
          z-index:0;
        }
      }
      &-Middle{
        color:white;
        width:90% ;
        font-size:1.5vw;
        text-align:left;
      }
      &-Bottom{
        color:grey;
        display:flex ;
        justify-content:space-evenly;
        align-items:center;
        margin-top:10px;
        width:90%;
        height:90px ;

        /* background:red ; */
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
        position:absolute ;
        top:20%;
        width:100% ;
        max-width:300px;
        align-self:center;
      }
      &-spans{
        display:flex ;
        flex-direction:column;
        position:absolute ;

        top: 60%;
        color:white;
        font-size:2vw;
        font-weight:300;
        & span{
          border-bottom:solid thin yellow;
        }
        .contact{
          font-size:1rem;
          display:flex;
          justify-content:center;
          align-items:center;
          border:inset thick yellow;

          border-radius:100%;
          height:100px;
          width:100px ;
          transition:0.5s;
          margin-top:5px;
          cursor:pointer;
          &:hover{
            border:solid thin yellow;

            background:#37BAB9;
          }
        }
      }
    }
  }
  
`