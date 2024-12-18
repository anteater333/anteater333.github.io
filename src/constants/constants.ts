// anteater_lab, 상수 저장소

import { Category } from "@/interfaces/post";

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

export const RANDOM_PHRASES = [
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

export const CATEGORY_PHRASES: Record<Category, string> = {
  micro: "- 자잘하다 -",
  meta: "- 공지사항 -",
  hack: "- Hack the terms -",
  memoir: "- 후회중독 -",
  ndev: "- 개발자 출입 금지 -",
  reddit: "- I read it ! -",
};
