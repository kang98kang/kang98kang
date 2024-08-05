const { User } = require("../models");

exports.renderDetail = async (req, res) => {
  let data = await User.findAll({});
  res.render("community/detail", {
    data,
  });
};

exports.renderHome = (req, res) => {
  res.render("community/home", { title: "회원가입 - NodeBird" });
};

exports.renderReply = (req, res, next) => {
  const twits = [];
  res.render("community/reply", {
    title: "NodeBird",
    twits,
  });
};
