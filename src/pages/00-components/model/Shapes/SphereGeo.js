import {  GradientTexture, Sphere, useTexture } from '@react-three/drei';
import { useFrame} from '@react-three/fiber';
import { useRef } from 'react';
// import imgg from "../../images/gradient.jpg"
import whiteSilk from "../../00-images/paint.jpg"



export default function SphereGeo({position,bool}) {
  const ref = useRef()
  useFrame((state, delta) =>{
      ref.current.rotation.z = 0.5
      bool?(ref.current.rotation.y -= 0.01):(ref.current.rotation.y += 0.01)
    })
  
    let texture=useTexture(whiteSilk)
  
  return (
    <Sphere ref={ref} position={position} scale={0.25}>
      
      <meshBasicMaterial  attach="material" map={texture} >
        
      </meshBasicMaterial>
    </Sphere>
  )
}