const express = require("express");
const router = express.Router();
const { renderMain, renderHashtag } = require("../controllers/page");

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingIdList = req.user
    ? req.user.Followings.map((f) => f.id)
    : [];
  next();
});

router.get("/", renderMain);

router.get("/hashtag", renderHashtag);

module.exports = router;
