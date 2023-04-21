var express = require("express");
var router = express.Router();
var Controller = require("../controller/indexController");

router.post("/user/register", Controller.userRegister);
router.post("/user/login", Controller.userLogin);

module.exports = router;
