"use client";

import styled from "styled-components";
import TagItem from "./TagItem";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { scOnHalf, scOnPalm } from "@/styles/values";

const TagFilterDiv = styled.div`
  @media ${scOnHalf} {
  }
  @media ${scOnPalm} {
    gap: 1.25rem 0.5rem;
    width: 90%;
  }

  margin-top: 2.5rem;
  padding-bottom: 2.5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 1rem;

  width: 75%;

  border-bottom: 2px solid var(--border-color);

  .tag-item {
    @media ${scOnHalf} {
    }
    @media ${scOnPalm} {
      font-size: 1rem;
      padding: 0.25rem 0.5rem;
    }
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  }
`;

const TagFilter = function ({ tags }: { tags: string[] }) {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const searchParams = useSearchParams();
  const router = useRouter();

  /** URL의 Query Param 변화를 필터 UI에 적용 */
  useEffect(() => {
    const tags = searchParams.get("tags");

    if (!tags) {
      setSelectedTags(new Set());
      return;
    }

    const manuallySelected = new Set(tags.split(","));
    setSelectedTags(manuallySelected);
  }, [searchParams]);

  /** Query Param을 사용해 Filtering을 구현하기 위한 PJAX */
  const handleOnClickTagItem = useCallback(
    (tag: string) => {
      const newSet = new Set(selectedTags);
      if (newSet.has(tag)) newSet.delete(tag);
      else newSet.add(tag);
      setSelectedTags(newSet);
      router.push(
        newSet.size === 0 ? "/" : `/?tags=${Array.from(newSet).join(",")}`,
        { scroll: false }
      );
    },
    [selectedTags]
  );

  return (
    <TagFilterDiv>
      {tags.map((tag, idx) => {
        return (
          <TagItem
            key={`tag-filter-item-${idx}`}
            tag={tag}
            onClick={handleOnClickTagItem}
            selected={selectedTags.has(tag)}
            isFilter={true}
          />
        );
      })}
    </TagFilterDiv>
  );
};

export default TagFilter;
