import { useGLTF } from "@react-three/drei/core/useGLTF";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Chemistry = ({ scrollPosition }) => {
  const ref = useRef();
  // console.log(ref.current.rotation.x)

  let gltf = useGLTF("/Diamond/scene.gltf", true);

  let [rotate, setRotate] = useState(true);
  useFrame((state, delta) => {
    // console.log(ref.current.rotation.x)

    ref.current.rotation.z = 3;
    ref.current.rotation.y = scrollPosition / 100;
    if (rotate) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.x > 4 && setRotate(false);
    } else {
      ref.current.rotation.x -= 0.005;
      ref.current.rotation.x < 3 && setRotate(true);
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 1]} scale={0.03}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Chemistry;
