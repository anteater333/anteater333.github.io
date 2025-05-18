"use client";

import Link from "next/link";
import styled from "styled-components";

const NowPaginationDiv = styled.div`
  border-bottom: 2px solid var(--text-color-sub);

  height: 3rem;

  padding: 0.5rem 0.5rem;
  margin-bottom: 1rem;

  .now-pagination-container {
    display: flex;

    align-items: center;
  }

  .now-pagination-button-container {
    width: 2rem;
    margin-right: 1rem;

    a {
      font-size: 2rem;
      font-weight: bold;

      &.disabled {
        opacity: 0.25;
        pointer-events: none;
      }
    }
  }
`;

const NowPagination = function ({
  prev,
  next,
}: {
  prev?: string;
  next?: string;
}) {
  return (
    <NowPaginationDiv>
      <div className="now-pagination-container">
        <div className="now-pagination-button-container">
          {
            <Link
              className={`${!prev ? "disabled" : "enabled"}`}
              aria-disabled={!prev}
              tabIndex={!prev ? -1 : undefined}
              href={`/now/${prev}`}
            >
              {"<"}
            </Link>
          }
        </div>
        <div className="now-pagination-button-container">
          {
            <Link
              className={`${!next ? "disabled" : "enabled"}`}
              aria-disabled={!next}
              tabIndex={!next ? -1 : undefined}
              href={next === "head" ? "/now" : `/now/${next}`}
            >
              {">"}
            </Link>
          }
        </div>
      </div>
    </NowPaginationDiv>
  );
};

export default NowPagination;

