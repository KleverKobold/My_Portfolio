import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Ball from "./Ball"; // The Ball component from your Ball.jsx
import CanvasLoader from "../Loader";
import { technologies } from "../../constants/index";

// Helper to arrange balls in a grid or circle
const getPosition = (index, total) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 5; // Adjust as needed
  return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
};

const TechBallsCanvas = () => (
  <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      {technologies.map((tech, idx) => (
        <Ball
          key={tech.name}
          imgUrl={tech.icon}
          position={getPosition(idx, technologies.length)}
        />
      ))}
    </Suspense>
    <Preload all />
  </Canvas>
);

export default TechBallsCanvas;
