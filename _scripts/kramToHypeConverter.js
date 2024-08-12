const output = [];

/**
 *
 * @param {string} source
 */
function imgWithoutComment(source) {
  const regexImgWithoutComment = /\!\[.*\]\(.*\)[ ]{0,}[\r\n]*{:( \.[^ ]+)+}/g;

  const found = source.match(regexImgWithoutComment);

  if (!found) return source;

  const replaced = found.map((text) => {
    const alt = text.split("[")[1].split("]")[0];
    const src = text.split("(")[1].split(")")[0];
    const classes = text
      .split("{:")[1]
      .split("}")[0]
      .split(" .")
      .slice(1)
      .join(" ");

    output.push(alt);

    return `<p class="${classes}">
  <img src="${src}" alt="${alt}"/>
</p>`;
  });

  found.forEach((preVal, index) => {
    const newVal = replaced[index];
    source = source.replace(preVal, newVal);
  });

  return source;
}

/**
 *
 * @param {string} source
 */
function imgWithComment(source) {
  const regexImgWithoutComment =
    /\!\[.*\]\(.*\)[ ]{0,}[\r\n]*.+[\r\n]*{:( \.[^ ]+)+}/g;

  const found = source.match(regexImgWithoutComment);

  if (!found) return source;

  const replaced = found.map((text) => {
    const alt = text.split("[")[1].split("]")[0];
    const src = text.split("(")[1].split(")")[0];
    const classes = text
      .split("{:")[1]
      .split("}")[0]
      .split(" .")
      .slice(1)
      .join(" ");
    const comment = text.split("\n")[1].split("\n")[0];

    output.push(comment);

    return `<p class="${classes}">
  <img src="${src}" alt="${alt}"/>
  <br/>
  ${comment}
</p>`;
  });

  found.forEach((preVal, index) => {
    const newVal = replaced[index];
    source = source.replace(preVal, newVal);
  });

  return source;
}

const fs = require("fs");
const { join } = require("path");

function main() {
  const target = "../_posts/";
  const dest = "../_temp/";

  fs.readdirSync(target).forEach((subdir) => {
    output.push(`\n= ${target} =\n`);
    fs.mkdirSync(join(dest, subdir), { recursive: true });
    fs.readdirSync(join(target, subdir)).forEach((mdFile) => {
      output.push(`== ${mdFile}`);

      const source = fs.readFileSync(join(target, subdir, mdFile), "utf-8");

      const result = imgWithComment(imgWithoutComment(source));

      fs.writeFileSync(join(dest, subdir, mdFile), result);

      output.push(`\n=====================================\n`);
    });
  });

  fs.writeFileSync(join(dest, "검수목록.txt"), output.join("\n"));
}

function test() {
  const target = "../_posts/hack/2022-03-07-hack-the-terms-1.md";

  imgWithComment(fs.readFileSync(target, "utf8"));
}

// test();
main();
