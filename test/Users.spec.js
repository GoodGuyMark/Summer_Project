var chai = require("chai");
var chaiHttp = require("chai-http");
var assertArrays = require("chai-arrays");
var expect = require("chai").expect;
var mysql = require("mysql");
var users = require("../routes/Users");
chai.use(chaiHttp);
chai.use(assertArrays);
const baseUrl = "http://localhost:3000";

function getConnection() {
	return mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "admin",
		database: "pianostore"
	});
}

describe("User API routes", function() {
	this.timeout(5000);
	before(function() {
		var queryString = "ALTER TABLE Users AUTO_INCREMENT = 1";
		getConnection().query(queryString);
	});

	after(function() {
		var queryString = "ALTER TABLE Users AUTO_INCREMENT = 1";
		getConnection().query(queryString);
	});

	it("GET request should get all users", function(done) {
		chai.request(baseUrl)
			.get("/users/manageUsers")
			.end((err, res) => {
				expect(res.status).to.be.equal(200);
				expect(res.body).to.be.array();
				expect(res.body).to.be.ofSize(1);
				done();
			});
	});

	it("POST request should create a new user", function(done) {
		var now = new Date();
		var user = {
			username: "user",
			first_name: "user",
			last_name: "user",
			password: "password",
			position: "User"
		};
		chai.request(baseUrl)
			.post("/users/register")
			.send(user)
			.end(function(err, res) {
				expect(res.status).to.equal(200);
				done();
			});
	});

	it("PUT request should update a user", function(done) {
		var user = {
			id: 2,
			username: "updatedUser",
			first_name: "user",
			last_name: "user",
			password: "password",
			position: "User"
		};
		chai.request(baseUrl)
			.put("/users/updateProfile/" + user.id)
			.send(user)
			.end(function(err, res) {
				expect(res.status).to.be.equal(200);
				done();
			});
	});

	it("DELETE request should delete a user", function(done) {
		var user = {
			id: 2,
			username: "updatedUser",
			first_name: "user",
			last_name: "user",
			password: "password",
			postion: "User"
		};
		chai.request(baseUrl)
			.delete("/users/deleteUser/" + user.id)
			.send(user)
			.end(function(err, res) {
				expect(res.status).to.be.equal(200);
				done();
			});
	});
});
