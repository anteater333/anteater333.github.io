"use client";

import { AD_ITEMS } from "@/lib/constants";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const AdBannerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  span {
    font-size: 0.75rem;
    margin-bottom: 0.1rem;
  }

  .my-links-container {
    width: 75%;
    height: 4rem;
    max-width: 20rem;
    border-radius: 0.5rem;
    overflow: hidden;

    .my-links-placeholder {
      width: 100%;
      height: 100%;

      background-color: var(--bg-color-main);
    }

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
`;

export default function AdBanner() {
  const [currentIndex, setCurrentIndex] = useState(-1);

  /** 초기 인덱스 랜덤 설정 */
  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * AD_ITEMS.length));
  }, []);

  const nextAd = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % AD_ITEMS.length;
    });
  }, []);

  const prevAd = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? AD_ITEMS.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextAd, 7500);

    return () => clearInterval(interval);
  });

  return (
    <AdBannerDiv>
      <span>sponsored by</span>
      <div className="my-links-container">
        {currentIndex < 0 ? (
          <div className="my-links-placeholder"></div>
        ) : (
          <a href={AD_ITEMS[currentIndex].link}>
            <img src={AD_ITEMS[currentIndex].image} />
          </a>
        )}
      </div>
    </AdBannerDiv>
  );
}

