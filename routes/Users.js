const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var mysql = require("mysql");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";

function getConnection() {
	return mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "admin",
		database: "pianostore"
	});
}

//REGISTER
users.post("/register", (req, res) => {
	const role = "User";
	const userData = {
		username: req.body.username,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		password: req.body.password,
		position: role
	};

	User.findOne({
		where: {
			username: req.body.username
		}
	})
		.then(user => {
			if (!user) {
				const hash = bcrypt.hashSync(userData.password, 10);
				userData.password = hash;
				User.create(userData)
					.then(user => {
						let token = jwt.sign(
							user.dataValues,
							process.env.SECRET_KEY,
							{
								expiresIn: 1440
							}
						);
						res.json({ token: token });
					})
					.catch(err => {
						res.send("Error: " + err);
					});
			} else {
				res.json({ error: "Username already exists" });
			}
		})
		.catch(err => {
			res.send("Error: " + err);
		});
});

//LOGIN
users.post("/login", (req, res) => {
	User.findOne({
		where: {
			username: req.body.username
		}
	})
		.then(user => {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
					expiresIn: 1440
				});
				res.json({ token: token });
			} else {
				res.send("User does not exist");
			}
		})
		.catch(err => {
			res.send("Error: " + err);
		});
});

//PROFILE
users.get("/profile", (req, res) => {
	var decoded = jwt.verify(
		req.headers["authorization"],
		process.env.SECRET_KEY
	);

	User.findOne({
		where: {
			id: decoded.id
		}
	})
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.send("User does not exist");
			}
		})
		.catch(err => {
			res.send("Error " + err);
		});
});

//GET ALL USERS
users.get("/manageUsers", function(req, res) {
	console.log("Getting all users...");
	var queryString = "SELECT * FROM users";
	getConnection().query(queryString, function(err, rows, fields) {
		if (err) {
			console.log("Failed to query users: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("GET all request successful");
		res.json(rows);
	});
});

//DELETE USER
users.delete("/deleteUser/:id", function(req, res) {
	var userId = req.params.id;
	console.log("Attempting to delete user with id: " + userId);
	var queryString = "DELETE FROM Users WHERE id = ?";
	getConnection().query(queryString, [userId], function(
		err,
		results,
		fields
	) {
		if (err) {
			console.log("DELETE request failed: " + err);
			res.sendStatus(500);
			return;
		}
		console.log("DELETE request successful");
		res.end();
	});
});

//UPDATE USER DETAILS
users.put("/updateProfile/:id", (req, res) => {
	var userId = req.body.id;
	const hash = bcrypt.hashSync(req.body.password, 10);
	req.params.password = hash;
	console.log("Attempting to update a user with id " + userId);
	var queryString =
		"UPDATE Users SET id = '" +
		req.body.id +
		"', username = '" +
		req.body.username +
		"', first_name = '" +
		req.body.first_name +
		"', last_name = '" +
		req.body.last_name +
		"', password = '" +
		req.params.password +
		"', position = '" +
		req.body.position +
		"' WHERE id = ?;";
	getConnection().query(queryString, [userId], function(
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

module.exports = users;
