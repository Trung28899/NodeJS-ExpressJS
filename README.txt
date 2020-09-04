I. Used Tools: 

    - $ npm install --save express
    - $ npm install --save body-parser

II. Core Concepts: 
    1. What is Express: 
        - Framework: Helper functions, tools & rules 
        that help you build your application

        - Express.js: is a NodeJS framework that helps
        us to simplify basics processes of developing
        NodeJS application, such as: handling requests
        and responses, returning pages, etc... 

        - Alternatives to Express.js: 
            +, Basic NodeJS that we have used in 
            the basic of NodeJS (Vanilla Node.JS)
            +, Adonis.js, Koa, Sails.js, etc...
        => Express is the most popular. 
        Big Pros of Express: Very flexible
    
    2. Middleware: 
        - Middleware means that an incoming request is
        automatically funneled through a bunch of function 
        by ExpressJS 
        
        > this allow you can put code in multiple
        pieces when it comes to handling requests 
        
        - Using Middleware, you can handle request in 
        different pieces of code and don't have to 
        put all the hanling in same function. 

        => Middleware is the core concept of Express

        - See part 2 in III to understand how
        Middleware works in code

    3. Serving Files Statically: 
        - Problem: Normally when we type for example: 
        localhost:3000/views/shop.html > we'll get
        page not found. 
        
        - This is because NodeJs don't allow client side 
        to access file system. 

        - Serving Files Statically means we grant the public
        readability for some certain files. 

III. Module Notes:
    1. Setting up express: 
        - 1st Commit
        - Install express: 
            $ npm install --save express
        - Set up code: app.js
    
    2. Middleware: 
        - Middleware Demonstration: 
            +, See 3rd Commit for code and 
            full explanation
        - How Middleware work: 
            +, See 4th Commit for code and 
            full explanation
            See this link to dig deeper into expressjs
            https://github.com/expressjs/express
            https://expressjs.com/ > API Reference 
            to see all the methods
        
    3. Handling different routes: 
        - See 6th or 7th Commit
        (They are the same) 

    4. Parsing Incoming Request with Express:
        - run: 
            $ npm install --save body-parser
        - See Code in 9th Commit

        NOTE: app.use(), app.get(), app.post()
        these are the same thing excepts: 
        +, app.get(): is the middleware for GET 
        requests only
        +, app.post(): is the middleware for post
        requests only
        +, app.use(): can be used for both GET and 
        POST
    
    5. Using Express Router:
        - Code in 11st Commit
        - See ./routes/admin.js and ./routes/shop.js
        to see how to set up Express Router
        - See app.js for how to combined different routes 

    6. Adding 404 Page and Filtering Paths: 
        a. Adding 404 Page: 
            - 12nd Commit
            - go to app.js to see
        b. Filetering Paths: 
            - 12nd Commit 
            - Go to app.js to see 
            - Go to ./routes/admin.js to 
            see different Paths

    7. Serving HTML page, Returning 404 page and 
       and Using a Helper Function for Navigation
       (Getting the root directory of the application):  

        a. Serving Html page: 
            - 11st Commit
            - Adding views file that 
            contains all html Files
            - See /routes/shop.js 
            for explanation
        
        b. Returning 404 page:
            - 12th Commit
            - See app.js

        c. Returning Helper Function for Navigation:
            (Getting the root directory of the application) 
            - 14th Commit
            - Go to helper/path.js to see how to set up
            - Go to routes/shop.js and routes/admin.js to see
            how to import and use it
    
    8. Serving Files Statically: 
        (Granting Files public readability 
         without Routing)
        - Code in 18th Commit
        - See app.js to see how to grant public readability
        to ./public file
        - See files in ./views to understand how to use 
        Files that are served Statically (css files)

        => See Part II. 3 to understand the concept of
        Serving Files Statically


IV. Other Notes: 

Module includes: 
    +, What is Express.js
    +, Using Middleware
    +, Working with Requests & Reponses
    (with Express)
    +, Routing (using Express)
    +, Returning HTML Pages (Files)
    using Express
