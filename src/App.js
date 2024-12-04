import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Mirror from "./Mirror";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
  const [mirrorAngle, setMirrorAngle] = useState(0);
  const [rayStart, setRayStart] = useState({ x: -3, y: 2 });

  return (
    <div className="app-container">
      <header className="text-center">
        <h1 className="app-title">Mirror Light Illusion</h1>
      </header>
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
          {/* Dynamic Particle Background */}
          <Stars radius={100} depth={50} count={5000} factor={4} fade />

          {/* Lighting */}
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 15, 10]} angle={0.5} intensity={2} castShadow />

          {/* Interactive Camera */}
          <OrbitControls enableZoom={true} />

          {/* Main Mirror and Rays */}
          <Mirror mirrorAngle={mirrorAngle} rayStart={rayStart} />

          {/* Reflected Scene for Illusion */}
          <group position={[0, -15, 0]} scale={[-1, 1, 1]} rotation={[Math.PI, 0, 0]}>
            <Mirror mirrorAngle={mirrorAngle} rayStart={rayStart} />
          </group>
        </Canvas>
      </div>
      <div className="controls-container">
        <div className="slider-group">
          <label className="slider-label">Mirror Angle:</label>
          <input
            type="range"
            className="form-range"
            min="-45"
            max="45"
            value={mirrorAngle}
            onChange={(e) => setMirrorAngle(Number(e.target.value))}
          />
          <p>Current Mirror Angle: {mirrorAngle}°</p>
        </div>
        <div className="slider-group">
          <label className="slider-label">Light Start X:</label>
          <input
            type="range"
            className="form-range"
            min="-5"
            max="0"
            step="0.1"
            value={rayStart.x}
            onChange={(e) => setRayStart({ ...rayStart, x: Number(e.target.value) })}
          />
          <p>Light Start X: {rayStart.x}</p>
        </div>
        <div className="slider-group">
          <label className="slider-label">Light Start Y:</label>
          <input
            type="range"
            className="form-range"
            min="-5"
            max="5"
            step="0.1"
            value={rayStart.y}
            onChange={(e) => setRayStart({ ...rayStart, y: Number(e.target.value) })}
          />
          <p>Light Start Y: {rayStart.y}</p>
        </div>
      </div>
      <footer className="text-center">
        <p>Created with React, Three.js, and Bootstrap</p>
      </footer>
    </div>
  );
};

export default App;
