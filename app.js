var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');

var app = express();
const WebSocket = require('ws');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.set('views','./views');
app.set('view engine', 'ejs');




module.exports = app;