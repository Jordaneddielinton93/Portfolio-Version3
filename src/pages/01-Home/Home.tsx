import { useContext } from "react";
import { pageState } from "../../App";
import BrokenBorder from "../00-components/00-BrokenBorder/BorkenBorder";
import CANVAS from "../00-components/00-Canvas/Canvas";
import useScrollPosition from "../00-components/01-CustomHooks/useScrollPosition";
import Navbar from "../00-components/01-Navbar/Navbar";
import MainSection from "./Components/01-MainSection/MainSection";
import ProjectsSection from "./Components/02-ProjectsSection/ProjectsSection";
import SkillsSection from "./Components/03-SkillsSection/SkillsSection";
import { HomeStyled } from "./Home.style";

export default function Home(){
  let [scrollPosition]=useScrollPosition()
  let {state}=useContext(pageState)

  return (
    <HomeStyled bgColor={state.LightModeToggle}>
      <Navbar/>
      <CANVAS scrollPosition={scrollPosition}/>
      <MainSection />
      <BrokenBorder/>
      <SkillsSection/>

      <ProjectsSection/>
    </HomeStyled>
  )
}