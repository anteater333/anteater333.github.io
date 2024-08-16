"use client";

import { Category } from "@/interfaces/post";
import { scOnHalf, scOnPalm } from "@/styles/values";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CatchphraseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;

  * {
    font-family: "Galmuri7", sans-serif;
    text-align: right;
    opacity: 0.05;
    user-select: none;
  }

  .title {
    font-size: 4rem;
    font-weight: bold;
  }

  .phrase {
    font-size: 2rem;
  }

  @media ${scOnHalf} {
    .title {
      font-size: 3rem;
    }
    .phrase {
      font-size: 1.5rem;
    }
  }

  @media ${scOnPalm} {
    .title {
      font-size: 2rem;
    }
    .phrase {
      font-size: 1rem;
    }
  }
`;

const randomPhrases = [
  "CATCHPHRASE!!",
  "멋있는 대사!!",
  "절찬 개발 중",
  "취미는 영화 보기입니다.",
  "취미는 웹 서핑입니다.",
  "취미는 게임입니다.",
  "Lorem ipsum dol...",
  "도움이 됐을까요?",
  "돈이 될까?",
  "I'm sorry Dave, I'm afraid I can't do that.",
  "웅나?",
  "난, 해적왕이 될 거야!",
  "As seeon on TV!",
  "BOTY!",
  "Git과 Github는 달라요",
  "is a water buffalo horn-based composite reflex...",
  "You Ain't Gonna Need It",
  "그대는... 그뭐냐... 그거다.",
  "버그가 아니라 기능입니다.",
  "Josie Rizal for Tekken 8 !! @Harada_TEKKEN",
  "명징하게 직조해낸 블로그",
  "from 달구벌",
  "Anteater's laboratory",
  "Firefox > Chrome",
  "새로 고침 하면 바껴요.",
  "뚜루뚜 빠라빠라!",
  "비슬산 맑은바람 가슴에 안고",
  "만들기 위해 배우지 말고 배우기 위해 만들어라. {실용주의 사고와 학습}",
  "당신은 멀리서 민달팽이가 분노로 울부짖는 소리를 들었다!",
  "이 메시지를 볼 확률은 약 3.3% !!",
];

const categoryPhrases: Record<Category, string> = {
  micro: "- 자잘하다 -",
  meta: "- 공지사항 -",
  hack: "- Hack the terms -",
  memoir: "- 후회중독 -",
  ndev: "- 개발자 출입 금지 -",
  reddit: "- I read it ! -",
  temp: "",
};

const Catchphrase = function ({ category }: { category?: Category }) {
  const [phrase, setPhrase] = useState<string>("");

  useEffect(() => {
    setPhrase(
      category
        ? categoryPhrases[category]
        : randomPhrases[~~(Math.random() * randomPhrases.length)]
    );
  }, []);

  return (
    <CatchphraseDiv>
      <div className="title">Anteater's laboratory</div>
      <div className="phrase">{phrase}</div>
    </CatchphraseDiv>
  );
};

export default Catchphrase;
