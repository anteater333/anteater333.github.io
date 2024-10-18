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

  const nextBanner = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % adItems.length;
    });
  }, [currentIndex]);

  const prevBanner = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (adItems.length + 2)) % adItems.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextBanner, 5000);

    return () => clearInterval(interval);
  });

  return (
    <AdBannerDiv>
      <div className="ad-banner-container">{adItems[currentIndex].id}</div>
      <button onClick={prevBanner}>이전</button>
      <button onClick={nextBanner}>다음</button>
    </AdBannerDiv>
  );
}
