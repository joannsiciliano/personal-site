import React from "react";
import idPicture from "./deviantid.png";
import twitter from "./twitter.png";
import instagram from "./instagram.png";

export default function About() {
  return (
    <div className="AboutDiv">
      <div className="PicDiv">
        <a
          href="https://twitter.com/joannfabrix"
          target="_blank"
          className="SMPic"
          exact
        >
          {" "}
          <img src={twitter} />
        </a>
        <img src={idPicture} className="IDPicture" />
        <a
          href="https://www.instagram.com/j_s.jpg/"
          className="SMPic"
          target="_blank"
        >
          {" "}
          <img src={instagram} />
        </a>
      </div>
      <h2>JoAnn Rose Siciliano</h2>
      <div className="ParagraphDiv">
        <p>
          Hi! My name is JoAnn, but you can call me Jo for short. I was born and
          raised in Detroit city and have always been a creative person. Growing
          up, I was heavily involved in both art and music, and ended up pursing
          fine art as a profession after attending both an art high school and
          college.
        </p>
        <p>
          After spending some time working as a tattoo artist, I became very
          interested in science and decided to go back to school for Biomedical
          Science, shifting my career from art to science.
        </p>
        <p>
          I found myself returning to art after the pandemic had forced me into
          isolation- first for myself, and then for other people. I started to
          remember what it felt like to create art for others, and a joy was
          found again. I knew whatever I went back to, creativity was at the top
          of my list.
        </p>
        <p>
          Someone told me that coding was creative, so I decided to check it
          out. I was skeptical at first, and honestly didn't expect to even
          enjoy it, but it quickly became apparent to me that code was actually
          a form of art, and that is exactly how I approach writing code.{" "}
        </p>
        <p>
          Having both a background in science and art, writing code and making
          full-stack applications feels as though it comes a little easier.
          Having done experimental research, I can troubleshoot errors and
          absolutely stomp on bugs. Having an inclination towards the arts makes
          designing a DOM feel like painting on a canvas.
        </p>
        <p>
          {" "}
          I am fascinated by the intersection of technology, art, and nature,
          and am inspired by generative art, machine learning, and any other
          ways that technology can be used creatively. Please reach out if you
          want to talk about software development, creative code, or simulation
          theory ☺︎
        </p>
      </div>
    </div>
  );
}
