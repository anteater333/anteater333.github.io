import { Category } from "@/interfaces/post";

export function categoryConverter(code: Category) {
  switch (code) {
    case "meta":
      return "공지";
    case "hack":
      return "Hack the terms";
    case "memoir":
      return "회고록";
    case "micro":
      return "자잘한 도움말";
    case "ndev":
      return "Not 4 Dev";
    case "reddit":
      return "독후감";
    default:
      return "기타";
  }
}
