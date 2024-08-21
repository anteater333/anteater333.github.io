"use client";

import styled from "styled-components";
import DateFormatter from "./DateFormatter";
import { defaultBoxShadow, scOnHalf, scOnPalm } from "@/styles/values";
import { useEffect, useState } from "react";

const ReadingHeaderHeader = styled.header`
  @media ${scOnHalf} {
    width: 100%;
  }
  @media ${scOnPalm} {
  }

  justify-content: center;
  z-index: 100;

  position: fixed;
  width: calc(100% - 20rem);
  top: 1rem;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 1.5rem;

    height: 4.25rem;

    margin: 0 1rem;
    flex: 1;

    ${defaultBoxShadow};

    background-color: #ffffffc7;

    .header-left {
      padding-left: 1rem;
      width: 20%;

      font-size: 0.9rem;
      font-weight: bold;
    }

    .header-title {
      width: 40%;
      h1 {
        @media ${scOnHalf} {
        }

        @media ${scOnPalm} {
          font-size: 1rem;
        }

        font-size: 1.25rem;
        text-align: center;
        line-height: 1;
      }
    }

    .header-right {
      display: flex;
      justify-content: flex-end;
      padding-right: 1rem;
      width: 20%;

      img {
        height: 2.5rem;
      }
    }

    transition: all 0.33s ease-in-out;
  }

  transition: all 0.33s ease-in-out;
  &.hidden {
    transform: translateY(-100%);
    .container {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  &.visible {
    .container {
      opacity: 0.9;
    }
  }
`;

const ReadingHeader = function ({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const threshold = 100;
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - prevScrollY) < threshold) {
        return;
      }

      const result = currentScrollY > prevScrollY;
      setIsVisible(result && currentScrollY > 400);
      prevScrollY = Math.max(currentScrollY, 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ReadingHeaderHeader className={isVisible ? "visible" : "hidden"}>
      <div className="container">
        <div className="header-left">
          <DateFormatter dateString={date} />
        </div>
        <div className="header-title">
          <h1>{title}</h1>
        </div>
        {/* TBD: 화려한 커피좀 사주세요 버튼으로 구현하기 */}
        <div className="header-right">
          <a href="http://buymeacoffee.com/anteater333" target="_blank">
            <img src={"/assets/pictures/placeholder-bmc.png"} />
          </a>
        </div>
      </div>
    </ReadingHeaderHeader>
  );
};

export default ReadingHeader;
