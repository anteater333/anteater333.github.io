"use client";

import styled from "styled-components";

const SpinnerContainerDiv = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
  padding-bottom: 15rem;

  opacity: 0.1;

  .message {
    margin-top: 2rem;
    font-family: Galmuri7, sans-serif;
    font-size: 2rem;
  }

  .loader {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: inline-block;
    border-top: 8px solid var(--text-color-main);
    border-right: 8px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function LoadingPlaceholder() {
  return (
    <SpinnerContainerDiv>
      <span className="loader"></span>
      <span className="message">... loading ...</span>
    </SpinnerContainerDiv>
  );
}
