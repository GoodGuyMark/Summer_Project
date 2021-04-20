const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequlize.define(
	"user",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: Sequelize.STRING
		},
		first_name: {
			type: Sequelize.STRING
		},
		last_name: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},
		position: {
			type: Sequelize.STRING
		}
	},
	{
		timestamps: false
	}
);
