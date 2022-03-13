import styled from "styled-components"

export const TextAnimationStyled =styled.span`
  justify-self:center;
  text-shadow: 6px 6px red;
  font-size:${(props)=>props.fontSize};
  color:white;
  font-weight:800;
  span {
    display: inline-block;
    animation: wave-text 1s ease-in-out infinite;
  }
    span:nth-of-type(1){ animation-delay: 0.0s; }
    span:nth-of-type(2){ animation-delay: 0.1s; }
    span:nth-of-type(3){ animation-delay: 0.2s; }
    span:nth-of-type(4){ animation-delay: 0.3s; }
    span:nth-of-type(5){ animation-delay: 0.4s; }
    span:nth-of-type(6){ animation-delay: 0.6s; }
    span:nth-of-type(7){ animation-delay: 0.7s; }
    span:nth-of-type(8){ animation-delay: 0.8s; }
    span:nth-of-type(9){ animation-delay: 0.9s; }
    span:nth-of-type(10){ animation-delay: 1s; }
  

  @keyframes wave-text{
    00%{
      transform: translateY(0em) ;
    }
    60%{
      transform: translateY(-0.1em); color:green;
    }
    100%{
      transform: translateY(0em);
    }
  }


`