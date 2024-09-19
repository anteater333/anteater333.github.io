"use client";

import styled from "styled-components";

const SpinnerContainerDiv = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;

  opacity: 0.05;

  .message {
    margin-top: 1.25rem;
    font-family: Galmuri7, sans-serif;
    font-size: 1.25rem;
  }

  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid var(--text-color-main);
    border-right: 3px solid transparent;
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
