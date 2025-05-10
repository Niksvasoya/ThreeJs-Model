import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function ShirtModel({ color, modelPath }) {
  const { scene } = useGLTF(modelPath);

  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Animate color change for smoothness
        if (child.material.color.getStyle() !== color) {
          child.material.color.set(color);
        }
      }
    });
  }, [scene, color]);

  // Reduced scale, centered
  return <primitive object={scene} scale={0.65} position={[0, -0.5, 0]} />;
}

export default function ShirtViewer({ color, modelPath }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      style={{ width: 460, height: 460, background: "transparent" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 5]} intensity={1.3} />
      <Suspense fallback={null}>
        <ShirtModel color={color} modelPath={modelPath} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}