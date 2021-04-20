const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequlize.define(
	"piano",
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		brand: {
			type: Sequelize.STRING
		},
		model: {
			type: Sequelize.STRING
		},
		type: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING
		},
		price: {
			type: Sequelize.STRING
		},
		image: {
			type: Sequelize.STRING
		},
		created: {
			type: Sequelize.STRING,
			defaultValue: Sequelize.NOW
		}
	},
	{
		timestamps: false
	}
);
