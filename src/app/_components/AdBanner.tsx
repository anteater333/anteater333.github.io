"use client";

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

  .ad-banner-container {
    width: 75%;
    height: 4rem;
    max-width: 20rem;
    background-color: var(--static-black);
    border-radius: 0.5rem;
    overflow: hidden;

    .ad-banner-placeholder {
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

const adItems = [
  {
    title: "domado",
    image: "/assets/pictures/ads/ad-1-domado.png",
    link: "https://domado.vercel.app/",
  },
  {
    title: "soup",
    image: "/assets/pictures/ads/ad-2-soup.png",
    link: "https://blog.anteater-lab.link/namu-soup/",
  },
  {
    title: "watchunduck",
    image: "/assets/pictures/ads/ad-3-watchunduck.png",
    link: "https://watchunduck.tistory.com/",
  },
  {
    title: "buymeacoffee",
    image: "/assets/pictures/ads/ad-4-bmc.png",
    link: "http://buymeacoffee.com/anteater333",
  },
];

export default function AdBanner() {
  const [currentIndex, setCurrentIndex] = useState(-1);

  /** 초기 인덱스 랜덤 설정 */
  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * adItems.length));
  }, []);

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

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <AdBannerDiv>
      <span>sponsored by</span>
      <div className="ad-banner-container">
        {currentIndex < 0 ? (
          <div className="ad-banner-placeholder"></div>
        ) : (
          <a href={adItems[currentIndex].link}>
            <img src={adItems[currentIndex].image} />
          </a>
        )}
      </div>
    </AdBannerDiv>
  );
}
