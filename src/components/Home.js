import React from "react";
import HomeCSS from "../cssModules/Home.module.css";

export default function Home() {
  return (
    <div className={HomeCSS.HomePage}>
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
        <h2>// Full Stack Software Engineer</h2>
      </div>
    </div>
  );
}
