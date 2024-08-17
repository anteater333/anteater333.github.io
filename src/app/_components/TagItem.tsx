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

    color: ${({ $isDark }) => ($isDark ? "#ffffff" : "#222222")};

    border: 2px solid ${({ $isDark }) => ($isDark ? "#ffffff" : "#222222")};
    border-radius: 0.5rem;
    padding: 0.1rem 0.5rem;

    line-height: 1;

    -webkit-transition: background-color 0.25s, color 0.25s, opacity 0.25s;
    transition: background-color 0.25s, color 0.25s, opacity 0.25s;

    &:hover {
      background-color: ${({ $isDark }) => ($isDark ? "#ffffff" : "#222222")};
      color: ${({ $isDark }) => ($isDark ? "#222222" : "#ffffff")};

      opacity: ${({ $isFilter }) => ($isFilter ? ".3" : "1")};
    }

    &.selected {
      background-color: ${({ $isDark }) => ($isDark ? "#ffffff" : "#222222")};
      color: ${({ $isDark }) => ($isDark ? "#222222" : "#ffffff")};

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
