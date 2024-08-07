"use client";

import { rainbowColor, textBackgroundTransition } from "@/styles/values";
import styled from "styled-components";

const PostBodySection = styled.section`
  width: 100%;
  color: #222222;
  font-weight: normal;

  h2 {
    @media screen and (max-width: $on-half) {
      font-size: 2rem;
    }
    @media screen and (max-width: $on-palm) {
    }

    font-size: 2.4rem;
    word-break: keep-all;
  }

  a {
    background-size: 400% 100%;
    background: ${rainbowColor};
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
`;

const PostToCSection = styled.section``;

export function PostBody({ content }: { content: string }) {
  return (
    <PostBodySection>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <PostToC />
    </PostBodySection>
  );
}

function PostToC({}) {
  return <PostToCSection></PostToCSection>;
}

export default PostBody;
