"use client";

import { CATEGORY_PHRASES, RANDOM_PHRASES } from "@/constants/constants";
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
    font-family: Galmuri7, sans-serif;
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

const Catchphrase = function ({ category }: { category?: Category }) {
  const [phrase, setPhrase] = useState<string>("");

  useEffect(() => {
    setPhrase(
      category
        ? CATEGORY_PHRASES[category]
        : RANDOM_PHRASES[~~(Math.random() * RANDOM_PHRASES.length)]
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
