'use strict';
const { STRING } = require('sequelize');

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class task_adding extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    task_adding.init({
        latitude: DataTypes.DECIMAL(50,6),
        longitude: DataTypes.DECIMAL(50,6),
        remote_deviceId: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        Time: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'task_adding',
    });

    return task_adding;
};