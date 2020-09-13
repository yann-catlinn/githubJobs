var express = require("express");
//var userController = require("../controllers/jobs");
var router = express.Router();

/* GET jobs */
router.get("/", async function(req, res, next) {
    //var result = await userController.user_get(req, res, next);
    res.render("jobs");
});

/* Post user  */
//router.post("/", function(req, res, next) {
//    userController.user_create(req, res, next);
//});
module.exports = router;