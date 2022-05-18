import PulseSphere from "../../../00-components/01-PulseSphere/PulseSphere";
import { ProjectsSectionStyled } from "./ProjectsSection.style";
import instialE from "../../../00-components/00-images/leavesE.png";
import useScrollPosition from "../../../00-components/01-CustomHooks/useScrollPosition";
import { Suspense, useState } from "react";
import PhoneProject1 from "./components/Phone1/PhoneProject1";
import PhoneProject2 from "./components/Phone2/PhoneProject2";
import { Canvas } from "@react-three/fiber";
import Chemistry from "../../../00-components/model/Chemistry";

export default function ProjectsSection() {
  let [scrollPosition] = useScrollPosition();

  // console.log(scrollPosition/100)
  let [showProjects, setShowProjects] = useState<boolean>(true);
  let [shouldCheck, setshouldCheck] = useState<boolean>(true);

  if (scrollPosition / 100 > 7 && shouldCheck) {
    setshouldCheck(false);
    setShowProjects(false);
    console.log(showProjects);
  }
  if (scrollPosition / 100 < 7 && !shouldCheck) {
    setshouldCheck(true);
    setShowProjects(true);
    console.log(showProjects);
  }

  return (
    <ProjectsSectionStyled>
      <div
        style={{
          height: "100%",
          width: "50%",
          minHeight: "100%",
          position: "absolute",
          zIndex: 20,
          left: "25%",
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
          <Suspense fallback={null}>
            <spotLight position={[0, 1, 7]} />
            <Chemistry scrollPosition={scrollPosition} />
          </Suspense>
        </Canvas>
      </div>

      <PulseSphere delay={"1.5s"} />
      <h1 className="TopProjects">Top Projects</h1>

      <main className="Project-list">
        <section
          className="Project-list-Left"
          style={{ left: showProjects ? "-50%" : "0px" }}
        >
          <PhoneProject1 />
        </section>
        <section
          className="Project-list-Right"
          style={{
            right: showProjects ? "-50%" : "0px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Wireframes</h1>
          <PhoneProject2 />
        </section>
      </main>

      <img className="Project-img" src={instialE} alt="" />
    </ProjectsSectionStyled>
  );
}
