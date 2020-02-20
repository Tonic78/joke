// import express
const express = require('express')

// create server
const app = express()

// HTML string
const page = `<html>
  <head>
    <title>Guy Mertz</title>
    <style>
      body {
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Why did the developer stay home from work?</h1>
    <p>(s)he had a code!</p> 
  </body>
</html>`

// register GET /page endpoint
app.get(
  '/', // route
  (request, response) => { // handler callback
    // send HTML string to client
    response.send(page)
  }
)

// use $PORT if it is defined
// use 3000 if $PORT is not defined
const port = process.env.PORT || 3000

// start listening
app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)
