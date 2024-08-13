const output = [];

/**
 *
 * @param {string} source
 */
function imgWithoutComment(source) {
  output.push(`\n- imgWithoutComment:`);

  const regex = /\!\[.*\]\(.*\)[ ]{0,}[\r\n]*{:( \.[^ ]+)+}/g;

  const found = source.match(regex);

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
  output.push(`\n- imgWithComment:`);

  const regex = /\!\[.*\]\(.*\)[ ]{0,}[\r\n]*.+[\r\n]*{:( \.[^ ]+)+}/g;

  const found = source.match(regex);

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

/**
 *
 * @param {string} source
 */
function aTag(source) {
  output.push(`\n- aTag:`);

  const regex = /\[(.*?)\]\((.*?)\)/g;

  const found = source.match(regex);

  if (!found) return source;

  const replaced = found.map((text) => {
    const content = text.split("[")[1].split("]")[0];
    const link = text.split("(")[1].split(")")[0];

    output.push(content);

    return `<a href="${link}">${content}</a>`;
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
function strong(source) {
  output.push(`\n- strong:`);

  const regex = /\*\*(.*?)\*\*/g;

  const found = source.match(regex);

  if (!found) return source;

  const replaced = found.map((text) => {
    const content = text.split("**")[1];

    output.push(content);

    return `<strong>${content}</strong>`;
  });

  found.forEach((preVal, index) => {
    const newVal = replaced[index];
    source = source.replace(preVal, newVal);
  });

  return source;
}

const fs = require("fs");
const { join, resolve } = require("path");

function main() {
  const target = "../_posts/";
  const dest = "../_temp/";

  fs.readdirSync(target).forEach((subdir) => {
    output.push(`\n= ${target} =\n`);
    fs.mkdirSync(join(dest, subdir), { recursive: true });
    fs.readdirSync(join(target, subdir)).forEach((mdFile) => {
      output.push(`== ${resolve(mdFile)}`);

      const source = fs.readFileSync(join(target, subdir, mdFile), "utf-8");

      const result = strong(aTag(imgWithComment(imgWithoutComment(source))));

      fs.writeFileSync(join(dest, subdir, mdFile), result);

      output.push(`\n=====================================\n`);
    });
  });

  fs.writeFileSync(join(dest, "검수목록.txt"), output.join("\n"));
}

function test() {
  const target = "../_posts/hack/2022-03-07-hack-the-terms-1.md";

  strong(aTag(imgWithComment(fs.readFileSync(target, "utf8"))));

  console.log(output.join("\n"));
}

// test();
main();
