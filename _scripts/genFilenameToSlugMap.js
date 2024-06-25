const { readdir, readdirSync, writeFileSync, readFileSync } = require("fs");
const { join } = require("path");
const matter = require("gray-matter");

const TARGET = "./_posts/";
const DEST1 = "./ref/filenameToSlug.json";
const DEST2 = "./ref/slugToFilename.json";

const filenameToSlugMap = {};
const slugToFilenameMap = {};

let count = 0;

readdir(TARGET, (err, files) => {
  files.forEach((cat) => {
    const posts = readdirSync(join(TARGET, cat));
    posts.forEach((post) => {
      const filePath = join(TARGET, cat, post);
      const { data } = matter(readFileSync(filePath));

      if (data.id === undefined || data.slug === undefined) return;

      filenameToSlugMap[join(cat, post)] = `${cat}/${data.id}/${data.slug
        .split(" ")
        .join("-")}`;
      slugToFilenameMap[`${cat}/${data.id}/${data.slug.split(" ").join("-")}`] =
        join(cat, post);
      count++;
    });
  });

  console.log(`total ${count}`);
  writeFileSync(DEST1, JSON.stringify(filenameToSlugMap, null, 2));
  writeFileSync(DEST2, JSON.stringify(slugToFilenameMap, null, 2));
  console.log("DONE");
});
