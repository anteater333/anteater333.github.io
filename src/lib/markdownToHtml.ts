import { remark } from "remark";
import rehype from "remark-rehype";
import raw from "rehype-raw";
import slug from "rehype-slug";
import pretty from "rehype-pretty-code";
import stringify from "rehype-stringify";
import externalLinks from "rehype-external-links";
import { ElementContent, Root } from "hast";
import { visit } from "unist-util-visit";

/**
 * Rehype 커스텀 플러그인, 코드 블록에 복사 버튼을 추가
 * TBD: 이벤트 이름 상수화
 * @returns
 */
function appendCopyBtn() {
  return function (tree: Root) {
    let i = 0;
    visit(tree, "element", function (node) {
      if (node.tagName === "figure") {
        node.properties = {
          ...node.properties,
          id: `code-block-${i}`,
          onmouseover: `this.classList.add('has-mouse')`,
          onmouseout: `this.classList.remove('has-mouse')`,
        };

        const copyButton: ElementContent = {
          type: "element",
          tagName: "button",
          properties: {
            className: ["code-copy-btn"],
            onclick: `
            const target = document.getElementById('code-block-${i}');
            if (!target) return;
            const textToCopy = target.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {});
            document.dispatchEvent(
                new Event("toast")
            );
          `,
          },
          children: [{ type: "text", value: "📋" }],
        };

        node.children.push(copyButton);

        i += 1;
      }
    });
  };
}

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(rehype, { allowDangerousHtml: true })
    .use(slug)
    .use(raw)
    .use(externalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] })
    .use(pretty)
    .use(appendCopyBtn)
    .use(stringify)
    .process(markdown);
  return result.toString();
}
