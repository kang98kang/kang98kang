const { User, Post, Hashtag } = require("../models");

exports.renderProfile = (req, res) => {
  res.render("profile", { title: "내 정보 - NodeBird" });
};

exports.renderJoin = (req, res) => {
  res.render("join", { title: "회원가입 - NodeBird" });
};

exports.renderMain = async (req, res, next) => {
  // paging 구현할 예정
  let pageSize = Number(process.env.PAGE_SIZE);
  let pagePaddingSize = Number(process.env.PAGE_PADDING_SIZE);

  let currentPage = 0;
  if (req.query.currentPage) currentPage = Number(req.query.currentPage);

  // 데이터베이스 쿼리해서 계산해야함
  let totalSize = 0;

  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
    });

    totalSize = posts.length;
  } catch (err) {
    console.error(err);
    next(err);
  }

  let offset = (currentPage - 1) * pageSize;
  if (offset < 0) {
    offset = 0;
  }

  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
      offset: Number(offset) || 0,
      limit: pageSize,
      order: [["createdAt", "DESC"]],
    });
    res.render("main", {
      title: "NodeBird",
      twits: posts,
      totalSize: totalSize,
      currentPage: currentPage,
      pageSize: pageSize,
      pagePaddingSize: pagePaddingSize,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.renderHashtag = async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect("/");
  }
  try {
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }

    return res.render("main", {
      title: `${query} | NodeBird`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};
