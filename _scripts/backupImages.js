const fs = require("fs").promises;
const fsSync = require("fs");
const { Readable } = require("stream");
const { finished } = require("stream/promises");

const POSTS = "./_posts";
const BACKUP = "./_backup";

const failedList = [];
let failedCount = 0;

fs.readdir(POSTS).then((dirList) => {
  dirList.forEach((subdir) => {
    const categoryPath = `${POSTS}/${subdir}`;
    fs.readdir(categoryPath).then((fileList) => {
      fileList.forEach(async (target) => {
        fsSync.mkdirSync(`${BACKUP}/${subdir}/${target.split(".")[0]}`, {
          recursive: true,
        });

        const targetPath = `${categoryPath}/${target}`;

        const data = fsSync.readFileSync(targetPath);

        const content = data.toString();
        const imgSrcRegex = /<img[^>]+src="([^">]+)"/g;
        let match;
        let idx = 0;
        while ((match = imgSrcRegex.exec(content)) !== null) {
          const imgUrl = match[1];
          if (!imgUrl.includes("https")) continue;

          const imgPath = `${BACKUP}/${subdir}/${
            target.split(".")[0]
          }/${idx++}_${imgUrl.split("/").pop().split(".")[0]}.${
            imgUrl.split("/").pop().split(".")[1]
          }`;
          try {
            const response = await fetch(imgUrl);
            const fileStream = fsSync.createWriteStream(imgPath, {
              flags: "wx",
            });
            await finished(Readable.fromWeb(response.body).pipe(fileStream));
          } catch (err) {
            console.error(`Failed to process ${imgUrl}:`, err);
            failedList.push(`${failedCount++},${targetPath},${idx},${imgUrl}`);
          }
        }
      });
    });
  });
});

process.on("exit", () => {
  if (failedList.length > 0) {
    const failedFilePath = `${BACKUP}/failedList.csv`;
    try {
      fsSync.writeFileSync(failedFilePath, failedList.join("\n"), "utf8");
      console.log(`Failed list saved to ${failedFilePath}, (${failedCount})`);
    } catch (err) {
      console.error("Failed to save the failed list:", err);
    }
  }
});

