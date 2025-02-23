const fs = require("fs").promises;
const fsSync = require("fs");

const POSTS = "./_posts";
const BACKUP = "./_backup";

const imgList = [];
let totalCnt = 0;

fs.readdir(POSTS).then((dirList) => {
  dirList.forEach((subdir) => {
    const categoryPath = `${POSTS}/${subdir}`;
    fs.readdir(categoryPath).then((fileList) => {
      fileList.forEach(async (target) => {
        const targetPath = `${categoryPath}/${target}`;

        const data = fsSync.readFileSync(targetPath);

        const content = data.toString();
        const imgSrcRegex = /<img[^>]+src="([^">]+)"/g;
        let match;
        let idx = 0;
        while ((match = imgSrcRegex.exec(content)) !== null) {
          const imgUrl = match[1];
          imgList.push(`${totalCnt++},${targetPath},${idx++},${imgUrl}`);
        }
      });
    });
  });
});

process.on("exit", () => {
  const imgListFilePath = `${BACKUP}/imgList.csv`;
  try {
    fsSync.writeFileSync(imgListFilePath, imgList.join("\n"), "utf8");
    console.log(`File saved, total: ${totalCnt}`);
  } catch (err) {
    console.error("Failed to save the image list:", err);
  }
});

