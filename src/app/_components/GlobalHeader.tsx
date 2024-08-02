"use client";

import Link from "next/link";
import styled from "styled-components";

const GlobalHeaderHeader = styled.header`
  position: relative;
  display: flex;
  width: 100vw;
  height: 2rem;

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

    vertical-align: middle;

    user-select: none;

    > a {
      font-family: "Galmuri7", sans-serif;
      font-size: 1.5rem;
      font-weight: bold;

      line-height: 1.5;

      background: linear-gradient(to right, #658bef 0%, #4cec8c 100%);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
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

export default function GlobalHeader() {
  return (
    <GlobalHeaderHeader>
      <div className="header-left">
        <Link href={"/now"}>
          <img src={"/assets/pictures/placeholder-blog-logo.png"} />
        </Link>
      </div>
      <div className="header-title">
        <Link href={"/"}>{`Anteater's laboratory`}</Link>
      </div>
      <div className="header-right">
        <a href="http://buymeacoffee.com/anteater333" target="_blank">
          <img src={"/assets/pictures/placeholder-bmc.png"} />
        </a>
      </div>
    </GlobalHeaderHeader>
  );
}
