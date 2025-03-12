// anteater_lab, 상수 저장소

import { Category } from "@/interfaces/post";

export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Markdown";

/**
 * 기존 ver.2에선 35729 포트 사용 중이었음
 */
export const WS_PORT = 35730;

export const AD_ITEMS = [
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

const phrasesList = [
  "CATCHPHRASE!!",
  "멋있는 대사!!",
  "대서특필!!",
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
  "As seen on TV!",
  "BOTY!",
  "Git과 Github는 달라요",
  "El blog de José",
  "You Ain't Gonna Need It",
  "그대는... 그뭐냐... 그거다.",
  "버그가 아니라 기능입니다.",
  "Josie Rizal for Tekken 8 !! @Harada_TEKKEN",
  "명징하게 직조해낸 블로그",
  "from 달구벌",
  "Anteater's laboratory",
  "Firefox > Chrome",
  "새로 고침 하면 바껴요.",
  "귀하의 새로 고침이 본 블로그의 방문자 수에 보템이 되고 있습니다.",
  "뚜루뚜 빠라빠라!",
  "비슬산 맑은바람 가슴에 안고",
  "만들기 위해 배우지 말고 배우기 위해 만들어라. {실용주의 사고와 학습}",
  "당신은 멀리서 민달팽이가 분노로 울부짖는 소리를 들었다!",
  "/now 페이지를 찾아 주세요",
  "잘 구웠습니다~!",
];

phrasesList.push(
  `이 메시지를 볼 확률은 약 ${(1 / (phrasesList.length + 1)) * 100}% !!`
);

export const RANDOM_PHRASES = phrasesList;

export const CATEGORY_PHRASES: Record<Category, string> = {
  micro: "- 자잘하다 -",
  meta: "- 공지사항 -",
  hack: "- Hack the terms -",
  memoir: "- 후회중독 -",
  ndev: "- 개발자 출입 금지 -",
  reddit: "- I read it ! -",
};

export const CUSTOM_EVENTS = {
  toast: "toast",
};
