'use strict';

const postCreateMigration = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('posts', {
            id: {
                type: Sequelize.DataTypes.UUID,

                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                notEmpty: true,
            },
            text: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false,
                notEmpty: true,
            },
            ownerId: {
                type: Sequelize.DataTypes.UUID,
                onDelete: 'cascade',
                references: {
                    model: 'users',
                    key: 'id',
                    as: 'ownerId',
                },
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('posts');
    },
};
module.exports = postCreateMigration;
