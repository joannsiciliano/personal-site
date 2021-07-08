import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import HomeBackground from "./HomeBackground.js";
import Typewriter from "typewriter-effect";
export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="ProjectMain">
      <HomeBackground />
      <section className="ProjectSec-1">
        <h1>Recent Projects </h1>

        <div className="ProjectTypewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("// click the links for demos and repos")
                .start();
            }}
          />
        </div>
        <section className="ProjectSec-2">
          {projectData &&
            projectData.map((project, index) => (
              <article className="ProjectArticle-1">
                <h3 className="ProjectH3">
                  <a href={project.link} alt={project.title} target="_blank">
                    {project.title}
                  </a>
                </h3>
                <div className="ProjectDiv">
                  <p className="ProjectP">{project.description}</p>
                  <div className="LinkDiv">
                    <a href={project.link} target="_blank" className="DemoLink">
                      View Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
