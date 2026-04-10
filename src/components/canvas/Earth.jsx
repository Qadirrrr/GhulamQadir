import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/public/planet/scene.gltf");
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const { x, y } = state.mouse;

    // Subtly rotate base on mouse
    meshRef.current.rotation.y += 0.003; // Maintain some rotation
    meshRef.current.rotation.x = -y * 0.15;
    meshRef.current.rotation.z = x * 0.1;

    // Shift position based on mouse
    meshRef.current.position.x = x * 0.5;
    meshRef.current.position.y = (-y * 0.5);
  });

  return (
    <mesh ref={meshRef}>
      <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={false} // Disable orbit so mouse tracking works better
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
