'use strict';

export default userCreateMigration = {
    up: async (queryInterface, DataTypes) => {
        return queryInterface.createTable('users', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
                notEmpty: true,
                validate: {
                    isAge: true,
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                notEmpty: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
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
