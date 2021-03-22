const express = require("express");
const path = require("path");

const port = process.env.port || 3000;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "index.html"));    
});
app.get("/index", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "index.html"));
});
app.use("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "page", "_base", "error.html"));
});

app.listen(port, () => {
    console.log(`Listening at port ${port}...`);
});