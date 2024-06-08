import { remark } from "remark";
import gfm from "remark-gfm";
import directive from "remark-directive";
import attributeList from "remark-attribute-list";
import rehype from "remark-rehype";
import raw from "rehype-raw";
import slug from "rehype-slug";
import pretty from "rehype-pretty-code";
import stringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(gfm)
    .use(directive)
    .use(attributeList)
    .use(rehype)
    .use(raw)
    .use(slug)
    .use(pretty)
    .use(stringify)
    .process(markdown);
  return result.toString();
}
