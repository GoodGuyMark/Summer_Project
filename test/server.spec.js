var chai = require("chai");
var chaiHttp = require("chai-http");
var expect = require("chai").expect;
var server = require("../server");
chai.use(chaiHttp);
const baseUrl = "http://localhost:3000";

describe("server.js server test", function() {
	this.timeout(5000);
	it("Should return status 200", function(done) {
		chai.request(baseUrl)
			.get("/")
			.end((err, res) => {
				expect(res.status).to.be.equal(200);
				done();
			});
	});
});
