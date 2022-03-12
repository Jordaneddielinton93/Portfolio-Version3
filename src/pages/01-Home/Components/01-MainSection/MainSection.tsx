import Navbar from "../../../00-components/01-Navbar/Navbar";
import { MainSectionStyled } from "./MainSection.styled";
import instialJ from "../../../00-components/00-images/leaves.png"
import selfie from "../../../00-components/00-images/me1.png"
import PulseSphere from "../../../00-components/01-PulseSphere/PulseSphere";
export default function MainSection(){



  return (
    <MainSectionStyled>
      <Navbar/>
      <div className="Main">
        <section className="Main-LeftSide">
          <div className="Main-LeftSide-middle">
            <PulseSphere  delay={"0s"}/>
            <span>Welcome</span>
            <span>To my</span>
            <span>Portfolio</span>
          </div>
        </section>

        <section className="Main-Middle">
          <img className="Main-Middle-img" src={instialJ} alt="" />
          <PulseSphere delay={"2s"}/>
        </section>

        <section className="Main-RightSide">
          <PulseSphere delay={"3s"}/>
          <img className="Main-RightSide-img" src={selfie} alt="" />

        </section>
      </div>
    </MainSectionStyled>
  )
}