import { JSDOM } from "jsdom";

export type PostAnalysis = {
  numOfCodeBlocks: number;
  numOfWords: number;
  numOfImages: number;
  estimatedTimeOfReading: number;
};

/** 성인 평균 분당 단어 읽기 수 ref. https://www.jkos.org/upload/pdf/JKOS057-04-17.pdf */
const WPM = 202.3; // Words Per Minute
/** 분당 코드 블록 읽기 수 (추정치) */
const CbPM = 1.5; // Code-blocks per Minute

/**
 *
 */
export function analyzePost(htmlContent: string): PostAnalysis {
  /** HTML 문자열을 Element 객체로 파싱 */
  const contentEl = new JSDOM(htmlContent).window.document.documentElement;

  const result: PostAnalysis = {
    estimatedTimeOfReading: 0,
    numOfCodeBlocks: 0,
    numOfImages: 0,
    numOfWords: 0,
  };

  // 코드 블럭 수 계산 및 Element 객체에서 제외
  /** 블로그 내장 코드 블럭 (<figure/> 태그 사용) */
  const nativeCodeBlocks = contentEl.querySelectorAll("figure");
  const thirdPartyCodeBlocks = contentEl.querySelectorAll(
    "div.sandbox-container"
  );

  result.numOfCodeBlocks =
    nativeCodeBlocks.length + thirdPartyCodeBlocks.length;

  nativeCodeBlocks.forEach((cbEl: Element) => cbEl.remove());
  thirdPartyCodeBlocks.forEach((cbEl: Element) => cbEl.remove());

  // 이미지 수 계산
  result.numOfImages = contentEl.querySelectorAll("img").length;

  // 단어 수 계산
  result.numOfWords = contentEl.textContent?.split(" ").length ?? 0;

  // 총 예상 읽기 시간 측정
  result.estimatedTimeOfReading = Math.floor(
    result.numOfWords / WPM + result.numOfCodeBlocks / CbPM
  );

  return result;
}
