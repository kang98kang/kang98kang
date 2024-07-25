const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");

writeStream.on("finish", () => {
  console.log("파일 쓰기 완료");
});

writeStream.write("이 글을 씁니다. \n");
writeStream.write("한 번 더 씁니다.");
writeStream.end();

const writeStream2 = fs.createWriteStream("./writeme2-1.txt");
let sum = 0;
for (i = 0; i < 5; i++) {
  writeStream2.write(`${(sum += 2 ** i).toString(2).padStart(5, "0")} \n`);
}
