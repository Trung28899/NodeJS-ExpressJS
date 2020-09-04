const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

/*
  Setting up public folder to server files 
  statically, you can now serve any file 
  in this public folder statically 

  See files in ./views to understand how to use 
  Files that are served Statically (CSS files)

  NOTE THAT: for html files in ./views, we use
  <link rel="stylesheet" href="/css/main.css" />

  instead of 
  <link rel="stylesheet" href="/public/css/main.css" />

  Because serve the public folder statically so it
  acts like default folder
*/
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views/404.html"));
});

app.listen(3000);
