import { TextAnimationStyled } from "./TextAnimation.style";

const TextAnimation = ({Text,fontSize}:any) => {

  let WordArray=Text?Text.split(""):[]


  return ( 
    <TextAnimationStyled fontSize={fontSize}>
      {WordArray.map((item:string,index:number)=>{
        return <span id={item+index}>{item}</span>
      })}
    </TextAnimationStyled>
   );
}
 
export default TextAnimation;