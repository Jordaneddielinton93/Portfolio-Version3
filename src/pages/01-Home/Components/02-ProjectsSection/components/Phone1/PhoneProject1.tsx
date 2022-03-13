import { useState } from "react";
import AnimationPage from "./01-AnimationPage/AnimationPage";
import MenuPage from "./02-MenuPage/MenuPage";
import ResourcesPage from "./03-Resources/ResourcesPage";
import { PhoneProject1Styled } from "./PhoneProject.style";

export default function PhoneProject1(){

 
  let [pageChange,setpageChange]= useState<string>("AnimationPage")


  return(
    <PhoneProject1Styled>
      {
        pageChange==="AnimationPage"?
        <AnimationPage setpageChange={setpageChange}/>
        :
        (pageChange==="MainMenu"?
        <MenuPage setpageChange={setpageChange}/>
        :
        (pageChange==="Resources"&&
        <ResourcesPage setpageChange={setpageChange}/> )
        )
      }
    </PhoneProject1Styled>
  )
}