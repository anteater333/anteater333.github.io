/**
 * genFilenameToSlugMap
 * _posts/ 경로 아래의 .md 파일들을 읽어 slug 정보를 추출한다.
 * 기존 블로그에서 사용하던 .md 파일 명명법 규칙을 유지하면서
 * 새로운 방식의 Slug 규칙을 URL에 적용하기 위해 이런 방식을 사용함.
 *
 * 스크립트 실행의 결과물로 다음 두 파일이 생성된다
 * ./ref/filenameToSlug.json
 * ./ref/slugToFilename.json
 */

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
