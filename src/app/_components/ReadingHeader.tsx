"use client";

import styled from "styled-components";
import DateFormatter from "./DateFormatter";
import {
  defaultBoxShadow,
  rainbowColor,
  scOnHalf,
  scOnPalm,
} from "@/styles/values";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/lib/store";

const ReadingHeaderHeader = styled.header<{ $isCompleted: boolean }>`
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

    background-color: color-mix(
      in srgb,
      var(--bg-color-main) 100%,
      transparent
    );

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

      .progress-coffee-container {
        height: 3.75rem;
        width: 2.5rem;
        margin-bottom: 0.25rem;

        position: relative;
        overflow: visible;

        > * {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .frame {
          opacity: 0.8;
        }

        .clip {
        }

        .mask-container {
          mask-image: url(/assets/pictures/coffee/coffee-liquid-mask.png);
          mask-size: contain;
          mask-repeat: no-repeat;
          width: 100%;
          top: 0.1rem;
          .liquid {
            background-image: url(/assets/pictures/coffee/coffee-liquid.svg);
            background-size: contain;
            background-repeat: repeat-x;
            opacity: 0.8;
            height: 100%;
            width: 380px;
            margin-top: 0.75rem;

            position: absolute;

            animation: wave 7s linear infinite;
          }

          .ice {
            object-fit: contain;
            width: 80%;
            left: 0.33rem;
            margin-top: 0.33rem;

            position: absolute;

            &.swell {
              animation: swell 3.5s ease-in-out 0s infinite;
            }
          }

          .sheen {
            position: absolute;
            top: -50%;
            right: -50%;
            bottom: -50%;
            left: -50%;

            width: 1.5rem;

            background: ${rainbowColor};
            background-size: 300% 100%;
            opacity: 0.9;
            transform: rotateZ(70deg) translate(8rem, 4rem);
            animation: ${({ $isCompleted }) =>
              $isCompleted
                ? "sheen cubic-bezier(0.17, 0.67, 0.83, 0.67) 2.5s"
                : "none"};
          }
        }

        .straw {
          object-fit: contain;
          height: 105%;
          top: -0.4rem;
          overflow: visible;
        }
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

  @keyframes wave {
    0% {
      left: 0;
    }
    100% {
      left: -95px;
    }
  }
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -1px, 0);
    }
    50% {
      transform: translate3d(0, 1px, 0);
    }
  }
  @keyframes sheen {
    100% {
      transform: rotateZ(70deg) translate(-8rem, -4rem);
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

  const { isDarkMode } = useDarkMode();

  const [scrollPercent, setScrollPercent] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

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

  useEffect(() => {
    const handleScrollProgress = (event: Event) => {
      const scrollTop = window.document.documentElement.scrollTop;
      const scrollBottom =
        window.document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / scrollBottom) * 100;

      setScrollPercent(scrollPercent);
      setIsCompleted(scrollPercent > 90);
    };

    window.addEventListener("scroll", handleScrollProgress);

    return () => {
      window.removeEventListener("scroll", handleScrollProgress);
    };
  }, []);

  return (
    <ReadingHeaderHeader
      className={isVisible ? "visible" : "hidden"}
      $isCompleted={isCompleted}
    >
      <div className="container">
        <div className="header-left">
          <DateFormatter dateString={date} />
        </div>
        <div className="header-title">
          <h1>{title}</h1>
        </div>
        <div className="header-right">
          <a href="http://buymeacoffee.com/anteater333" target="_blank">
            <div className="progress-coffee-container">
              <div className="mask-container">
                <img
                  src="/assets/pictures/coffee/coffee-ice.png"
                  className={`ice ${scrollPercent < 70 ? "swell" : ""}`}
                  style={{
                    top: `${Math.min(scrollPercent, 70) * 0.5}px`,
                  }}
                />
              </div>
              <img
                className="straw"
                src={`/assets/pictures/coffee/coffee-straw-${
                  isDarkMode ? "white" : "black"
                }.png`}
              />
              <div className="mask-container">
                <div
                  className="liquid"
                  style={{
                    top: `${scrollPercent * 0.5}px`,
                  }}
                />
              </div>
              <img
                className="frame"
                src={`/assets/pictures/coffee/coffee-frame-${
                  isDarkMode ? "white" : "black"
                }.png`}
              />
              <div className="mask-container">
                <div className="sheen" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </ReadingHeaderHeader>
  );
};

export default ReadingHeader;
