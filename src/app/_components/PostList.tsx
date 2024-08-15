"use client";

import { Post } from "@/interfaces/post";
import styled from "styled-components";
import DateFormatter from "./DateFormatter";
import Link from "next/link";
import { categoryConverter } from "@/lib/converter";
import { defaultBoxShadow, scOnHalf, scOnPalm } from "@/styles/values";

const PostListUl = styled.ul`
  margin-top: 3rem;
  margin-bottom: 0;
  width: 100%;
`;

const PostListItemArticle = styled.article`
  .postlist-item {
    position: relative;

    margin: 2rem 2.5rem;

    a.overlay-anchor {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }

    .postlist-item-content {
      position: relative;
      pointer-events: none;
      z-index: 1;

      display: flex;
      justify-content: space-between;

      .postlist-item-text {
        @media ${scOnHalf} {
          margin-right: 4rem;
        }

        @media ${scOnPalm} {
          margin-right: 3rem;
        }

        min-width: 0;
        margin-right: 6rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .postlist-item-info {
          display: flex;
          gap: 0.3rem;
          margin: 0;
          * {
            flex-shrink: 0;
          }
        }

        h1 {
          margin: 0;
          word-break: keep-all;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .post-item-subtitle {
          margin: 0;
        }

        a.category-anchor {
          pointer-events: all;
        }
      }

      .postlist-item-img {
        @media ${scOnHalf} {
          min-width: 0;
          min-height: 0;
          width: 12.5rem;
          height: 12.5rem;
        }

        @media ${scOnPalm} {
          width: 10rem;
          height: 10rem;
        }

        max-width: 20rem;
        max-height: 20rem;
        min-width: 12.5rem;
        min-height: 12.5rem;
        width: 20vw;
        height: 20vw;

        align-self: center;
        object-fit: cover;
        border-radius: 2rem;
        ${defaultBoxShadow}
      }
    }

    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }

  .postlist-item:hover {
    opacity: 0.75;
  }

  .postlist-item:active {
    opacity: 0.5;
  }

  .border {
    width: 100%;
    border-top: 1px solid #b0b0b0;

    margin-bottom: 2rem;
  }
`;

const PostList = function ({ posts }: { posts: Post[] }) {
  return (
    <PostListUl>
      {posts.map((post, idx) => (
        <PostListItem key={`postlist-${post.slug}-${idx}`} post={post} />
      ))}
    </PostListUl>
  );
};

const PostListItem = function ({ post }: { post: Post }) {
  return (
    <PostListItemArticle>
      <div className="postlist-item">
        <Link
          className="overlay-anchor"
          href={`/${post.category}/${post.id}/${post.slug}`}
        />
        <div className="postlist-item-content">
          <div className="postlist-item-text">
            <p className="postlist-item-info">
              <DateFormatter dateString={post.date} /> |
              <a
                className="category-anchor"
                href={`/category/${post.category}`}
              >
                {categoryConverter(post.category)}
              </a>
            </p>
            <h1>{post.title}</h1>
            <p className="post-item-subtitle">{post.subtitle}</p>
          </div>
          <img
            className="postlist-item-img"
            src={
              post.coverImage ?? "/assets/pictures/placeholder-main-image.png"
            }
          />
        </div>
      </div>
      <div className="border" />
    </PostListItemArticle>
  );
};

export default PostList;
