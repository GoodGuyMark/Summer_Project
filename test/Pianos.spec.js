var chai = require("chai");
var chaiHttp = require("chai-http");
var assertArrays = require("chai-arrays");
var expect = require("chai").expect;
var mysql = require("mysql");
var pianos = require("../routes/Pianos");
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

describe("Piano Successful API Routes", function() {
	this.timeout(5000);
	before(function() {
		var queryString = "ALTER TABLE Piano AUTO_INCREMENT = 103";
		getConnection().query(queryString);
	});

	after(function() {
		var queryString = "ALTER TABLE Piano AUTO_INCREMENT = 103";
		getConnection().query(queryString);
	});

	it("GET request should get all pianos", function(done) {
		chai.request(baseUrl)
			.get("/pianos/getPianos")
			.end(function(err, res) {
				expect(res.status).to.equal(200);
				expect(res.body).to.be.array();
				expect(res.body).to.be.ofSize(103);
				done();
			});
	});

	it("GET/:id request should get a single piano", function(done) {
		chai.request(baseUrl)
			.get("/pianos/getOnePiano/1")
			.end(function(err, res) {
				expect(res.status).to.equal(200);
				expect(res.body).to.be.array();
				expect(res.body).to.be.ofSize(1);
				done();
			});
	});

	it("GET all grand pianos", function(done) {
		chai.request(baseUrl)
			.get("/pianos/getGrandPianos")
			.end(function(err, res) {
				expect(res.status).to.equal(200);
				expect(res.body).to.be.array();
				expect(res.body).to.be.ofSize(40);
				done();
			});
	});

	it("GET all upright pianos", function(done) {
		chai.request(baseUrl)
			.get("/pianos/getUprightPianos")
			.end(function(err, res) {
				expect(res.status).to.equal(200);
				expect(res.body).to.be.array();
				expect(res.body).to.be.ofSize(25);
				done();
			});
	});

	it("GET all digital pianos", function(done) {
		chai.request(baseUrl)
			.get("/pianos/getDigitalPianos")
			.end(function(err, res) {
				expect(res.status).to.equal(200);
				expect(res.body).to.be.array();
				expect(res.body).to.be.ofSize(38);
				done();
			});
	});

	it("POST request should create a new piano", function(done) {
		var piano = {
			brand: "newpiano",
			model: "newentry",
			type: "new",
			description: "description",
			price: "€1,000",
			image: "generic.jpg"
		};
		chai.request(baseUrl)
			.post("/pianos/createPiano")
			.send(piano)
			.end(function(err, res) {
				expect(res.status).to.equal(200);
				chai.request(baseUrl)
					.get("/pianos/getPianos")
					.end(function(err, res) {
						expect(res.status).to.equal(200);
						expect(res.body).to.be.array();
						expect(res.body).to.be.ofSize(104);
					});
				done();
			});
	});

	it("PUT request should update a piano", function(done) {
		var piano = {
			id: 104,
			brand: "newpiano",
			model: "newentry",
			type: "new",
			description: "description",
			price: "€1,000",
			image: "generic.jpg"
		};
		chai.request(baseUrl)
			.put("/pianos/updatePiano/" + piano.id)
			.send(piano)
			.end(function(err, res) {
				expect(res.status).to.be.equal(200);
				done();
			});
	});

	it("DELETE/:id request should delete a piano", function(done) {
		var piano = {
			id: 104,
			brand: "updatedpiano",
			model: "newentry",
			type: "new",
			description: "descrption",
			price: "0",
			image: "n/a"
		};
		chai.request(baseUrl)
			.delete("/pianos/deletePiano/" + piano.id)
			.send(piano)
			.end(function(err, res) {
				expect(res.status).to.be.equal(200);
				chai.request(baseUrl)
					.get("/pianos/getPianos")
					.end(function(err, res) {
						expect(res.status).to.equal(200);
						expect(res.body).to.be.array();
						expect(res.body).to.be.ofSize(103);
					});
				done();
			});
	});
});
