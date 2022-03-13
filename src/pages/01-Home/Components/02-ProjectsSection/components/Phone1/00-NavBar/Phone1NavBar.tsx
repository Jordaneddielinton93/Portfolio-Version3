import { useState } from "react";
import { Phone1NavBarStyled } from "./Phone1NavBar.style";








export default function Phone1NavBar({setpageChange,changePage}:any){

  let [burger,setBurger]= useState(false)

  

  return(
    <Phone1NavBarStyled>

    <div className="DropDownNav" style={{height:burger?"200px":"0px"}}>
      <ul className="DropDownNav_hidden" style={{display:burger?"flex":"none"}}>
        <li onClick={()=>setpageChange("AnimationPage")}>Home</li>
        <li onClick={changePage}>Animations</li>
        <li onClick={()=>setpageChange("Resources")}>Resources</li>

      </ul>
    </div>



      <nav className="NavPhone1">
        <h1 onClick={()=>setpageChange("AnimationPage")} style={{cursor:"pointer"}}>S-O-C/W3S</h1>
        <div className="NavPhone1_burger" onClick={()=>setBurger(!burger)}>
          <div className="span"></div>
          <div className="span"></div>
          <div className="span"></div>
        </div>
      </nav>
    </Phone1NavBarStyled>
  )
}