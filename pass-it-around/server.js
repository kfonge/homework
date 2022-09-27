//load express
const express = require(`express`)

//create express app
const app = express()

//identify the port
const port = 3000

//Define a root route (homepage)

// pass it two args, file path and a callback function with homies req + res
app.get(`/`, (req, res) => {
  res.send(
    `<h1>99 Bottles of Beer on the Wall</h1> <a href ="/98" > take one down, pass it around</a>`
  )
})

app.get(`/:num_of_bottles`, (req, res) => {
  const bottles = req.params.num_of_bottles
  if (bottles > 0) {
    res.send(
      `<h1>${bottles} Bottles of Beer on the Wall</h1> <a href = '/${
        bottles - 1
      }'> take one down, pass it around</a>`
    )
  } else {
    res.send("<a href='/'>home</a>")
  }
})

//Listen on a port of your choosing, following convention
app.listen(3000, () => {
  console.log("Listening on port 3000")
})
