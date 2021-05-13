'use strict';

export default postCreateMigration = {
    up: async (queryInterface, DataTypes) => {
        return queryInterface.createTable('posts', {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                notEmpty: true,
            },
            text: {
                type: DataTypes.TEXT,
                allowNull: false,
                notEmpty: true,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('posts');
    },
};
