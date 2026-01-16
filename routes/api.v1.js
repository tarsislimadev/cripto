var express = require("express");
var router = express.Router();

const ok = (json = {}, status = 0, error = null) => ({
  status,
  message: error?.message,
  data: json,
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(ok());
});

module.exports = router;
