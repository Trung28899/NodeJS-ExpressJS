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

IV. Other Notes: 

Module includes: 
    +, What is Express.js
    +, Using Middleware
    +, Working with Requests & Reponses
    (with Express)
    +, Routing (using Express)
    +, Returning HTML Pages (Files)
    using Express
