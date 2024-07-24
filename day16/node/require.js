console.log("require가 상단에 오지 않아도 됩니다.");

module.exports = "저를 찾아보세요.";

require("./var");

console.log("require.cache입니다.", require.cache);
console.log(
  "require.main입니다.",
  require.main === module,
  require.main.filename
);

console.log(this);
