import React from "react";
import Typewriter from "typewriter-effect";

export default function HomeScroll() {
  return (
    <div className="HomeScroll">
      <Typewriter
        options={{
          strings: [
            "// Full Stack Software Engineer",
            "// Creative Coder",
            "// Freelance Illustrator",
            "// Graphic Design",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
