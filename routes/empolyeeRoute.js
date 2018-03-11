'use strict';
var express = require('express');
var router = express.Router();
var employeeService=require('../service/getEmployeeService.js');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(getEmployeeWO());
});

function getEmployeeWO(request,response){
    let wo=[];
    wo.push({'srno':1,'wono':'GSO-ESS761771'});
    wo.push({'srno':2,'wono':'GSO-ESS761801'});
    wo.push({'srno':3,'wono':'GSO-ESS761797'});
    wo.push({'srno':4,'wono':'GSO-ESS760896'});
    return wo;
 }

module.exports = router;
