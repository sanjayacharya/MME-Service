'use strict';
var express = require('express');
var router = express.Router();
var employeeService = require('../service/getEmployeeService.js');

/* GET users listing. */
router.get('/', employeeService.getEmployeeWO);

router.get('/:id', employeeService.getEmployeeMaster);

module.exports = router;
