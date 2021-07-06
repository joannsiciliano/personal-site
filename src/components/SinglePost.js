import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name":author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);
  if (!singlePost) return <div> Loading...</div>;
  return (
    <main className="MainSinglePost">
      <article className="ArticleSinglePost">
        <header className="HeaderSinglePost">
          <div className="Div1SinglePost">
            <div className="Div1SinglePost">
              <h1 className="H1SinglePost"> {singlePost.title}</h1>
              <div className="Div3SinglePost"></div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="SinglePostImage2"
            style={{ height: "950px" }}
          />
        </header>
        <div className="SinglePostBlockContent">
          {" "}
          <BlockContent
            blocks={singlePost.body}
            projectId="9d1fo0b1"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
