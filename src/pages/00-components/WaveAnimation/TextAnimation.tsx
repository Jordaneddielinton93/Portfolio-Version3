import { TextAnimationStyled } from "./TextAnimation.style";

const TextAnimation = ({Text,fontSize}:any) => {

  let WordArray=Text?Text.split(""):[]


  return ( 
    <TextAnimationStyled fontSize={fontSize}>
      {WordArray.map((item:string)=>{
        return <span>{item}</span>
      })}
    </TextAnimationStyled>
   );
}
 
export default TextAnimation;