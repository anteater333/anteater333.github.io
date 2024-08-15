"use client";

import styled from "styled-components";
import TagItem from "./TagItem";
import { useEffect, useState } from "react";

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

  /** 컴포넌트 최초 로드 시 URL에 직접 입력한 Query Param을 필터 UI에 적용 */
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tags = urlParams.get("tags");

    if (!tags) return;

    const manuallySelected = new Set(tags.split(","));
    setSelectedTags(manuallySelected);
  }, []);

  /** Query Param을 사용해 Filtering을 구현하기 위한 PJAX 영역 */
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tags = urlParams.get("tags");

    // 선택된 태그 없음 && 기존 Query Param도 없음 ==> 초기 상태
    // 불필요한 PJAX 방지
    if (selectedTags.size === 0 && !tags) {
      return;
    }

    // selectedTags의 변화를 Query Param에 적용
    window.history.pushState(
      {},
      "",
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
