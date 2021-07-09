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
          className="SMPicTwit"
          exact
        >
          {" "}
          <img src={twitter} alt="twitter" />
        </a>
        <img src={idPicture} className="IDPicture" alt="ID picture" />
        <a
          href="https://www.instagram.com/j_s.jpg/"
          className="SMPic"
          alt="Instagram"
          title="Instagram"
          target="_blank"
        >
          {" "}
          <img src={instagram} alt="instagram" />
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
          After spending some time working in art, I became very interested in
          all types of sciences. I started reading stacks of books about
          evolutionary biology, theoretical physics, genetics, and cell biology.
          My obsession ended with a Bachelors of Biomedical Science, shifting my
          career from art to working in cancer research in Denver.
        </p>
        <p>
          As a high-risk individual, 2020 hit me especially hard. It was a year
          of immense loss and I found myself returning to art after the pandemic
          had forced me into a deep isolation- first for myself, and then for
          other people. I started to remember what it felt like to create art
          for others, and a joy was found again. I knew whatever I went back to,
          finding a job that allowed me to express myself creativity was
          paramount.
        </p>
        <p>
          I was told that pursing software was a creative endeavor, but it
          quickly became apparent to me that code is literally a form of art,
          and that is exactly how I approach writing in my editor.{" "}
        </p>
        <p>
          Having both a background in science and art, writing code and making
          full-stack applications makes sense. I'm skilled at troubleshooting
          and working through problems both logically and creatively, and having
          also worked in education, I'm able to communicate my ideas and issues
          effectively.
        </p>
        <p>
          {" "}
          I am fascinated by the intersection of technology, art, and nature,
          and am inspired by generative art, machine learning, and any other
          ways that technology can be used creatively. In my free time I enjoy
          playing with synthesizers, weightlifting, roller skating, and hanging
          out with my dog, Kilo. Please contact me if you want to talk about
          software development, creative code, or simulation theory ☺︎
        </p>
      </div>
    </div>
  );
}
