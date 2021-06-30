import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
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
      <section className="ProjectSec-1">
        <h1 className="ProjectH1">Recent Projects</h1>
        <h2 className="ProjectH2">
          Here's a list of completed projects I've done!
        </h2>
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
                  <span>
                    <strong>Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong>Company:</strong>: {project.place}
                  </span>
                  <span>
                    <strong>Type:</strong> {project.projectType}
                  </span>
                  <p className="ProjectP">{project.description}</p>
                  <a href={project.link} target="_blank">
                    View The Project{" "}
                    <span role="img" aria-label="right pointer">
                      Here
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
