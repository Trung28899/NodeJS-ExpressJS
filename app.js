const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In Middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In Another Middleware");
  /*
    send() allow us to send a response

    NOTICE: we don't need to call
    next() in the last middleware,
    it wont do anything
  */
  res.send("<h1>Hello Dawg</h1>");
  next();
});

const server = http.createServer(app);

server.listen(3000);
