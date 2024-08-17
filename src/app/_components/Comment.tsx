"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";

const CommentDiv = styled.div`
  margin-top: 1rem;

  .utterances {
    max-width: 100%;
  }
`;

const Comment = function () {
  const script = document.createElement("script");

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const config = {
      src: "https://utteranc.es/client.js",
      repo: "anteater333/anteater333.github.io",
      "issue-term": "url",
      theme: "github-light",
      crossorigin: "anonymous",
      async: true,
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value as string);
    });

    ref.current?.append(script);
  }, []);

  return <CommentDiv ref={ref}></CommentDiv>;
};

export default Comment;
