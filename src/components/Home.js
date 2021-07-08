import React from "react";
import HomeCSS from "../cssModules/Home.module.css";
import HomeBackground from "./HomeBackground";
import HomeScroll from "./HomeScroll";

export default function Home() {
  return (
    <div className={HomeCSS.HomePage}>
      <HomeBackground />
      <section className={HomeCSS.LinkSection}>
        <a href="https://www.linkedin.com/in/joannsiciliano/" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/joannsiciliano" target="_blank">
          Github
        </a>
        <a href="https://joannsiciliano.medium.com/" target="_blank">
          Blog
        </a>

        <a href="mailto:joannsiciliano.dev@gmail.com">Email</a>
      </section>
      <div className={HomeCSS.NameDiv}>
        <h1>Hi! I'm Jo.</h1>
        <div className={HomeCSS.ScrollDiv}>
          <span className={HomeCSS.HomeScrollSpan}>
            <HomeScroll />
          </span>
        </div>
      </div>
    </div>
  );
}
