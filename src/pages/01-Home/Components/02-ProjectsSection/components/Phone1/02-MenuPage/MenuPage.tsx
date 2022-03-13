import Phone1NavBar from "../00-NavBar/Phone1NavBar";
import img1 from "../../../../../../00-components/00-images/Phone1Menu.png"
import img2 from "../../../../../../00-components/00-images/PhoneMenu1.png"
import img3 from "../../../../../../00-components/00-images/PhoneMenu2.png"
import { AnimationPageStyled } from "../01-AnimationPage/AnimationPage.style";

export default function MenuPage({setpageChange}:any){





  return(
    <AnimationPageStyled>
      <main className="AnimationPage_glassScreen" >
        <Phone1NavBar setpageChange={setpageChange}/>
        <div>
          <img src={img1} alt="" width="100%" />
          <img src={img2} alt="" width="100%" />
          <img src={img3} alt="" width="100%" />
        </div>
      </main>
    </AnimationPageStyled>
  )
}