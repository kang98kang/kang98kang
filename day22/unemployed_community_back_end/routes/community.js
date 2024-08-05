const express = require('express')
const router = express.Router()
const { renderDetail } = require("../controllers/community");

router.get("/detail", renderDetail);

module.exports = router;
