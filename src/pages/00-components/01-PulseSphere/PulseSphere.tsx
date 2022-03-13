import { useContext } from "react"
import { pageState } from "../../../App"
import { PulseSphereStyled } from "./PulseSphere.style"

export default function PulseSphere({delay}:{delay:string}){
  let {state}=useContext(pageState)


  return (
    <PulseSphereStyled bgColor={state.LightModeToggle}  delay={delay} className="Main-Middle-Sphere">
    </PulseSphereStyled>
  )
}