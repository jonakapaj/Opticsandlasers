import React, { useRef, useEffect } from "react";

const CanvasRenderer = ({ mirrorAngle, rayStart }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Mirror position and angle
    const mirrorX = width / 2;
    const mirrorY = height / 2;
    const mirrorLength = 200;
    const angleRadians = (mirrorAngle * Math.PI) / 180;

    // Draw mirror
    ctx.save();
    ctx.translate(mirrorX, mirrorY);
    ctx.rotate(angleRadians);
    ctx.beginPath();
    ctx.moveTo(-mirrorLength / 2, 0);
    ctx.lineTo(mirrorLength / 2, 0);
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();

    // Incident ray
    ctx.beginPath();
    ctx.moveTo(rayStart.x, rayStart.y);
    ctx.lineTo(mirrorX, mirrorY);
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Reflected ray
    const dx = mirrorX - rayStart.x;
    const dy = mirrorY - rayStart.y;
    const reflectedDX = dx * Math.cos(2 * angleRadians) - dy * Math.sin(2 * angleRadians);
    const reflectedDY = dx * Math.sin(2 * angleRadians) + dy * Math.cos(2 * angleRadians);
    ctx.beginPath();
    ctx.moveTo(mirrorX, mirrorY);
    ctx.lineTo(mirrorX + reflectedDX, mirrorY + reflectedDY);
    ctx.strokeStyle = "cyan";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [mirrorAngle, rayStart]);

  return <canvas ref={canvasRef} width={600} height={400} style={{ border: "1px solid black" }} />;
};

export default CanvasRenderer;
