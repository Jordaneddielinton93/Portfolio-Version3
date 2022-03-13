import styled from "styled-components"
export const AnimationPageStyled = styled.div`
    width:100% ;
    height:100% ;
    background:url("https://images.unsplash.com/photo-1607499457689-3fd1ac3ffcdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
      display:flex ;
      justify-content:space-evenly;
      align-items:center;

    .AnimationPage_glassScreen{
    /* From https://css.glass */
      width:95% ;
      height:95% ;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid grey;
      overflow-y:scroll;
      ::-webkit-scrollbar {
        width: 2px;
      }

      &_Main{
        width:100% ;
        height:100%;
        &-top{
          font-size:1.4rem;
          width:100%;
          height:20% ;
        }
        &-bottom{
          width:100%;
          height:60% ;
          display:flex;
          justify-content:space-evenly;
          flex-flow:wrap;

          & button{
            width:35% ;
            height:10% ;
            background:none ;
            color:white;
            border:solid thin green;
            cursor:pointer;
          }
          &-1{
            width:90% ;
            height:23%;
            border-radius:10px;
          }
          .first{
            background:url("https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
            background-size:cover ;
          }
          .second{
            background:url("https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
            background-size:cover ;
          }
          .third{
            background:url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
            background-size:cover ;
          }



          
        }
      }
    }
    rect{
      fill-opacity:0;
      &:hover{
        stroke:red;
        cursor:pointer ;
      }
    }
`