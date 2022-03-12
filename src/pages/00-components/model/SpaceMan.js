

import { useGLTF } from "@react-three/drei/core/useGLTF";


import { useFrame } from '@react-three/fiber'
import { useRef,useState } from "react";

const SpaceMan = ({scrollPosition}) => {
  const ref = useRef()
// console.log(ref.current.rotation.x)

  let gltf = useGLTF('/scene.gltf',true)


  let [rotate,setRotate]=useState(true)
  useFrame((state, delta) => {
// console.log(ref.current.rotation.x)

    ref.current.rotation.z = 3
    ref.current.rotation.y=scrollPosition/1000
    if(rotate){
      ref.current.rotation.x+=0.005
      ref.current.rotation.x>1.5&&setRotate(false)
    }else{
      ref.current.rotation.x-=0.005
      ref.current.rotation.x<0.5&&setRotate(true)
    }

  })
  return ( 
    <mesh ref={ref} position={[0,-scrollPosition/140+2.6,1]} scale={0.225}>
      <primitive object={gltf.scene}/>
   </mesh>
   );
}
 
export default SpaceMan;
