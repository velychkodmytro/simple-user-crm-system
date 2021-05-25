'use strict';

const followerCreateMigration = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('followers', {
            id: {
                type: Sequelize.DataTypes.UUID,
                allowNull: false,
            },
            followerId: {
                type: Sequelize.DataTypes.UUID,
                onDelete: 'cascade',
                references: {
                    model: 'users',
                    key: 'id',
                    as: 'followerId',
                },
            },
            targetId: {
                type: Sequelize.DataTypes.UUID,
                onDelete: 'cascade',
                references: {
                    model: 'users',
                    key: 'id',
                    as: 'targetId',
                },
            },
            status: {
                type: Sequelize.DataTypes.ENUM,
                values: ['pending', 'following', 'rejected'],
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('followers');
    },
};
module.exports = followerCreateMigration;
