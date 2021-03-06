import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }
    `
      )
      .then((data) => setPost(data))
      .catch(console.error);
  });

  return (
    <main>
      <section className="ArtSection">
        <div className="ArtText">
          <h1>Digital and Generative Design</h1>
          <div className="ArtTypewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("// click for detail and description ")
                  .start();
              }}
            />
          </div>
        </div>
        <div className="ArtDiv">
          {postData &&
            postData.map((post, index) => (
              <article className="BlogArticle">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span className="BlogSpan">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="BlogImage"
                    />
                    <span className="h3Span">
                      <h3 className="BlogPostTitle">{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
