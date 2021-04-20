const Sequelize = require("sequelize");
const db = {};
const sequlize = new Sequelize("pianostore", "root", "admin", {
	host: "localhost",
	dialect: "mysql",
	operatorAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

db.sequlize = sequlize;
db.Sequelize = sequlize;

module.exports = db;
