"use client";

import {
  defaultBoxShadow,
  rainbowColor,
  scOnHalf,
  scOnPalm,
  textBackgroundTransition,
} from "@/styles/values";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import AutoRefresh from "./dev/AutoRefresh";

const PostToCNav = styled.nav`
  @media ${scOnHalf} {
    min-width: 12rem;
    font-size: 0.8rem;
  }
  @media ${scOnPalm} {
    display: none;
  }

  max-width: 20rem;
  flex: 0 1 20rem;
  min-width: 16rem;

  margin-left: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;

  .toc-container {
    position: sticky;
    top: 7.5rem;

    max-height: 3rem;

    border-left: 4px solid var(--text-color-main);

    z-index: 50;

    .toc-core {
      background-color: var(--bg-color-main);
      border-radius: 1rem;

      padding-left: 0.75rem;
      padding-right: 1rem;

      li {
        transition: font-size 0.2s, margin 0.2s;

        display: flex;

        margin-bottom: 0.5rem;

        color: var(--text-color-sub);
        word-break: keep-all;

        &.current-heading {
          @media ${scOnHalf} {
            font-size: 0.95rem;
          }
          color: var(--text-color-main);
          font-weight: bold;
          font-size: 1.1rem;
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }

        &:hover {
          color: var(--text-color-main);
        }

        > p.toc-indent {
          margin: 0 0 0 1rem;
        }
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
  const [current, setCurrent] = useState(-1);

  /* 현재 heading 강조 기능 */
  useEffect(() => {
    if (headings.length === 0) return;

    const headingEls = document.querySelectorAll(
      headings.map((h) => `#${CSS.escape(h.id)}`).join(", ")
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrent(headings.findIndex((h) => h.id === entry.target.id));
        }
      },
      {
        root: null,
        rootMargin: "0% 0% -66% 0%",
        threshold: 1,
      }
    );

    headingEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings.length]);

  return (
    <PostToCNav className="toc-rail">
      <div className="toc-container">
        <ul className="toc-core">
          {headings.length > 0
            ? headings.map((heading, idx) => {
                return (
                  <li
                    key={`post-toc-item-${idx}`}
                    className={`${idx === current ? "current-heading" : ""}`}
                  >
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
              })
            : undefined}
        </ul>
      </div>
    </PostToCNav>
  );
}

const PostBodySection = styled.section`
  display: flex;

  max-width: 100%;
  width: 100%;

  /* ***** 게시글 영역 스타일링 ***** */
  .post-content {
    @media ${scOnHalf} {
    }
    @media ${scOnPalm} {
      max-width: 100%;
      width: 100%;
    }

    margin-top: 0.5rem;

    flex: 0 1 auto;
    max-width: 75%;
    width: 75%;
    min-width: 0;

    color: var(--text-color-main);
    font-weight: normal;

    word-break: break-all;
    line-height: calc(1ex / 0.32);

    /** Headings */
    h2 {
      @media ${scOnHalf} {
        font-size: 2rem;
      }
      @media ${scOnPalm} {
      }

      line-height: initial;
      font-size: 2.4rem;
      word-break: keep-all;
      margin-bottom: 0.5rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--border-color);
      &.center {
        border-bottom: none;
      }
    }

    h3 {
      line-height: initial;
      font-size: 1.88rem;
      margin-top: 1rem;
      margin-bottom: 0.75rem;
    }

    h4 {
      line-height: initial;
      font-size: 1.5rem;
      margin-top: 0rem;
      margin-bottom: 0.5rem;
    }

    h5,
    h6 {
      line-height: initial;
      margin: 0;
    }

    /** 이미지 */
    img {
      max-width: 100%;
      object-fit: contain;
      ${defaultBoxShadow}
    }

    /** 링크 */
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
        color: lighten(var(--text-color-main), 50%);
      }

      &.a-not-colored {
        background: none;
        color: var(--text-color-main);
        &:hover {
          animation: none;
          color: var(--text-color-main);
        }
      }
    }

    /** 리스트 */
    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
    }

    /** 구분선 */
    hr {
    }

    /** 인라인 코드 하이라이팅 */
    p > code,
    li > code,
    a > code {
      background-color: var(--bg-color-inline) !important;
      color: var(--text-color-inline) !important;
      padding: 0 0.25rem;
      margin: 0 0.1rem;
      border-radius: 0.33rem;
    }
    a:hover {
      code {
        text-decoration: underline;
      }
    }

    /** 코드 블록 하이라이팅 */
    figure {
      margin-left: 0;
      margin-right: 0;

      box-shadow: 0px 8px 6px -6px var(--shadow-color);
      position: relative;

      border-radius: 1rem;

      overflow: hidden;

      pre {
        margin: 0;
        overflow-x: scroll;

        border-radius: 1rem;
        scrollbar-width: auto;

        ::-webkit-scrollbar {
          display: unset;
          height: 0.5rem;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #22272e;
          border-radius: 1rem;
        }

        ::-webkit-scrollbar-track {
          background-color: #22272e;
          border-radius: 0 0 1rem 1rem;
        }

        > code {
          padding: 1rem;
        }
      }

      &.has-mouse > .code-copy-btn {
        opacity: 0.8;
      }
      .code-copy-btn {
        @media ${scOnPalm} {
          opacity: 1;
          width: 1.75rem;
          font-size: 1rem;
        }
        z-index: 75;

        opacity: 0;
        position: absolute;
        top: 0.4rem;
        right: 1rem;
        font-size: 1.2rem;
        width: 2.5rem;

        border-radius: 0.5rem;
        border: none;

        background-color: #797981;

        transition: opacity 0.2s;

        &:hover {
          opacity: 1;
        }
        &:active {
          opacity: 0.5;
        }
      }
    }

    blockquote {
      color: var(--text-color-sub);
      border-left: 4px solid var(--text-color-sub);
      padding-left: 0.5rem;
      font-size: 1.125rem;
      letter-spacing: -1px;
      font-style: italic;
      margin: 0;
    }

    // 커스텀 클래스 스타일링
    .center {
      text-align: center;
    }

    /* font size */
    .big {
      font-size: 1.5rem;
    }
    .middle-big {
      font-size: 1.25rem;
    }
    .middle-small {
      font-size: 0.75rem;
    }
    .small {
      font-size: 0.5rem;
    }

    /* image width */
    .w-half img {
      width: 50%;
    }

    .w-1-quarter img {
      width: 25%;
    }

    .w-3-quarter img {
      width: 75%;
    }

    .w-expand img {
      width: 125%;
    }

    .w-expand-xl img {
      width: 150%;
    }

    .w-code-half {
      width: 50%;
    }

    /* rounded edge */
    .rounded-edge img {
      border-radius: 5%;
    }

    .rounded-edge-8 img {
      border-radius: 8px;
    }

    .rounded-edge-16 img {
      border-radius: 16px;
    }

    .line-through {
      text-decoration: line-through;
    }

    /* 유튜브 임베드 코드 */
    .youtube-iframe {
      max-width: 40rem;
      min-width: 0;
      width: 100%;
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

  useEffect(() => {
    const toastHandler = () => {
      toast("코드를 복사했습니다.", {
        position: "bottom-center",
        autoClose: 1000,
      });
    };

    document.addEventListener("toast", toastHandler);
    return () => {
      document.removeEventListener("toast", toastHandler);
    };
  }, []);

  return (
    <AutoRefresh>
      <PostBodySection>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <PostToC headings={headings} />
      </PostBodySection>
    </AutoRefresh>
  );
}

export default PostBody;
