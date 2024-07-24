require("dotenv").config({path:"./.env"})
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const crypto=require("crypto")
var logger = require('morgan');
const upload=require("./config/multerconfig")
const session= require("express-session")




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const passport = require('passport');
const usermodel =require("./models/usermodel")
const postModel=require("./models/postmodel")

const connectionDB=require("./config/connectiondb").connectionDB()
var app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// passport session use
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:"secret",
}))

// passport.initialize passport
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usermodel.serializeUser());
passport.deserializeUser(usermodel.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
