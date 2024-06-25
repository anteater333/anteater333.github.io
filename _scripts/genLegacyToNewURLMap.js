const { readFileSync, readdir, readdirSync, writeFileSync } = require("fs");
const matter = require("gray-matter");

const REF = "./ref/legacyURLList.json";
const DEST = "./ref/legacyToNewURLMap.json";

const urlList = JSON.parse(readFileSync(REF));

const map = {};

const noUrlTitle = [];

urlList.forEach((item) => {
  const { URL, path } = item;

  const { data } = matter(readFileSync(path));

  if (!data.urlTitle) {
    noUrlTitle.push(path);
    return;
  }

  map[path] = {
    legacy: URL,
    new: `${URL.split("/")[0]}/${data.postId}/${data.urlTitle
      .split(" ")
      .join("-")}`,
  };
});

console.log(
  `generated ${urlList.length - noUrlTitle.length} / ${urlList.length}`
);
console.log("no title --");
console.log(noUrlTitle.join("\n"));

console.log("writing JSON file...");
writeFileSync(DEST, JSON.stringify(map, null, 2));
console.log("DONE");
