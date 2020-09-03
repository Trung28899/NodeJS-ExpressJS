const express = require("express");
// Importing bodyParser
const bodyParser = require("body-parser");

const app = express();

/*
  Required Middleware, use exactly the same in 
  any case

  NOTE THAT: Body parser only parse string in the 
  incoming requests, For other type of requests, 
  we have to use different packages
*/
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='tittle'></input><button type='submit'>Add Product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  /*
    Getting the body parsed

    GUIDE: Go to http://localhost:3000/add-product
    > send some text > go back to terminal to see
    result
  */
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello Dawg</h1>");
});

app.listen(3000);
