import React, { Suspense} from 'react'
import { Canvas} from '@react-three/fiber'
// import { Stars } from '@react-three/drei';
import SpaceMan from '../model/SpaceMan';
import SphereGeo from '../model/Shapes/SphereGeo';
import ConeGeo from '../model/Shapes/ConeGeo';
// import BoxGeo from '../model/Shapes/BoxGeo';

// import ConeGeo from '../model/Shapes/ConeGeo';
// import SphereGeo from '../model/Shapes/SphereGeo';

const CANVAS = ({scrollPosition}) => {
  return ( 
    <div style={{height:"100%",width:"50%",minHeight:"100%",position:"absolute",zIndex:3,left:"25%"}}>
    <Canvas camera={{position:[0,0,5],fov:70}}>
        <Suspense fallback={null}>
        {/* <Stars radius={20} factor={15} /> */}
        
          <spotLight position={[0,1,7]} />
          <SpaceMan scrollPosition={scrollPosition}/>
          {/* <BoxGeo position={[0.4,3.1,0]} bool={true}/>
          <BoxGeo position={[-0.4,3.1,0]} bool={false} /> */}
          <ConeGeo position={[-0.8,-1,0]} bool={false}/>
          <ConeGeo position={[0.8,1,0]} bool={true}/>
          <SphereGeo position={[-0.8,1,0]}/>
          <SphereGeo position={[0.9,-1,0]}/>
        </Suspense>
    </Canvas>
    </div>
   );
}
 
export default CANVAS;