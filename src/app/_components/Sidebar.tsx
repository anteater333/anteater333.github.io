"use client";

import { Category, Post } from "@/interfaces/post";
import { defaultBoxShadow } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DateFormatter from "./DateFormatter";
import { useRouter } from "next/navigation";

const BlogSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;
  min-width: 20rem;
  max-width: 20rem;

  border-right: 1px solid #b0b0b0;

  a {
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.75;
  }

  a:active {
    opacity: 0.5;
  }

  > div {
    width: 100%;
  }

  .border {
    width: 75%;
    border-top: 1px solid #b0b0b0;
  }

  .sidebar-profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;

    cursor: default;

    img {
      ${defaultBoxShadow};
      cursor: pointer;
    }

    .profile-bg {
      width: 100%;
    }

    .profile-pic {
      width: 7.5rem;
      border-radius: 100%;

      margin-top: -4rem;
      margin-bottom: 1rem;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
    }

    h2 {
      margin: 0;
      font-weight: normal;
    }

    margin-bottom: 1rem;
  }

  .sidebar-hit-counter-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .sidebar-links-container {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 1.5rem 0;
    gap: 2.75rem;

    .link-button {
      width: 1.75rem;

      > img {
        width: 100%;
      }
    }
  }

  .sidebar-categories-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 0;
    }
    ul {
      width: 75%;
      li > a {
        display: flex;
        justify-content: space-between;
        font-size: 1.25rem;

        p {
          margin: 0.75rem 0;
        }
      }
    }
  }

  .sidebar-recent-container {
    width: 75%;

    h3 {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .recent-post {
      width: 100%;
      display: flex;
      justify-content: space-between;

      margin-bottom: 1.25rem;

      .recent-post-text-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: normal;

        > p {
          margin: 0;
          padding-right: 1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }

      img {
        width: 6rem;
        height: 6rem;
        object-fit: cover;

        border-radius: 1.5rem;
        ${defaultBoxShadow};
      }
    }
  }

  .sidebar-footer-container {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 0.75rem;

    text-align: center;
  }
`;

export default function Sidebar({
  categoriesCount,
  recentPosts,
}: {
  categoriesCount: Record<Category, number>;
  recentPosts: Post[];
}) {
  const router = useRouter();

  const [today, setToday] = useState<number>(0);

  useEffect(() => {
    setToday(new Date().getDay());
  }, []);

  return (
    <BlogSidebar>
      <div className="sidebar-profile-container">
        <img
          className="profile-bg"
          onClick={() => router.push("/")}
          src={`/assets/pictures/sidebar/profile-bg-${today}.png`}
        />
        <img
          className="profile-pic"
          onClick={() => router.push("/")}
          src={`/assets/pictures/sidebar/profile.png`}
        />
        <h1>Anteater</h1>
        <h2>이지훈</h2>
      </div>
      <div className="sidebar-hit-counter-container">
        {process.env.NEXT_PUBLIC_MODE === "development" ? (
          <a
            className="site-hits"
            href="https://hits.seeyoufarm.com"
            target="_blank"
          >
            <img src={`/assets/pictures/sidebar/placeholder-hit-counter.svg`} />
          </a>
        ) : (
          <a
            className="site-hits"
            href="https://hits.seeyoufarm.com"
            target="_blank"
          >
            <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fanteater333.github.io%2F&count_bg=%236B6B6B&title_bg=%23000000&icon=&icon_color=%23E7E7E7&title=Hi&edge_flat=false" />
          </a>
        )}
      </div>
      <div className="border" />
      <div className="sidebar-links-container">
        <a
          className="link-button"
          href="https://past-silver-b67.notion.site/Lee-Jihoon-Anteater-42a1ebc80b2e44688f0dd99598f019de"
          target="_blank"
        >
          <img src="/assets/pictures/sidebar/link-notion-black.svg" />
        </a>
        <a
          className="link-button"
          href="https://blog.anteater-lab.link/portfolio/"
          target="_blank"
        >
          <img src="/assets/pictures/sidebar/link-person-black.svg" />
        </a>
        <a
          className="link-button"
          href="https://github.com/anteater333"
          target="_blank"
        >
          <img src="/assets/pictures/sidebar/link-gh-black.svg" />
        </a>
      </div>
      <div className="border" />
      <div className="sidebar-categories-container">
        <h2>Categories</h2>
        <ul className="categories-list">
          {Object.keys(categoriesCount).map((cat, idx) => {
            return (
              <li key={`category-${cat}-${idx}`}>
                <Link href={`/category/${cat}`}>
                  <p>{`${cat[0].toLocaleUpperCase()}${cat.substring(1)}`}</p>
                  <p>({categoriesCount["meta"]})</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="border" />
      <div className="sidebar-recent-container">
        <h3>최근 글</h3>
        {recentPosts.map((post, idx) => {
          return (
            <Link
              key={`recent-${idx}`}
              className="recent-post"
              href={`/${post.category}/${post.id}/${post.slug}`}
            >
              <div className="recent-post-text-area">
                <DateFormatter dateString={post.date} />
                <p>{post.title}</p>
              </div>
              <img
                className="recent-post-img"
                src={
                  post.coverImage ??
                  "/assets/pictures/placeholder-main-image.png"
                }
              />
            </Link>
          );
        })}
      </div>
      <div className="border" />
      <div className="sidebar-footer-container">
        <a href="/">Anteater's laboratory</a>
        <br />
        Copyright (c) 2024{" "}
        <a href="mailto:anteater1056@gmail.com">anteater333</a>
        <br />
        <a
          href="https://github.com/anteater333/anteater333.github.io"
          target="_blank"
        >
          디자인, 그리고 개발.
        </a>
      </div>
    </BlogSidebar>
  );
}
