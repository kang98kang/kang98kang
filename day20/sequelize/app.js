const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const db = require("./models");

const { sequelize } = require("./models");
const { User, Comment } = require("./models");
const { Op } = require("sequelize");

const app = express();
app.set("port", process.env.PORT || 3001);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

db.sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.err = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), async () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
  // User.create({
  //   name: "zero",
  //   age: 24,
  //   married: false,
  //   comment: "자기소개1",
  // });
  // let data = await User.findAll({
  //   attributes: ["name", "married"],
  //   where: {
  //     married: 1,
  //     age: { [Op.gt]: 30 },
  //   },
  // });
  // let data = await User.findAll({
  //   attributes: ["id", "name"],
  //   order: [["age", "DESC"]],
  // });
  // console.log("order => ", data);

  // data = await User.findAll({
  //   attributes: ["id", "name"],
  //   order: [["age", "DESC"]],
  //   limit: 1,
  // });
  // console.log("limit => ", limit);

  // data = await User.findAll({
  //   attributes: ["id", "name"],
  //   order: [["age", "DESC"]],
  //   limit: 1,
  //   offset: 1,
  // });
  // console.log("offset => ", offset);

  // User.update(
  //   {
  //     comment: "바꿀 내용",
  //   },
  //   {
  //     where: { id: 4 },
  //   }
  // );

  // User.destroy({
  //   where: { id: 1 },
  // });
  let data = await User.findOne({
    include: [
      {
        model: Comment,
      },
    ],
  });
  console.log(data);
});
