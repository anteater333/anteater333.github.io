import { scOnHalf, scOnPalm } from "@/styles/values";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

export type ToCItem = {
  text: string;
  id: string;
  level: number;
};

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

export function PostToC({ headings }: { headings: ToCItem[] }) {
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
                    <Link href={`#${heading.id}`}>{heading.text}</Link>
                  </li>
                );
              })
            : undefined}
        </ul>
      </div>
    </PostToCNav>
  );
}

export default PostToC;
