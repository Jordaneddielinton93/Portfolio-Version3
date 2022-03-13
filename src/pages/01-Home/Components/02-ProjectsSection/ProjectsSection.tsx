import PulseSphere from "../../../00-components/01-PulseSphere/PulseSphere";
import { ProjectsSectionStyled } from "./ProjectsSection.style";
import instialE from "../../../00-components/00-images/leavesE.png"
import useScrollPosition from "../../../00-components/01-CustomHooks/useScrollPosition";
import { useState } from "react";
import PhoneProject1 from "./components/Phone1/PhoneProject1";

export default function ProjectsSection(){


  let [scrollPosition]=useScrollPosition()

// console.log(scrollPosition/100)
  let [showProjects,setShowProjects]=useState<boolean>(true)
  let [shouldCheck,setshouldCheck]=useState<boolean>(true)
  

  if((scrollPosition/100)>7&&shouldCheck){
    setshouldCheck(false)
    setShowProjects(false)
    console.log(showProjects)
  }
  if((scrollPosition/100)<7&&!shouldCheck){
    setshouldCheck(true)
    setShowProjects(true)
    console.log(showProjects)

  }
  


  return (
    <ProjectsSectionStyled>
      <PulseSphere  delay={"1.5s"}/>
      <h1 className="TopProjects">Top Projects</h1>

      <main className="Project-list">
        <section className="Project-list-Left" style={{left:showProjects?"-50%":"0px"}} >
          <PhoneProject1/>
        </section>
        <section className="Project-list-Right" style={{right:showProjects?"-50%":"0px"}}>
          <PhoneProject1/>

        </section>
        
      </main>

      <img className="Project-img" src={instialE} alt=""/>
      

    </ProjectsSectionStyled>
  )
}