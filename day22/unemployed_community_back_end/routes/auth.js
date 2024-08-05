const express = require("express");
const router = express.Router();
const { join, login, logout } = require("../controllers/auth");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const passport = require("passport");

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingIdList = req.user
    ? req.user.Followings.map((f) => f.id)
    : [];
  next();
});

router.get("/join", isNotLoggedIn, join);

router.get("/login", isNotLoggedIn, login);

router.get("/logout", isLoggedIn, logout);

router.get(
  "/kakao",
  passport.authenticate("kakao", {
    failureRedirect: "/?loginError=카카오로그인 실패",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/?loginError=카카오로그인 실패",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
