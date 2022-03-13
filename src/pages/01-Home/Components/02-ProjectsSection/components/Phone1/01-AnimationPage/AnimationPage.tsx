
import TextAnimation from "../../../../../../00-components/WaveAnimation/TextAnimation";
import Phone1NavBar from "../00-NavBar/Phone1NavBar";
import { AnimationPageStyled } from "./AnimationPage.style";

export default function AnimationPage({setpageChange}:any){
  
  function changePage(){
    setpageChange("MainMenu")
  }

  return(
    <AnimationPageStyled>
        <main className="AnimationPage_glassScreen" >
  
          <Phone1NavBar setpageChange={setpageChange} changePage={changePage}/>
          <section  className="AnimationPage_glassScreen_Main">
            <div className="AnimationPage_glassScreen_Main-top">
              <h4>School Of Code</h4>
              <h4>Has your</h4>
              <TextAnimation Text="Animations" fontSize="1em"/>
            </div>

            <div className="AnimationPage_glassScreen_Main-bottom">
              <button onClick={changePage}>Explore</button>
              <button onClick={()=>setpageChange("Resources")}>WorkShop</button>

              <div className="AnimationPage_glassScreen_Main-bottom-1 first"></div>
              <div className="AnimationPage_glassScreen_Main-bottom-1 second"></div>
              <div className="AnimationPage_glassScreen_Main-bottom-1 third"></div>
            </div>
            

          </section>
        </main>
      </AnimationPageStyled>
  )
}