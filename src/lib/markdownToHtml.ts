import { remark } from "remark";
import rehype from "remark-rehype";
import raw from "rehype-raw";
import slug from "rehype-slug";
import pretty from "rehype-pretty-code";
import stringify from "rehype-stringify";
import externalLinks from "rehype-external-links";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(rehype, { allowDangerousHtml: true })
    .use(slug)
    .use(raw)
    .use(externalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
    .use(pretty)
    .use(stringify)
    .process(markdown);
  return result.toString();
}
