import { useContext } from "react";
import { pageState } from "../../../App";
import { NavbarStyled } from "./Navbar.style";

const Navbar = () => {
  let {state,setState}=useContext(pageState)

  return ( 
    <NavbarStyled bgColor={state.LightModeToggle}>
      <div className="NavBarFixed">
        <h1 className="NavTitle">JORDAN LINTON</h1>
        <ul className="NavLinks">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <ul className="NavDarkmode">
          <li className="NavDarkmode-dark" onClick={()=>setState({...state,LightModeToggle:!state.LightModeToggle})}>Dark</li>
          <li className="NavDarkmode-light">Light</li>
        </ul>
      </div>
    </NavbarStyled>
   );
}
 
export default Navbar;