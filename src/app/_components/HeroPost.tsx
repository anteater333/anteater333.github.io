"use client";

import { Post } from "@/interfaces/post";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import DateFormatter from "./DateFormatter";
import { categoryConverter } from "@/lib/converter";

const HeroPostSection = styled.section`
  position: relative;
  width: 100vw;
  height: 388px;
  overflow: hidden;

  .hero-post-context-container {
    display: flex;
    position: relative;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 50;
    color: #ffffff;

    background-color: rgba(0, 0, 0, 75%);
    -webkit-transition: background-color 1s;
    transition: background-color 1s;
  }
  .hero-post-context-container:hover {
    background-color: rgba(0, 0, 0, 50%);
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;

    .hero-image {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .hero-arrow-button {
  }

  .hero-arrow-left {
    text-align: left;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .hero-arrow-right {
    text-align: right;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .hero-arrow-button {
    flex: 0.1;
    height: 100%;
    font-size: 4rem;
    height: 100%;

    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }
  .hero-arrow-button:hover {
    opacity: 0.75;
  }
  .hero-arrow-button:active {
    opacity: 0.5;
  }

  .hero-post-center {
    display: flex;
    flex-direction: column;

    justify-content: center;

    height: 100%;
    max-width: 52rem;

    padding: 0 10rem;
    flex: 1 1 0;

    cursor: pointer;
  }

  .hero-post-context {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 5.75rem;
    height: 12rem;

    * {
      margin: 0;
      margin-bottom: 0.25rem;
    }
  }
`;

const HeroPost = function ({ posts }: { posts: Post[] }) {
  const [cursor, setCursor] = useState<number>(0);
  const router = useRouter();

  return (
    <HeroPostSection>
      <div className="hero-overlay">
        <img
          className="hero-image"
          src={
            posts[cursor].coverImage ??
            "/assets/pictures/placeholder-main-image.png"
          }
        />
      </div>
      <div className="hero-post-context-container">
        <button
          className="hero-arrow-button hero-arrow-left"
          onClick={() =>
            setCursor((prev) => (prev <= 0 ? posts.length - 1 : prev - 1))
          }
        >
          {"<"}
        </button>
        <div
          className="hero-post-center"
          onClick={(e) =>
            router.push(
              `/${posts[cursor].category}/${posts[cursor].id}/${posts[cursor].slug}`
            )
          }
        >
          <div className="hero-post-context">
            <p>
              <DateFormatter dateString={posts[cursor].date} /> |{" "}
              {categoryConverter(posts[cursor].category)}
            </p>
            <h1>{posts[cursor].title}</h1>
            <p>{posts[cursor].subtitle}</p>
          </div>
        </div>
        <button
          className="hero-arrow-button hero-arrow-right"
          onClick={() =>
            setCursor((prev) => (prev >= posts.length - 1 ? 0 : prev + 1))
          }
        >
          {">"}
        </button>
      </div>
    </HeroPostSection>
  );
};

export default HeroPost;
