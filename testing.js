var express = require("express");
var https = require("https");
var http = require("http");
var app = express();
const fs = require("fs");
/* ssl encryption things */
var key = fs.readFileSync("test.key");
var cert = fs.readFileSync("test.crt");
// var ca = fs.readFileSync("encryption/intermediate.crt");
var options = {
  key,
  cert
};

/* DOT ENV */
require("dotenv").config();
const API_KEY = process.env.googleMAPKEY;

/* ROUTES */
app.get("/", (req, res) => res.end("hi"));

/* SERVER */
const port = 3003;
const p2 = 8081;
const hostname = "127.0.0.1";

// app.listen(port, hostname, () => console.log("running"));
http.createServer(app).listen(port);
https.createServer(options, app).listen(p2);
