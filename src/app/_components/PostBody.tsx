"use client";

import {
  rainbowColor,
  scOnHalf,
  scOnPalm,
  textBackgroundTransition,
} from "@/styles/values";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PostToCNav = styled.nav`
  @media ${scOnHalf} {
    min-width: 12rem;
    font-size: 0.8rem;
  }
  @media ${scOnPalm} {
    display: none;
  }

  flex: 0 1 20rem;
  min-width: 16rem;

  margin-left: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;

  .toc-core {
    position: sticky;
    top: 1rem;

    border-left: 4px solid #222222;

    padding-left: 0.75rem;
    padding-right: 1rem;

    li {
      display: flex;

      margin-bottom: 0.5rem;
      > p.toc-indent {
        margin: 0 0 0 1rem;
      }
    }
  }
`;

type ToCItem = {
  text: string;
  id: string;
  level: number;
};

function PostToC({ headings }: { headings: ToCItem[] }) {
  return (
    <PostToCNav className="toc-rail">
      <ul className="toc-core">
        {headings.map((heading, idx) => {
          return (
            <li key={`post-toc-item-${idx}`}>
              {Array.from(Array(heading.level), (e, jdx) => {
                return (
                  <p
                    className="toc-indent"
                    key={`toc-indent-${idx}-${jdx}`}
                  ></p>
                );
              })}
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          );
        })}
      </ul>
    </PostToCNav>
  );
}

const PostBodySection = styled.section`
  display: flex;

  max-width: 100%;
  width: 100%;

  .post-content {
    @media ${scOnHalf} {
    }
    @media ${scOnPalm} {
      max-width: 100%;
    }
    word-break: break-all;
    flex: 0 1 auto;
    max-width: 75%;
    min-width: 0;

    color: #222222;
    font-weight: normal;

    h2 {
      @media ${scOnHalf} {
        font-size: 2rem;
      }
      @media ${scOnPalm} {
      }

      font-size: 2.4rem;
      word-break: keep-all;
    }

    img {
      width: 100%;
      object-fit: contain;
    }

    a {
      background: ${rainbowColor};
      background-size: 400% 100%;
      -webkit-background-clip: text;
      background-clip: text;

      -webkit-transition: color 0.2s;
      transition: color 0.2s;

      color: #6666ff;

      &:hover {
        animation: ${textBackgroundTransition} 6s ease-in-out infinite;
        color: transparent;
      }
      &:active {
        animation: none;
        color: lighten(#222222, 50%);
      }
    }
  }
`;

export function PostBody({ content }: { content: string }) {
  const [headings, setHeadings] = useState<ToCItem[]>([]);

  /** content로부터 headings 추출 (for ToC) */
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    const headingEls = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const buffer: ToCItem[] = [];
    headingEls.forEach((el) => {
      buffer.push({
        text: el.textContent ?? "",
        id: el.id,
        level: +el.tagName.split("H")[1] - 2,
      });
    });

    setHeadings(buffer);
  }, []);

  return (
    <PostBodySection>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <PostToC headings={headings} />
    </PostBodySection>
  );
}

export default PostBody;
