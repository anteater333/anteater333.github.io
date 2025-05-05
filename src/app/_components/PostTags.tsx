"use client";

import styled from "styled-components";
import TagItem from "./TagItem";
import { useDarkMode } from "@/lib/store";

const PostTagsDiv = styled.div`
  overflow-x: scroll;

  border-bottom: 2px solid var(--text-color-sub);

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
  const { isDarkMode } = useDarkMode();

  return (
    <PostTagsDiv>
      <img
        src={`/assets/pictures/post/post-tag-${
          isDarkMode ? "white" : "black"
        }.svg`}
        alt="tag"
      />
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

