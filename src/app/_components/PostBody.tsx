"use client";

import styled from "styled-components";

const PostBodySection = styled.section`
  width: 100%;
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
