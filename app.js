const http = require("http");

const express = require("express");

const app = express();

/*
    In here we run next() because we want this middleware
    to be executed for all routes
*/
app.use("/", (req, res, next) => {
  console.log("This will always run in any routes");
  next();
});

/*
    We don't run next() here so it only render
    correct content for '/add-product'

*/
app.use("/add-product", (req, res, next) => {
  console.log("In '/add-product' Middleware");
  res.send("<h1>This The Add Product Page</h1>");
});

/*
    Handle this for route that start with '/'
    Therefore, if we add any route before this, 
    the page will be returned differently

    Anything else will be rendered the same as 
    '/'
*/
app.use("/", (req, res, next) => {
  console.log("In '/' Middleware");
  res.send("<h1>Hello Dawg</h1>");
});

app.listen(3000);

/*
    Alternative way of listening to port 3000: 
    const server = http.createServer(app);
    server.listen(3000);
*/
