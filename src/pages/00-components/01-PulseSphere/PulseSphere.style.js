import styled from "styled-components"
export const PulseSphereStyled = styled.div`
      position:absolute ;
      left:25%;
      width:200px;
      height:200px;
      background-color: #fbc779;
      background:${({bgColor})=>bgColor?
      "radial-gradient(closest-side,#012f40,#095A6C ,#fbc779)":"radial-gradient(closest-side,#fbc779,#095A6C ,#012f40)"
      };
      /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5); */
      /* background:radial-gradient( "(closest-side,#fbc779,#095A6C ,#012f40)":""}); */
      

      border-radius:100%;
      opacity:0.4;
      animation: Glow 4s ${props=>props.delay} infinite alternate;
      @keyframes Glow{
        from{
          top:${props=>props.top}%;
          width:100px;
          height:100px;
          
          /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0); */
        }
        to{
          top:${props=>props.top}%;
          width:200px;
          height:200px;
          /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5); */

        }
      }
`