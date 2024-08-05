const express = require("express");
const router = express.Router();

const page = require("./page.js");
const community = require("./community.js");
const auth = require("./auth.js");
const mypage = require("./mypage.js");
const post = require("./post.js");
const user = require("./user.js");

router.use("/", page);
router.use("/community", community);
router.use("/auth", auth);
router.use("/mypage", mypage);
router.use("/post", post);
router.use("/user", user);

module.exports = router;
