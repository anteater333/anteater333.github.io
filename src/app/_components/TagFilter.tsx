"use client";

import styled from "styled-components";
import TagItem from "./TagItem";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

  /** Query Param을 사용해 Filtering을 구현하기 위한 PJAX 영역 */
  useEffect(() => {
    const tags = searchParams.get("tags");
    // 선택된 태그 없음 && 기존 Query Param도 없음 ==> 초기 상태
    // 불필요한 PJAX 방지
    if (selectedTags.size === 0 && !tags) {
      return;
    }

    // selectedTags의 변화를 Query Param에 적용
    router.push(
      selectedTags.size === 0
        ? "/"
        : `/?tags=${Array.from(selectedTags).join(",")}`
    );
  }, [selectedTags]);

  return (
    <TagFilterDiv>
      {tags.map((tag, idx) => {
        return (
          <TagItem
            key={`tag-filter-item-${idx}`}
            tag={tag}
            onClick={(tag) => {
              const newSet = new Set(selectedTags);
              if (newSet.has(tag)) newSet.delete(tag);
              else newSet.add(tag);
              setSelectedTags(newSet);
            }}
            selected={selectedTags.has(tag)}
            isFilter={true}
          />
        );
      })}
    </TagFilterDiv>
  );
};

export default TagFilter;
