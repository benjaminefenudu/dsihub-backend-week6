const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Code Guys!</h1>");
    console.log(res);
})

const products = [
    {
        name: "Phone",
        price: 200,
        image: "https://wriiii.jpg"
    },
    {
        name: "Tablet",
        price: 150,
        image: "https://abciiii.jpg"
    }
]


app.get("/file", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

// Handle JSON
app.get("/products", (req, res) => {
    res.status(200).json(products);
})

// Handle 404 wildcard
app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "error.html"))
})

// Middleware
// app.use((req, res, next) => {
// res.status(404).sendFile(path.join(__dirname, "public", "error.html"))
// })

app.listen(PORT, () => console.log(`Server started on port http://127.0.0.1:${PORT}`))