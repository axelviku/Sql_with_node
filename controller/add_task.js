const service = require('../service/add_task_service');
const db = require('../models/index');
const { Op, QueryTypes } = require('sequelize');
const { add_task } = require('../models');

module.exports.add_task_field_tracking = async function add_task_field_tracking(req,res){
    try {
        console.log(req.body);
        const Body = req.body;
        const returnData = await service.add_task(Body)
        return res.send({status:'success',message:'Task added succesfully',data:returnData})
    } catch (error) {
        console.log(error);
        return res.send({status:'error', message:error.message})
    }
}