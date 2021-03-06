'use strict';

export default followerCreateMigration = {
    up: async (queryInterface, DataTypes) => {
        return queryInterface.createTable('followers', {
            id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            target: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM,
                values: ['pending', 'following', 'rejected'],
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('followers');
    },
};
