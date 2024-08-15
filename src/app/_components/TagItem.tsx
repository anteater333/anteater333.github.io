"use client";

import Link from "next/link";
import styled from "styled-components";

const TagSpan = styled.span<{ isDark?: boolean }>`
  a {
    cursor: pointer;
    user-select: none;

    color: ${({ isDark }) => (isDark ? "#ffffff" : "#222222")};

    border: 2px solid #222222;
    border-radius: 0.5rem;
    padding: 0.1rem 0.5rem;

    -webkit-transition: background-color 0.25s, color 0.25s;
    transition: background-color 0.25s, color 0.25s;

    &:hover {
      background-color: ${({ isDark }) => (isDark ? "#ffffff" : "#222222")};
      color: ${({ isDark }) => (isDark ? "#222222" : "#ffffff")};
    }

    &.selected {
      background-color: ${({ isDark }) => (isDark ? "#ffffff" : "#222222")};
      color: ${({ isDark }) => (isDark ? "#222222" : "#ffffff")};
    }
  }
`;

type TagItemProp = {
  tag: string;
  isDark?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

const TagItem = function ({ tag, isDark, selected, onClick }: TagItemProp) {
  return (
    <TagSpan isDark={isDark}>
      <Link
        className={`tag-item ${selected ? "selected" : ""}`}
        href={onClick ? "" : `/?tags=${tag}`}
      >
        {tag}
      </Link>
    </TagSpan>
  );
};

export default TagItem;
