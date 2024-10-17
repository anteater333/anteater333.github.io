"use client";

import styled from "styled-components";

const AdBannerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
  margin-bottom: 1rem;

  .ad-banner-container {
    width: 75%;
    height: 4rem;
    max-width: 20rem;
    background-color: red;
    border-radius: 0.5rem;
  }
`;

export default function AdBanner() {
  return (
    <AdBannerDiv>
      <div className="ad-banner-container"></div>
    </AdBannerDiv>
  );
}
