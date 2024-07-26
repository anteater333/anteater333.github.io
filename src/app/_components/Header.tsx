"use client";

import Link from "next/link";
import styled from "styled-components";

const BlogHeader = styled.header`
  position: relative;
  display: flex;
  width: 100vw;
  height: 3rem;

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  justify-content: space-between;

  background-color: black;

  > div {
    display: flex;
    height: 100%;

    > * {
      height: 100%;

      img {
        height: 100%;
      }
    }
  }

  .header-title {
    flex: 1;
    align-items: center;
    justify-content: center;

    color: white;
    vertical-align: middle;

    font-size: 2rem;
    font-weight: bold;

    user-select: none;
  }

  .header-left {
    > * {
      margin-left: 1rem;
    }
  }

  .header-right {
    > * {
      margin-right: 1rem;
    }
  }
`;

export default function Header() {
  return (
    <BlogHeader>
      <div className="header-left">
        <Link href={"/"}>
          <img src={"/assets/pictures/placeholder-blog-logo.png"} />
        </Link>
      </div>
      <div className="header-title">{`Anteater's laboratory`}</div>
      <div className="header-right">
        <a href="http://buymeacoffee.com/anteater333" target="_blank">
          <img src={"/assets/pictures/placeholder-bmc.png"} />
        </a>
      </div>
    </BlogHeader>
  );
}
