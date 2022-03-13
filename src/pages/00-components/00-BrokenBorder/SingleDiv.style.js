import styled from "styled-components";
import log from "../../00-components/00-images/log.jpg"
export const SingleDivStyled = styled.div`
    z-index:4;
    width:25vw ;
    
    border-top:inset thick #4EC5C4;
    /* background:url(${log}); */
    position:absolute ;
    left:${({left})=>left};
    top:${({top})=>top+"px"};
    transform:rotate(${({top})=>(top/2)+"deg"})
`