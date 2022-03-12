
import { useFrame } from '@react-three/fiber'
import { useState,useRef } from 'react';
export default function BoxGeo(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  console.log(props.bool)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {

    props.bool?ref.current.rotation.y -= 0.01:ref.current.rotation.y += 0.01
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 0.08 : 0.04}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial  color={hovered ?'#EFEFA7'  : 'purple'} />
    </mesh>
  )
}