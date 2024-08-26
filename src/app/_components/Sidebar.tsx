"use client";

import { Category, Post } from "@/interfaces/post";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DateFormatter from "./DateFormatter";
import { useRouter } from "next/navigation";
import { defaultBoxShadow, scOnHalf, scOnPalm } from "@/styles/values";
import { useDarkMode } from "@/lib/store";

const BlogSidebar = styled.nav<{
  $isMenuVisible: boolean;
}>`
  @media ${scOnHalf} {
    display: flex;

    overflow: scroll;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    -webkit-transition: opacity 0.33s;
    transition: opacity 0.33s;

    z-index: ${({ $isMenuVisible }) => ($isMenuVisible ? "150" : "-50")};
    opacity: ${({ $isMenuVisible }) => ($isMenuVisible ? "1" : "0")};
    width: 100vw;
    max-width: unset;
    min-width: unset;

    background-color: color-mix(in srgb, var(--bg-color-main) 95%, transparent);
  }

  @media ${scOnPalm} {
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 20rem;
  min-width: 20rem;
  max-width: 20rem;

  border-right: 1px solid #b0b0b0;

  color: var(--text-color-main);

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
    @media ${scOnHalf} {
      overflow: visible;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;

    cursor: pointer;

    img {
      ${defaultBoxShadow};
    }

    .profile-bg {
      @media ${scOnHalf} {
        display: none;
      }

      width: 100%;
    }

    .profile-pic {
      @media ${scOnHalf} {
        display: none;
      }

      width: 7.5rem;
      border-radius: 100%;

      margin-top: -4rem;
      margin-bottom: 1rem;
    }

    h1 {
      @media ${scOnHalf} {
        margin-top: 1rem;
      }

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
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;

    .daily-comment {
      opacity: 0.5;
      margin-top: 0.5rem;
    }
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

  .close-button {
    @media ${scOnHalf} {
      display: unset;
    }

    display: none;
    position: absolute;
    right: 0;

    top: 1.25rem;
    right: 1.25rem;

    img {
      width: 2.25rem;
    }
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

  const [today, setToday] = useState<Date>(new Date());

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const toggleMenuVisibility = () => {
      setIsMenuVisible((prev) => !prev);
    };

    document.addEventListener("menu", toggleMenuVisibility);

    return () => document.removeEventListener("menu", toggleMenuVisibility);
  }, []);

  return (
    <BlogSidebar $isMenuVisible={isMenuVisible}>
      <button className="close-button" onClick={() => setIsMenuVisible(false)}>
        <img src="/assets/pictures/sidebar/close.svg" />
      </button>
      <div
        className="sidebar-profile-container"
        onClick={() => router.push("/")}
      >
        <img
          className="profile-bg"
          src={`/assets/pictures/sidebar/profile-bg-${today.getDay()}.png`}
        />
        <img
          className="profile-pic"
          src={`/assets/pictures/sidebar/profile.png`}
        />
        <h1>Anteater</h1>
        <h2>이지훈</h2>
      </div>
      <div className="sidebar-hit-counter-container">
        <a
          className="site-hits"
          href="https://hits.seeyoufarm.com"
          target="_blank"
        >
          <img
            src={
              process.env.NEXT_PUBLIC_MODE === "development"
                ? `/assets/pictures/sidebar/placeholder-hit-counter.svg`
                : "https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fanteater333.github.io%2F&count_bg=%236B6B6B&title_bg=%23000000&icon=&icon_color=%23E7E7E7&title=Hi&edge_flat=false"
            }
          />
        </a>
        <span className="daily-comment">
          {[0, 6].includes(today.getDay()) ? (
            "즐거운 주말 보내세요!"
          ) : (
            <DateFormatter dateString={today.toISOString()} />
          )}
        </span>
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
                  <p>({categoriesCount[cat as Category]})</p>
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
