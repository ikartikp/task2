var express = require('express');
var router = express.Router();


router.get("/",function (req,res,send) {
res.render("index",{title:"HOME"})
})

router.get("/login",function (req,res,send) {
  res.render("login",{title:"LOGIN"})
  })

  router.get("/register",function (req,res,send) {
    res.render("register",{title:"REGISTER"})
    })

    router.get("/createpost",function (req,res,send) {
      res.render("createpost",{title:"CREATEPOST"})
      
      })

module.exports = router;
