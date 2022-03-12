import { PulseSphereStyled } from "./PulseSphere.style"

export default function PulseSphere({delay}:{delay:string}){


  return (
    <PulseSphereStyled  delay={delay} className="Main-Middle-Sphere">
    </PulseSphereStyled>
  )
}