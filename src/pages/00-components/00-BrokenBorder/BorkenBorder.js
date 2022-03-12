import { BrokenBorderStyled } from "./BrokenBorderStyled";
import useScrollPosition from "../01-CustomHooks/useScrollPosition"
import { SingleDivStyled } from "./SingleDiv.style";
import {  useState } from 'react';

const BrokenBorder = () => {
  let [scrollPosition]=useScrollPosition()

  console.log(scrollPosition/150)
  
  

  return ( 
    <BrokenBorderStyled>
      <main className="divContainer">
        <SingleDivStyled/>
        <SingleDivStyled left={"25%"} top={scrollPosition/150>1.6 && (scrollPosition/150)<5?(scrollPosition/6):0}/>
        <SingleDivStyled left={"50%"} top={scrollPosition/150>1.6 && (scrollPosition/150)<5?(-scrollPosition/3):0}/>
        <SingleDivStyled left={"74.5%"}/>
      </main>
    </BrokenBorderStyled>
   );
}
 
export default BrokenBorder;