import { css, keyframes } from "styled-components";

/** styled-component on-half, tablet */
export const scOnHalf = "screen and (max-width: 1280px)";
/** styled-component on-palm, mobile */
export const scOnPalm = "screen and (max-width: 767px)";

/** 공통 box-shadow 수치 */
export const defaultBoxShadow = css`
  box-shadow: 0 4px 4px 0px var(--shadow-color);
`;

export const textBackgroundTransition = keyframes`
    0%,
    100% {
      background-position: 0 0;
    }

    50% {
      background-position: 100% 0;
    }`;

export const rainbowColor = `
    linear-gradient(
      to right,
      #6666ff,
      #35aeff,
      #33de58,
      #ff6021,
      #6666ff
    );
`;
