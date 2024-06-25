const { readFileSync, readdir, readdirSync, writeFileSync } = require("fs");
const { join } = require("path");

const TARGET = "./_posts/";
const DEST = "./ref/legacyURLList.json";

const list = [];

readdir(TARGET, (err, files) => {
  files.forEach((cat) => {
    const posts = readdirSync(join(TARGET, cat));
    posts.forEach((post) => {
      const [year, month, day, ...title] = post.split("-");
      list.push({
        path: join(TARGET, cat, post),
        URL: `${cat}/${year}/${month}/${day}/${
          title.join("-").split(".md")[0]
        }.html`,
      });
    });
  });

  writeFileSync(DEST, JSON.stringify(list, null, 2));
});
