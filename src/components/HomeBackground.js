import React from "react";
import Sketch from "react-p5";
import { StereoFeedbackEffect } from "tone/build/esm/effect/StereoFeedbackEffect";

// import P5sketch from "./P5sketch";

function HomeBackground() {
  const setup = (p5, canvasParentRef) => {
    p5.frameRate(30);
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    canvas.style("z-index", "-2");
    p5.fill(0);
    p5.background(0);
  };
  const draw = (p5) => {
    p5.stroke(255, 255, 102);
    for (let i = 0; i < 50; i++) {
      if (p5.mouseIsPressed) {
        p5.strokeWeight(1);
        p5.ellipse(p5.mouseX, p5.mouseY, 50);
        p5.ellipse(p5.mouseX - 12.1, p5.mouseY - 2, 1, 1);
        p5.ellipse(p5.mouseX + 12.1, p5.mouseY - 2, 1, 1);
        p5.arc(
          p5.mouseX,
          p5.mouseY,
          30,
          30,
          p5.QUARTER_PI + 0.1,
          p5.QUARTER_PI + 1.5
        );
        // p5.noFill();
      }
    }
  };
  return (
    <div>
      <Sketch className="p5-sketch" setup={setup} draw={draw} />
    </div>
  );
}

export default HomeBackground;
