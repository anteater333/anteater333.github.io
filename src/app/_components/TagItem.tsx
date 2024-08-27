"use client";

import { scOnHalf, scOnPalm } from "@/styles/values";
import Link from "next/link";
import styled from "styled-components";

const TagSpan = styled.span<{ $isDark?: boolean; $isFilter?: boolean }>`
  > * {
    @media ${scOnHalf} {
    }
    @media ${scOnPalm} {
      font-size: 0.9rem;
    }

    cursor: pointer;
    user-select: none;

    color: ${({ $isDark }) =>
      $isDark ? "var(--static-white)" : "var(--text-color-main)"};

    border: 2px solid
      ${({ $isDark }) =>
        $isDark ? "var(--static-white)" : "var(--text-color-main)"};
    border-radius: 0.5rem;
    padding: 0.1rem 0.5rem;

    line-height: 1;

    -webkit-transition: background-color 0.25s, color 0.25s, opacity 0.25s;
    transition: background-color 0.25s, color 0.25s, opacity 0.25s;

    white-space: pre;

    &:hover {
      background-color: ${({ $isDark }) =>
        $isDark ? "var(--static-white)" : "var(--text-color-main)"};
      color: ${({ $isDark }) =>
        $isDark ? "var(--static-black)" : "var(--bg-color-main)"};

      opacity: ${({ $isFilter }) => ($isFilter ? ".75" : "1")};
    }

    &.selected {
      background-color: ${({ $isDark }) =>
        $isDark ? "var(--static-white)" : "var(--text-color-main)"};
      color: ${({ $isDark }) =>
        $isDark ? "var(--static-black)" : "var(--bg-color-main)"};

      opacity: 1;
    }
  }
`;

type TagItemProp = {
  tag: string;
  isDark?: boolean;
  isFilter?: boolean;
  selected?: boolean;
  onClick?: (tag: string) => void;
};

const TagItem = function ({
  tag,
  isDark,
  isFilter,
  selected,
  onClick,
}: TagItemProp) {
  return (
    <TagSpan $isDark={isDark} $isFilter={isFilter}>
      {onClick ? (
        <a
          className={`tag-item ${selected ? "selected" : ""}`}
          onClick={() => onClick(tag)}
        >
          {tag}
        </a>
      ) : (
        <Link
          className={`tag-item ${selected ? "selected" : ""}`}
          href={`/?tags=${tag}`}
        >
          {tag}
        </Link>
      )}
    </TagSpan>
  );
};

export default TagItem;
