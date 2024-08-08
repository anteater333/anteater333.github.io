import { keyframes } from "styled-components";

/** styled-component on-half, tablet */
export const scOnHalf = "screen and (max-width: 1023px)";
/** styled-component on-palm, mobile */
export const scOnPalm = "screen and (max-width: 767px)";

/** 공통 box-shadow 수치 */
export const defaultBoxShadow = `box-shadow: 0 4px 4px 0px #d4d4d4`;

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
