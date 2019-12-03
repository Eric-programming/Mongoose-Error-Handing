# Mongoose-Error-Handing
This is a Error Handing for Mongoose MIDDLEWARE 

Requirement:
- Have process.env.NODE_ENV Defined ("development" or "production")

How-To:
1. insert the middleware inside the index.js (OR default js file) after all Routers.
example: 
    express().use(errorHandingFunc)
2. For all the errors in your code. Pass the error and Error Status Code to the ErrorClass from ErrorClass.js file. Then pass the new Error Object into the "next()"

3. As result, it will automatically pass them to the MainErrorHanding Function. 

