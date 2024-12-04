import React from "react";

const Controls = ({ mirrorAngle, setMirrorAngle, rayStart, setRayStart }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        color: "#FFD700",
        backgroundColor: "#000",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      {/* Controls Section */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#111",
          borderRadius: "10px",
          marginRight: "20px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Controls</h3>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Mirror Angle:
            <input
              type="range"
              min="-45"
              max="45"
              value={mirrorAngle}
              onChange={(e) => setMirrorAngle(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </label>
          <p>Current Mirror Angle: {mirrorAngle}°</p>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>
            Light Start X:
            <input
              type="range"
              min="-5"
              max="0"
              step="0.1"
              value={rayStart.x}
              onChange={(e) => setRayStart({ ...rayStart, x: Number(e.target.value) })}
              style={{ width: "100%" }}
            />
          </label>
          <p>Light Start X: {rayStart.x}</p>
        </div>
        <div>
          <label>
            Light Start Y:
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={rayStart.y}
              onChange={(e) => setRayStart({ ...rayStart, y: Number(e.target.value) })}
              style={{ width: "100%" }}
            />
          </label>
          <p>Light Start Y: {rayStart.y}</p>
        </div>
      </div>

      {/* Description Section */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          borderRadius: "10px",
          position: "relative",
          backgroundColor: "#111",
          color: "#FFD700",
          backgroundImage: "radial-gradient(circle, #222, #000 70%)",
          boxShadow: "0px 0px 20px 2px #000",
        }}
      >
        <h3 style={{ textAlign: "center" }}>What This Visualization Explains</h3>
        <p>
          This interactive visualization demonstrates <strong>specular reflection</strong>:
        </p>
        <ul>
          <li>
            A light ray (<span style={{ color: "#FF4500" }}>red</span>) hits a smooth reflective surface (the mirror).
          </li>
          <li>
            The reflected ray (<span style={{ color: "#1E90FF" }}>blue</span>) follows the <strong>law of reflection</strong>: 
            the <strong>angle of incidence</strong> equals the <strong>angle of reflection</strong>.
          </li>
        </ul>
        <p>
          Adjust the mirror angle or the light ray position using the controls to see how the rays behave. Try predicting the reflection angles!
        </p>
      </div>
    </div>
  );
};

export default Controls;
