const { task_addings } = require('../models');
const { sequelize } = require('../models/index');
const db = require('../models/index');
const {QueryTypes } = require('sequelize');

module.exports.add_task = async function add_task(data) {
    console.log("--", data);
    try {
        // const newTask = await task_adding.create({
        //     project_id: data.project_id,
        //     task_name: data.task_name,
        //     assigne_id: data.assigne_id,
        //     company_id: data.company_id,
        //     task_discription: data.task_discription,
        //     createdAt: new Date(),
        //     createdBy: data.createdBy,
        //     ip_address: data.ip_address,
        //     is_recurring: data.is_recurring,
        //     task_remarks: data.task_remarks,
        //     task_start_time: data.task_start_time,
        //     end_task_time: data.end_task_time,
        //     task_start_loc_latitude: data.task_start_loc_latitude,
        //     task_start_loc_longitude: data.task_start_loc_longitude,
        //     task_status: data.task_status,
        //     remote_deviceId: data.remote_deviceId,
        //     device_type: data.device_type,
        //     source: data.source,
        //     total_time_tracking: data.total_time_tracking,
        //     application_name: data.application_name,
        // });
        const newTask = await db.sequelize.query(`select * from task_addings`,
        {
            type: QueryTypes.SELECT
        })
        return newTask;
    } catch (error) {
        console.log(error);
        return error
    }
}