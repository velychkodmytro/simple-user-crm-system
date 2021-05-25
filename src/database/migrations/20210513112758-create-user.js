'use strict';

const userCreateMigration = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            username: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                notEmpty: true,
                validate: {
                    isAge: true,
                },
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                notEmpty: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                notEmpty: true,
                validate: {
                    isPassword: true,
                },
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    },
};

module.exports = userCreateMigration;
