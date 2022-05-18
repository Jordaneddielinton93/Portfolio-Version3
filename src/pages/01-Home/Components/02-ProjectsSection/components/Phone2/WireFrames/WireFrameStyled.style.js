import styled from "styled-components";
export const WireFrameStyled = styled.div`
  transition: 3s;

  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .AnimationPage_glassScreen {
    /* From https://css.glass */
    width: 95%;
    height: 95%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid grey;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 2px;
    }

    &_Nav {
      transition: 3s;

      height: 10%;
      width: 100%;
      /* background: red; */
      display: flex;
      justify-content: center;
      align-items: center;
      & p {
        transition: 3s;
      }
    }

    &_Main {
      transition: 3s;

      width: 100%;
      height: 100%;
      &-top {
        font-size: 1.4rem;
        width: 100%;
        height: 20%;
        & h4 {
          transition: 3s;
        }
      }
      &-bottom {
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: space-evenly;
        flex-flow: wrap;

        & button {
          transition: 3s;

          width: 35%;
          height: 10%;
          background: none;
          color: white;
          border: solid thin green;
          cursor: pointer;
        }
        &-1 {
          width: 90%;
          height: 23%;
          border-radius: 10px;
        }
        .first {
          transition: 3s;

          background: url("https://images.unsplash.com/photo-1597423244036-ef5020e83f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
          background-size: cover;
          text-indent: -999px;
        }
        .second {
          transition: 3s;

          background: url("https://images.unsplash.com/photo-1552084117-56a987666449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
          background-size: cover;
          text-indent: -999px;
        }
        .third {
          transition: 3s;

          background: url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
          background-size: cover;
          text-indent: -999px;
        }
      }
    }
  }
  /* { split here} */

  .LowAnimationPage_glassScreen {
    /* From https://css.glass */
    width: 95%;
    height: 95%;
    background: #032f3b;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: thin solid grey;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 2px;
    }

    &_Nav {
      height: 10%;
      width: 100%;
      /* background: red; */
      display: flex;
      justify-content: center;
      align-items: center;
      & p {
        transition: 3s;
        background: grey;
        height: 30px;
        width: 30%;
        border-radius: 20px;
        text-indent: -999px;
      }
    }

    &_Main {
      width: 100%;
      height: 100%;
      &-top {
        font-size: 1.4rem;
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & h4 {
          text-align: center;
          text-indent: -999px;
          transition: 3s;

          width: 50%;
          border-radius: 20px;
          background: #3d4e44;
          margin: 0.5px;
        }
        & h4:nth-child(2) {
          width: 35%;
          text-indent: -999px;
        }
        & h4:nth-child(3) {
          width: 40%;
        }
      }
      &-bottom {
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: space-evenly;
        flex-flow: wrap;

        & button {
          transition: 1s;
          width: 35%;
          height: 10%;
          background: grey;
          color: white;
          border: solid thin black;
          cursor: pointer;
          text-indent: -999px;
          transition: 3s;
        }
        &-1 {
          width: 90%;
          height: 23%;
          border-radius: 10px;
        }
        .first-Low {
          transition: 3s;
          background: grey;
          /* border: solid thin black; */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .second-Low {
          transition: 3s;
          background: grey;
          /* border: solid thin black; */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .third-Low {
          transition: 3s;
          background: grey;
          /* border: solid thin black; */
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
