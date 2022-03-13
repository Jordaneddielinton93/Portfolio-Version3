import { useState } from "react";
import Phone1NavBar from "../00-NavBar/Phone1NavBar";
import { AnimationPageStyled } from "../01-AnimationPage/AnimationPage.style";
import HTMLimage from "./HtmlPage";

export default function ResourcesPage({setpageChange}:any){

  let [showElement,setShowElement]=useState<boolean>(false)


  let info:any={
    width:showElement?"80%":"0",
    height:"100%",
    position:"absolute",
    top:"0",
    fontSize:"0.5rem",
    border:"solid thin white",
    transition:"1s",
    background:"rgba(0,0,0,0.8)",
    borderTopRightRadius:"15px"
  }

  return(
    <AnimationPageStyled>
      <main className="AnimationPage_glassScreen" >
        <Phone1NavBar setpageChange={setpageChange}/>
        <h1>Click An Element</h1>
        <div onClick={()=>setShowElement(!showElement)}
         style={{width:"100%",height:"100%",position:"relative"}}>
          <HTMLimage/>
          <div style={info}>
            <div style={{display:showElement?"flex":"none",height:"100%",justifyContent:"space-evenly",alignItems:"center",flexDirection:"column"}}>
              <h1>this will show info about each Element</h1>
              <h1>but not on this Portfolio</h1>
            </div>

          </div>
        </div>
      </main>
    </AnimationPageStyled>
  )
}