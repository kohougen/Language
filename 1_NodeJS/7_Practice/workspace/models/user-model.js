'use strict';

/**
 * User Sequelize Object Mapping
 */
module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define("user", {
		email: {
			type: Sequelize.STRING(20),
			primaryKey: true,
			allowNull: false,
			comment: "User's email"
		},
		employeeNo: {
			type: Sequelize.STRING(20),
			allowNull: false,
			comment: "User's employee number"
		},
		age: {
			type: Sequelize.INTEGER,
			allowNull: false,
			comment: "User's employee number"
		},
		languagePreference: {
			type: Sequelize.STRING(2),
			allowNull: false,
			defaultValue: "EN",
			comment: "Prefered language"
		},
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE
	});

	// user.associate = (models) => {
	// 	user.belongsToMany(models.group, {
	// 		through: 'userGroups',
	// 		as: 'groups',
	// 		foreignKey: 'userId'
	// 	});
	// }

	return user;
}