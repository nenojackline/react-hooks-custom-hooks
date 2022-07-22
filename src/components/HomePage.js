import React, { useEffect, useState } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useQuery from "../hooks/useQuery";

function HomePage() {
  const { posts, isLoaded } = useQuery();
  
  // set the document title
  useDocumentTitle("Underreacted | Home");

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
