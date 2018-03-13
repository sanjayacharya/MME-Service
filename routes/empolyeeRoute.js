'use strict';
var express = require('express');
var router = express.Router();
var employeeService = require('../service/getEmployeeService.js');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(getEmployeeWO());
});

router.get('/:id', function (req, res) {
    var empresult = getEmployeeMaster();
    var empData = empresult.filter(function (el) {
        return (el.employeeno === req.params.id);
    });
    res.send(empData);
});

function getEmployeeMaster(request, response) {
    let wo = [];
    wo.push({ srno: 1, employeeno: '123456789', employeename: 'Suyash Singh', email: 'suyash.singh@accenture.com', wono: 'GSO-ESS761771', location: 'offShore', billabletype: 'billable' });
    wo.push({ srno: 2, employeeno: '234567891', employeename: 'Sanjay A', email: 'suyash.singh@accenture.com', wono: 'GSO-ESS761801', location: 'offShore', billabletype: 'buffer' });
    wo.push({ srno: 3, employeeno: '345678912', employeename: 'Monika A', email: 'suyash.singh@accenture.com', wono: 'GSO-ESS761797', location: 'onShore', billabletype: 'billable' });
    wo.push({ srno: 4, employeeno: '456789123', employeename: 'Ramesh K', email: 'suyash.singh@accenture.com', wono: 'GSO-ESS760896', location: 'onShore', billabletype: 'buffer' });
    return wo;
}

function getEmployeeWO(request, response) {
    let wo = [];
    wo.push({ srno: 1, wono: 'GSO-ESS761771' });
    wo.push({ srno: 2, wono: 'GSO-ESS761801' });
    wo.push({ srno: 3, wono: 'GSO-ESS761797' });
    wo.push({ srno: 4, wono: 'GSO-ESS760896' });
    return wo;
}

module.exports = router;
