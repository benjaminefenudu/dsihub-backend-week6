const express = require('express');
const app = express();
const moment = require("moment")
const PORT = process.env.PORT || 5000;
const fs = require("fs");

app.use(express.json())

// Model
const Users = require("./models/Users")

// function sayHello(req, res, next) {
//     const time = `Time: ${(moment().format('MMMM Do YYYY, h:mm:ss a'))}`;
//     console.log("Hello");
//     fs.writeFileSync("week3", time)
//     next();
// }

// const loggedMiddleware = function(req, res, next) {
//     const time = `Time: ${(moment().format('MMMM Do YYYY, h:mm:ss a'))}`;
//     const path = req.path;
//     console.log(`Log: ${time} - ${path}`)
//     next()

// }

// const isLoggedIn = (req, res, next) => {
//     const {login} = req.query
//     if (login === "true") {
//         next()
//     } else {
//         console.log("<h1>no logged in user</h1>")
//         next()
//     }
// }

// const computation = (req, res, next) => {
//     req.comp = 2 + 2;
//     next();
// }

// // App-level Middleware
// // app.use(sayHello);
// // app.use(loggedMiddleware)

// app.get("/", (req, res) => {
//     res.send('<h1>Hello</h1>')
// })

// app.get("/protected", [isLoggedIn, loggedMiddleware], (req, res) => {
//     res.send(`<h1>This is a protected file.</h1>`)
// })

// app.get("/protected/comp", [isLoggedIn, loggedMiddleware, computation], (req, res) => {
//     res.json(req.comp)
// })

app.post("/users", (req, res) => {
    Users.push(req.body);
    res.json(Users);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))