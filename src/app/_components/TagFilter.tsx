"use client";

import styled from "styled-components";
import TagItem from "./TagItem";

const TagFilterDiv = styled.div`
  margin-top: 3rem;
  padding-bottom: 3rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem 1rem;

  width: 75%;

  border-bottom: 2px solid #dcdcdc;

  .tag-item {
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 2rem;
  }
`;

const TagFilter = function ({
  tags,
  selectedList,
}: {
  tags: string[];
  selectedList: string[];
}) {
  return (
    <TagFilterDiv>
      {tags.map((tag, idx) => {
        return (
          <TagItem
            key={`tag-filter-item-${idx}`}
            tag={tag}
            onClick={() => {}}
          />
        );
      })}
    </TagFilterDiv>
  );
};

export default TagFilter;
