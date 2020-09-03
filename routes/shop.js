const express = require("express");
// Required Syntax, this is a core module
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  /*
        This will return the file in /views/shop.html
        for the according route

        we can't put '/views/shop.html' in the join
        because: 
            1. It will look from the root folder of the
            machine
            2. Different operation system has different
            routes. E.g: 
                Mac, Linux: username/aFile/anotherFile
                Windows: username\aFile\anotherFile
        
        path.join will return the current directory of this 
        file. In this case we have 'routes' directory
    */
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
