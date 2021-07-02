import React from "react";
import HomeCSS from "../cssModules/Home.module.css";

export default function Home() {
  return (
    <div className={HomeCSS.HomePage}>
      <section className={HomeCSS.LinkSection}>
        <a href="https://www.linkedin.com/in/joannsiciliano/">LinkedIn</a>
        <a href="https://github.com/joannsiciliano">Github</a>
        <a href="https://www.instagram.com/j_s.jpg/">Instagram</a>
        <a href="https://www.instagram.com/j_s.jpg/">Twitter</a>
        <a href="mailto:joannsiciliano.dev@gmail.com">Email</a>
      </section>
      <div className={HomeCSS.NameDiv}>
        <h1>Hi! I'm Jo.</h1>
      </div>
    </div>
  );
}
