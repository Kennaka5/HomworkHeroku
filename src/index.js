// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World HomeWork!</h1>")
})

// /math/add.json?a=10&b=33
app.get("/math/add.json", function (req, res) {
  if(req.query.a && req.query.b){
    const addValue = parseInt(req.query.a) + parseInt(req.query.b); 
    return res.json({value: addValue})
  }
  res.status(400).json({message: "failed to parse query"})
})

app.get("/random/string.json", function (req, res) {
  var queryLength = req.query.length // be sure to handle errors of not passing proper values
  const generateRandomString = function(length=queryLength){
    return Math.random().toString(20).substr(2, length)
    }
  console.log(generateRandomString())
  return res.status(400).json({message: "need good parameter"})
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));