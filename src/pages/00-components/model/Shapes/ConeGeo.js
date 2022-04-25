import {Tetrahedron, useTexture } from '@react-three/drei';
import { useFrame} from '@react-three/fiber';
import { useRef, useState } from 'react';

import paint1 from "../../00-images/paint.jpg"
import paint2 from "../../00-images/paint2.jpg"


export default function ConeGeo({position,bool}) {
  const ref = useRef()
  useFrame((state, delta) =>{
      ref.current.rotation.z = 0.5
      bool?(ref.current.rotation.x -= 0.01):(ref.current.rotation.x += 0.01)
    })
    const [hovered, hover] = useState(false)
  
    let texture=useTexture(hovered?paint2:paint1)
  
  return (
    <Tetrahedron ref={ref} position={position} scale={0.35} onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}>
      
      <meshBasicMaterial  attach="material" map={texture} >
      {/* <GradientTexture
      stops={[0, 1]} // As many stops as you want
      colors={['#9DB5FB', '#9B31C9']} // Colors need to match the number of stops
       // Size is optional, default = 1024
    /> */}
        
      </meshBasicMaterial>
    </Tetrahedron>
  )
}