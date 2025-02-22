const fs = require("fs");
const path = require("path");
const { Readable } = require("stream");
const { finished } = require("stream/promises");

const failedListPath = "../_backup/failedList.csv";

const filePath = path.resolve(__dirname, failedListPath);

const failedList = [];
let failedCount = 0;

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const rows = data.split("\n");

  rows.forEach(async (row) => {
    const [failedIdx, post, imgIdx, imgUrl] = row
      .split(",")
      .map((s) => s.trim());

    const [_, _posts, category, fileName] = post.split("/");

    const backupDirPath = `../_backupAS/${category}/${fileName.split(".")[0]}`;

    if (!fs.existsSync(backupDirPath))
      fs.mkdirSync(backupDirPath, { recursive: true });

    const imgPath = `${backupDirPath}/${imgIdx - 1}_${
      imgUrl.split("/").pop().split(".")[0]
    }.${imgUrl.split("/").pop().split(".")[1]}`;

    if (fs.existsSync(imgPath)) return;

    try {
      const response = await fetch(imgUrl);
      const fileStream = fs.createWriteStream(imgPath, {
        flags: "wx",
      });
      await finished(Readable.fromWeb(response.body).pipe(fileStream));
    } catch (err) {
      console.error(`Failed to process ${imgUrl}:`, err);
      failedList.push(`${failedCount++},${post},${imgIdx},${imgUrl}`);
    }
  });
});

process.on("exit", () => {
  if (failedList.length > 0) {
    const failedFilePath = `../_backupAS/failedList_as.csv`;
    try {
      fs.writeFileSync(failedFilePath, failedList.join("\n"), "utf8");
      console.log(`Failed list saved to ${failedFilePath}, (${failedCount})`);
    } catch (err) {
      console.error("Failed to save the failed list:", err);
    }
  }
});

