"use client";

import { Post } from "@/interfaces/post";
import styled from "styled-components";
import DateFormatter from "./DateFormatter";
import Link from "next/link";
import { categoryConverter } from "@/lib/converter";
import { defaultBoxShadow, scOnHalf, scOnPalm } from "@/styles/values";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const PostListUl = styled.ul`
  margin-top: 3rem;
  margin-bottom: 0;
  width: 100%;

  .message-container {
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid var(--border-color);
    margin-bottom: 2rem;

    .message-for-exhausted-tag-condition {
      font-family: Galmuri7, sans-serif;
      font-size: 2.5rem;
      margin-top: 3rem;
      margin-bottom: 6rem;
      width: 100%;
      text-align: center;
      opacity: 0.8;
    }
  }
`;

const PostListItemArticle = styled.article`
  .postlist-item {
    @media ${scOnHalf} {
    }

    @media ${scOnPalm} {
      margin: 1rem 1rem;
    }

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
          margin-right: 0.5rem;
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
          flex-wrap: wrap;
          * {
            flex-shrink: 0;
          }
        }

        h1 {
          @media ${scOnHalf} {
          }

          @media ${scOnPalm} {
            word-break: break-all;
            font-size: 1.25rem;
          }

          margin: 0;
          word-break: keep-all;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .post-item-subtitle {
          @media ${scOnHalf} {
          }

          @media ${scOnPalm} {
            word-break: break-all;
            font-size: 0.75rem;
          }

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
          width: 5rem;
          height: 5rem;
          border-radius: 1rem;
          align-self: flex-end;
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
    @media ${scOnHalf} {
    }

    @media ${scOnPalm} {
      margin-bottom: 1rem;
    }

    width: 100%;
    border-top: 1px solid var(--border-color);

    margin-bottom: 2rem;
  }
`;

const PostList = function ({ posts }: { posts: Post[] }) {
  const [tagsString, setTagsString] = useState<string | null>(null);
  const [postsByTags, setPostsByTags] = useState<Post[]>(posts);
  const searchParams = useSearchParams();

  useEffect(() => {
    setTagsString(searchParams.get("tags"));
  }, [searchParams]);

  useEffect(() => {
    if (!tagsString) {
      setPostsByTags(posts);
      return;
    }

    const selectedTagsList = tagsString.split(",");
    setPostsByTags(() => {
      return posts.filter((post) =>
        selectedTagsList.every((tag) => post.tags.includes(tag))
      );
    });
  }, [tagsString]);

  return (
    <PostListUl>
      {postsByTags.length === 0 ? (
        <li className="message-container">
          <label className="message-for-exhausted-tag-condition">
            그런 태그를 가진 게시글은 없어요...🥺
          </label>
        </li>
      ) : (
        postsByTags.map((post, idx) => (
          <PostListItem key={`postlist-${post.slug}-${idx}`} post={post} />
        ))
      )}
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
              post.ogImage?.url ?? "/assets/pictures/placeholder-main-image.png"
            }
          />
        </div>
      </div>
      <div className="border" />
    </PostListItemArticle>
  );
};

export default PostList;
