import BrokenBorder from "../00-components/00-BrokenBorder/BorkenBorder";
import CANVAS from "../00-components/00-Canvas/Canvas";
import useScrollPosition from "../00-components/01-CustomHooks/useScrollPosition";
import MainSection from "./Components/01-MainSection/MainSection";
import ProjectsSection from "./Components/02-ProjectsSection/ProjectsSection";
import { HomeStyled } from "./Home.style";

export default function Home(){
  let [scrollPosition]=useScrollPosition()

  return (
    <HomeStyled>
      <CANVAS scrollPosition={scrollPosition}/>
      <BrokenBorder/>
      <MainSection/>
      <ProjectsSection/>
      <ProjectsSection/>
    </HomeStyled>
  )
}