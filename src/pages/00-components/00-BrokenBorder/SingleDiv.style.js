import styled from "styled-components";

export const SingleDivStyled = styled.div`
    z-index:4;
    width:25vw ;
    height:10px;
    border-top:inset thin white;
    border-bottom:inset thin white;
    position:absolute ;
    left:${({left})=>left};
    top:${({top})=>top+"px"};
    transform:rotate(${({top})=>(top/2)+"deg"})
`