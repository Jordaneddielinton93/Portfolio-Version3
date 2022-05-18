import { useEffect, useState } from "react";
import TextAnimation from "../../../../../../00-components/WaveAnimation/TextAnimation";
import Phone1NavBar from "../../Phone1/00-NavBar/Phone1NavBar";
import { WireFrameStyled } from "./WireFrameStyled.style";

export default function WireFrame() {
  let [bool, setBool] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBool(!bool);
    }, 6000);
  }, [bool]);

  let frame = {
    heigh1: "AnimationPage_glassScreen",
    heigh2: "AnimationPage_glassScreen_Nav",
    heigh3: "AnimationPage_glassScreen_Main",
    heigh4: "AnimationPage_glassScreen_Main-top",
    heigh5: "AnimationPage_glassScreen_Main-bottom",
    heigh6: "AnimationPage_glassScreen_Main-bottom-1 first",
    heigh7: "AnimationPage_glassScreen_Main-bottom-1 second",
    heigh8: "AnimationPage_glassScreen_Main-bottom-1 third",
    ___: "",
    Low1: "LowAnimationPage_glassScreen",
    Low2: "LowAnimationPage_glassScreen_Nav",
    Low3: "LowAnimationPage_glassScreen_Main",
    Low4: "LowAnimationPage_glassScreen_Main-top",
    Low5: "LowAnimationPage_glassScreen_Main-bottom",
    Low6: "AnimationPage_glassScreen_Main-bottom-1 first-Low",
    Low7: "AnimationPage_glassScreen_Main-bottom-1 second-Low",
    Low8: "AnimationPage_glassScreen_Main-bottom-1 third-Low",
    Low9: "LowAnimationPage_glassScreen_Nav-title",
  };

  return (
    <WireFrameStyled
      background={
        bool
          ? 'url("https://images.unsplash.com/photo-1607499457689-3fd1ac3ffcdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
          : "#3D4E44"
      }
    >
      <main className={bool ? frame.heigh1 : frame.Low1}>
        <nav className={bool ? frame.heigh2 : frame.Low2}>
          <p>{"S-O-C/W3S"}</p>
        </nav>
        <section className={bool ? frame.heigh3 : frame.Low3}>
          <div className={bool ? frame.heigh4 : frame.Low4}>
            <h4>School Of Code</h4>
            <h4>Has your</h4>
            <h4>
              <TextAnimation Text="Animations" fontSize="1em" />
            </h4>
          </div>

          <div className={bool ? frame.heigh5 : frame.Low5}>
            <button>Explore</button>
            <button>WorkShop</button>

            <div className={bool ? frame.heigh6 : frame.Low6}>IMG-1</div>
            <div className={bool ? frame.heigh7 : frame.Low7}>IMG-2</div>
            <div className={bool ? frame.heigh8 : frame.Low8}>IMG-3</div>
          </div>
        </section>
      </main>
    </WireFrameStyled>
  );
}
