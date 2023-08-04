var express = require("express");
var router = express.Router();

const add_taskk = require('./controller/add_task');

router.post('/add_task_field_tracking',add_taskk.add_task_field_tracking);

module.exports=router