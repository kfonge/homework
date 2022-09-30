// Load Express
const express = require("express")

// Create Express app
const app = express()

// Bring in mongoConfig
const mongoConfig = require("./config")

// Bring in packaged routes

const logRoutes = require("./routes/logRoutes")

// Require dotenv
require("dotenv").config()

// view enginge
// Load express - react - views
// This will render the view using react engine on server side
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// Middleware - used to parse incoming request bodies into data/objects and properties on backend, instead of just res.send('string')
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(methodOverride("_method"))

///////// Route - Index////////////

// app.get("/index", (req, res) => {
//   res.render("index")
// })

//////// Route - New////////////
app.use('/logs', logRoutes)

// app.get("/new", (req, res) => {
//   res.render("new")
// })

/////// Route - create////////////
// app.post('/logs', (req, res) => {
//     res.send('received')
//     }

//App.POST is already in logRoutes, referenced in line 35
// app.post("/logs", (req, res) => {
//   if (req.body.shipIsBroken === "on") {
//     req.body.shipIsBroken = true
//   } else {
//     req.body.shipIsBroken = false
//   }
//   res.send(req.body)
// })

// Identify Port
const port = process.env.PORT

// Listen on port
app.listen(port, () => console.log("Listening on port: ", port))

mongoConfig()
