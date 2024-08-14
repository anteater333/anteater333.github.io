"use client";

import styled from "styled-components";

const PostTagsDiv = styled.div`
  border-bottom: 2px solid #222222;
`;

const PostTags = function ({}: { tags: string[] }) {
  return <PostTagsDiv>tag section</PostTagsDiv>;
};

export default PostTags;
