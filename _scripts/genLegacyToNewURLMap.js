const { readFileSync, writeFileSync } = require("fs");
const matter = require("gray-matter");

const REF = "./ref/legacyURLList.json";
const DEST = "./ref/legacyToNewURLMap.json";

const urlList = JSON.parse(readFileSync(REF));

const map = {};

const noSlug = [];

urlList.forEach((item) => {
  const { URL, path } = item;

  const { data } = matter(readFileSync(path));

  if (!data.slug) {
    noSlug.push(path);
    return;
  }

  map[URL] = `${URL.split("/")[0]}/${data.id}/${data.slug
    .split(" ")
    .join("-")}`;
});

console.log(`generated ${urlList.length - noSlug.length} / ${urlList.length}`);

if (noSlug.length > 0) {
  console.log("no slug --");
  console.log(noSlug.join("\n"));
}

console.log("writing JSON file...");
writeFileSync(DEST, JSON.stringify(map, null, 2));
console.log("DONE");
