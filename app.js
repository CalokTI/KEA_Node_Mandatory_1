const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

const fs = require("fs");

const head = fs.readFileSync("./public/components/head.html").toString();
const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();


const homePage = fs.readFileSync("./public/home/home.html").toString();
const gitPage = fs.readFileSync("./public/git/git.html").toString();
const expressPage = fs.readFileSync("./public/express/express.html").toString();
const toolsPage = fs.readFileSync("./public/tools/tools.html").toString();


app.get("/", (req, res) => {
    res.send(head.replace("%%DOCUMENT_TITLE%%","home") + nav + homePage+ footer)
})

app.get("/git", (req, res) => {
    res.send(head.replace("%%DOCUMENT_TITLE%%","git good").replace("%%CSS_LOCATION%%", "git.css").replace("%%JS_LOCATION%%", "git.js") + nav + gitPage + footer)
})

app.get("/express", (req, res) => {
    res.send(head.replace("%%DOCUMENT_TITLE%%","express").replace("%%CSS_LOCATION%%", "express.css").replace("%%JS_LOCATION%%", "express.js") + nav + expressPage + footer)
})

app.get("/tools", (req, res) => {
    res.send(head.replace("%%DOCUMENT_TITLE%%","screw this").replace("%%CSS_LOCATION%%", "tools.css").replace("%%JS_LOCATION%%", "tools.js") + nav + toolsPage + footer)
})





//PORT - at the bottom 
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server started on port:', port);
});