// Blog.v2의 Legacy 형식 파일들을 새 형식으로 변환하는 유틸리티 스크립트

require("./genLegacyURLList")
  .then(async () => {
    console.log("=========");
    return await require("./genLegacyToNewURLMap");
  })
  .then(() => {
    console.log("=========");
    console.log("v.2 => v.3 migration done.");
  });
