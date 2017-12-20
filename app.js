const express = require("express");
const app = express();

// var express = require("express");
// var https = require("https");
// var http = require("http");
// var app = express();
// var options = {};
// http.createServer(app).listen(80);
// https.createServer(options, app).listen(443);

/* DOT ENV */
require("dotenv").config();
const key = process.env.googleMAPKEY;

/* ROUTES */
app.get("/", (req, res) => res.end("hi"));

/* SERVER */
const port = 8008;
const host = "127.0.0.1";

app.listen(host, port, () => console.log("running"));
