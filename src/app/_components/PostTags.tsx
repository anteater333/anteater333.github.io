"use client";

import styled from "styled-components";
import TagItem from "./TagItem";

const PostTagsDiv = styled.div`
  border-bottom: 2px solid #dcdcdc;

  padding: 1rem 0;

  display: flex;

  align-items: center;

  img {
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  .tag-list-container {
    display: flex;
    gap: 0.5rem;
  }
`;

const PostTags = function ({ tags }: { tags: string[] }) {
  return (
    <PostTagsDiv>
      <img src="/assets/pictures/post/post-tag.svg" alt="tag" />
      <div className="tag-list-container">
        {tags.map((tag, idx) => {
          return (
            <TagItem
              key={`post-bottom-tag-item-${idx}`}
              tag={tag}
              isDark={false}
            />
          );
        })}
      </div>
    </PostTagsDiv>
  );
};

export default PostTags;
