'use strict';
const { STRING } = require('sequelize');

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class task_addings extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    task_addings.init({
        project_id:DataTypes.INTEGER,
        task_name:DataTypes.STRING,
        assigne_id:DataTypes.INTEGER,
        company_id:DataTypes.INTEGER,
        task_discription:DataTypes.STRING,
        createdAt:DataTypes.DATE,
        createdBy:DataTypes.INTEGER,
        ip_address:DataTypes.STRING,
        is_recurring:DataTypes.INTEGER,
        task_remarks:DataTypes.STRING,
        task_start_time:DataTypes.DATE,
        end_task_time:DataTypes.DATE,
        task_start_loc_latitude:DataTypes.DECIMAL(50,6),
        task_start_loc_longitude:DataTypes.DECIMAL(50,6),
        task_status:DataTypes.STRING,
        remote_deviceId: DataTypes.STRING,
        device_type:DataTypes.STRING,
        source:DataTypes.STRING,
        total_time_tracking:DataTypes.STRING,
        application_name:DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'task_addings',
    });

    return task_addings;
};