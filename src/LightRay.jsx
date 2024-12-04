import React from "react";

const LightRay = ({ start, end, color = "yellow", lineWidth = 2 }) => {
  const drawRay = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  return <>{drawRay}</>;
};

export default LightRay;
