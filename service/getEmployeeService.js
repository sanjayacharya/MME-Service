'use strict';
var express = require('express');

const employeeDataService={
     getEmployeeWO:function(request,response,next){
        var options = {
            url: '',
            method: 'GET',
            headers: {
            }
        };
        return new Promise(function(resolve,reject){
            // request(options,function(err,res,body){
            //     if(!err){
                    let wo=[];
                    wo.push({'srno':1,'wono':'GSO-ESS761771'});
                    wo.push({'srno':2,'wono':'GSO-ESS761801'});
                    wo.push({'srno':3,'wono':'GSO-ESS761797'});
                    wo.push({'srno':4,'wono':'GSO-ESS760896'});
                   resolve(wo);
                   response.send(wo);
            //     }
            //     else{
            //         reject('Service error');
            //     }
            // })
        });        
     },

     getEmployeeMaster:function(request, response) {
        let wo = [];
        wo.push({ srno: 1, employeeno: '123456789', employeename: 'Suyash Singh', email: 'suyash.singh@accenture.com', wono: 'GSO-ESS761771', location: 'offShore', billabletype: 'billable' });
        wo.push({ srno: 2, employeeno: '234567891', employeename: 'Sanjay A', email: 'suyash.singh@accenture.com', wono: 'GSO-ESS761801', location: 'offShore', billabletype: 'buffer' });
        wo.push({ srno: 3, employeeno: '345678912', employeename: 'Monika A', email: 'suyash.singh@accenture.com', wono: 'GSO-ESS761797', location: 'onShore', billabletype: 'billable' });
        wo.push({ srno: 4, employeeno: '456789123', employeename: 'Ramesh K', email: 'suyash.singh@accenture.com', wono: 'GSO-ESS760896', location: 'onShore', billabletype: 'buffer' });
        var empData = wo.filter(function (el) {
            return (el.employeeno === request.params.id);
        });
        response.send(empData);
    }
     
}

module.exports=employeeDataService;

// function getEmployeeDetails(request,response){
   
// }