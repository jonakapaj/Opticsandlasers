import React, { useRef } from "react";
import { Line, MeshReflectorMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Mirror = ({ mirrorAngle, rayStart }) => {
  const mirrorRef = useRef();

  // Subtle animation for mirror
  useFrame(() => {
    if (mirrorRef.current) {
      mirrorRef.current.rotation.y += 0.001; // Gentle rotation
    }
  });

  // Mirror properties
  const mirrorPosition = [0, 0, 0];
  const mirrorRotation = [0, 0, (mirrorAngle * Math.PI) / 180];
  const mirrorLength = 20; // Mirror size
  const mirrorHeight = 1.5;
  const mirrorThickness = 0.2; // Added thickness

  // Ray calculations
  const rayEnd = [0, 0, 0];
  const dx = rayEnd[0] - rayStart.x;
  const dy = rayEnd[1] - rayStart.y;
  const angleRadians = (mirrorAngle * Math.PI) / 180;

  // Calculate reflected ray
  const reflectedX =
    rayEnd[0] + dx * Math.cos(2 * angleRadians) - dy * Math.sin(2 * angleRadians);
  const reflectedY =
    rayEnd[1] + dx * Math.sin(2 * angleRadians) + dy * Math.cos(2 * angleRadians);
  const reflectedRayEnd = [reflectedX * 1.5, reflectedY * 1.5, 0]; // Slightly extended reflected ray

  return (
    <>
      {/* Mirror */}
      <mesh
        ref={mirrorRef}
        position={mirrorPosition}
        rotation={mirrorRotation}
        scale={[1.2, 1, 1]}
      >
        <boxGeometry args={[mirrorLength, mirrorHeight, mirrorThickness]} />
        <MeshReflectorMaterial
          color="#ECECEC" // Slightly metallic white for the mirror
          roughness={0.02} // Very smooth surface
          metalness={1} // High metal-like reflectivity
        />
      </mesh>

      {/* Incident Ray */}
      <Line
        points={[
          [rayStart.x, rayStart.y, 0],
          [rayEnd[0], rayEnd[1], 0],
        ]}
        color="#FF4500" // Bright orange for the incident ray
        lineWidth={4}
      />

      {/* Reflected Ray */}
      <Line
        points={[
          [rayEnd[0], rayEnd[1], 0],
          reflectedRayEnd,
        ]}
        color="#1E90FF" // Bright blue for the reflected ray
        lineWidth={4}
      />
    </>
  );
};

export default Mirror;
