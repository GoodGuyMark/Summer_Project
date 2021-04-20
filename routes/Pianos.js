const express = require("express");
const pianos = express.Router();
const cors = require("cors");
const mysql = require("mysql");

const Piano = require("../models/Piano");
pianos.use(cors());

function getConnection() {
	return mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "admin",
		database: "pianostore"
	});
}

//GET ALL PIANOS
pianos.get("/getPianos", (req, res) => {
	var queryString = "SELECT * FROM Piano";
	getConnection().query(queryString, function(err, rows, fields) {
		if (err) {
			console.log("Error in getting pianos: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("GET all pianos successful");
		res.json(rows);
	});
});

//GET ONE PIANO
pianos.get("/getOnePiano/:id", (req, res) => {
	var pianoId = req.params.id;
	var queryString = "SELECT * FROM Piano WHERE id = ?";
	getConnection().query(queryString, [pianoId], (err, rows, fields) => {
		if (err) {
			console.log("Failed to query piano: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("GET one request successful");
		res.json(rows);
	});
});

//CREATE PIANO
pianos.post("/createPiano", function(req, res) {
	var queryString =
		"INSERT INTO Piano (`brand`, `model`, `type`, `description`, `price`, `image`) VALUES ('" +
		req.body.brand +
		"', '" +
		req.body.model +
		"', '" +
		req.body.type +
		"', '" +
		req.body.description +
		"', '" +
		req.body.price +
		"', '" +
		req.body.image +
		"');";
	getConnection().query(queryString, (err, results, fields) => {
		if (err) {
			console.log("POST request failed: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("POST request successful");
		res.end();
	});
});

//UPDATE PIANO DETAILS
pianos.put("/updatePiano/:id", function(req, res) {
	var pianoId = req.params.id;
	var queryString =
		"UPDATE Piano SET id = '" +
		req.body.id +
		"', brand = '" +
		req.body.brand +
		"', model = '" +
		req.body.model +
		"', type = '" +
		req.body.type +
		"', description = '" +
		req.body.description +
		"', price = '" +
		req.body.price +
		"', image = '" +
		req.body.image +
		"' WHERE id = ?;";
	getConnection().query(queryString, [pianoId], function(
		err,
		results,
		fields
	) {
		if (err) {
			console.log("PUT request failed: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("PUT request successful");
		res.end();
	});
});

//DELETE PIANO
pianos.delete("/deletePiano/:id", function(req, res) {
	var pianoId = req.params.id;
	var queryString = "DELETE FROM Piano WHERE id = ?";
	getConnection().query(queryString, [pianoId], (err, results, fields) => {
		if (err) {
			console.log("DELETE request failed: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("DELETE request successful");
		res.end();
	});
});

//GET GRAND PIANOS
pianos.get("/getGrandPianos", (req, res) => {
	var queryString = "SELECT * FROM Piano WHERE `type` = 'Grand'";
	getConnection().query(queryString, (err, rows, fields) => {
		if (err) {
			console.log("GET type request failed: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("GET type request successful");
		res.json(rows);
	});
});

//GET UPRIGHT PIANOS
pianos.get("/getUprightPianos", (req, res) => {
	var queryString = "SELECT * FROM Piano WHERE `type` = 'Upright'";
	getConnection().query(queryString, (err, rows, fields) => {
		if (err) {
			console.log("GET type request failed: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("GET type request successful");
		res.json(rows);
	});
});

//GET DIGITAL PIANOS
pianos.get("/getDigitalPianos", (req, res) => {
	var queryString = "SELECT * FROM Piano WHERE `type` = 'Digital'";
	getConnection().query(queryString, (err, rows, fields) => {
		if (err) {
			console.log("GET type request failed: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("GET type successful");
		res.json(rows);
	});
});
module.exports = pianos;
