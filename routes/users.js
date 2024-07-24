var express = require("express");
var router = express.Router();
const usermodel = require("../models/usermodel");
const postModel = require("../models/postmodel");
const passport = require("passport");
const isLoggedIn = require("../middleware/auth");
const { sendmail } = require("../config/nodemailer");
const upload = require("../config/multerconfig");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(usermodel.authenticate()));

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", async function (req, res, next) {
  try {
    const { username, password, email } = req.body;
    const immutabledata = { username, email };
    const encrypteddata = password;
    const newuser = await usermodel.register(immutabledata, encrypteddata);
    // newuser.save()
    res.redirect("/login");
  } catch (error) {
    console.log(error.message);
  }
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/users/profile",
    failureRedirect: "/login",
  })
);

router.get("/profile", function (req, res, next) {
  try {
    res.render("profile", { title: "PROFILE", user: req.user });
  } catch (error) {
    console.log(error.message);
  }
});
router.post(
  "/createpost",
  upload.single("postimage"),
  async function (req, res, next) {
    try {
      let post = await postModel.findone;
      req.file.filename
      // res.redirect("/")
    } catch (error) {}
  }
);

module.exports = router;
