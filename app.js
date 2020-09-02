const http = require("http");

const express = require("express");

// declaring express for usage
const app = express();

/*
    use() allow us to add middleware function

    next is a function that will be passed by expressJS
    next must be call so that request can travel on to
    the next middleware
*/
app.use((req, res, next) => {
  console.log("In Middleware");
  /*
    If next() is not called, the code in 
    the next middleware won't be executed

    Simply said, "In Another Middleware" 
    won't be shown if next() is not called
  */
  next();
});

app.use((req, res, next) => {
  console.log("In Another Middleware");
});

const server = http.createServer(app);

server.listen(3000);
