import styled from "styled-components"
export const Phone1NavBarStyled = styled.div`
        position:relative ;
        width:100% ;
        height:10% ;
        font-size:0.8rem;
        display:flex ;
        justify-content:space-evenly;
        align-items:center;
        .NavPhone1_burger{
          position:absolute ;
          top:10px;
          right:10px;
          width:30px ;
          height:30px;
          display:flex;
          flex-direction:column;
          justify-content:space-evenly;
          z-index:5;
          cursor:pointer;

          & .span{
            width:100% ;
            height:10%;
            background-color:white ;
          }
        }


        .DropDownNav{
          height:100%;
          width:100%;
          position:absolute ;
          top:0;
          left:0;
          background:rgba(0,0,0,0.9) ;
          z-index:5;
          display:flex ;
          justify-content:space-evenly;
          align-items:center;
          transition:1s ;
          border-radius:15px;

          &_hidden{
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:space-evenly;
            & li{
              cursor:pointer ;
            }
          }
        }
        

`


