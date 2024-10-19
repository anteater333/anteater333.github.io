"use client";

import { useCallback, useEffect, useState } from "react";
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

const adItems = [
  { id: 0, image: "", link: "" },
  { id: 1, image: "", link: "" },
  { id: 2, image: "", link: "" },
  { id: 3, image: "", link: "" },
];

export default function AdBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAd = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % adItems.length;
    });
  }, []);

  const prevAd = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? adItems.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextAd, 5000);

    return () => clearInterval(interval);
  });

  return (
    <AdBannerDiv>
      <span>sponsored by</span>
      <div className="ad-banner-container">
        <a href={adItems[currentIndex].link}>
          <img src={adItems[currentIndex].image} />
        </a>
      </div>
      <button onClick={prevAd}>이전</button>
      <button onClick={nextAd}>다음</button>
    </AdBannerDiv>
  );
}
