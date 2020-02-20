// import express
const express = require('express')

// create server
const app = express()

// HTML string
const page = `<html>
  <head>
    <title>Guy Mertz</title>
  </head>
  <body>
    <h1>Get ready to laugh. Joke setup</h1>
    <p>Punchline. So, now you laugh</p> 
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

// 3000 is common
const port = 3000

// start listening
app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)
