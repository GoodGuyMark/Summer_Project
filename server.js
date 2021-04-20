var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

var Users = require("./routes/Users.js");
app.use("/users", Users);

var Pianos = require("./routes/Pianos.js");
app.use("/pianos", Pianos);

app.get("/", (req, res) => {
	res.send("Default route of server at 3000");
});

app.listen(port, function() {
	console.log("Server is running on port " + port);
});
