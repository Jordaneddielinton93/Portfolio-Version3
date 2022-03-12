import { NavbarStyled } from "./Navbar.style";

const Navbar = () => {
  return ( 
    <NavbarStyled>
      <h1 className="NavTitle">JORDAN LINTON</h1>
      <ul className="NavLinks">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <ul className="NavDarkmode">
        <li className="NavDarkmode-dark">Dark</li>
        <li className="NavDarkmode-light">Light</li>
      </ul>

    </NavbarStyled>
   );
}
 
export default Navbar;