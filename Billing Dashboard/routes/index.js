var express=require('express');
var controller=require('../controllers/index')
var route=express.Router();
route.get('/bill',controller.getBills);
route.get('/bill/:id',controller.getBillById);
route.post('/bill',controller.postBills);
route.put('/bill/:id',controller.EditBills);
route.delete('/bill/:id',controller.DeleteBill);
route.get('/bills',controller.getBillsDue);
route.get('/billsover',controller.getBillsCompleted);
module.exports=route;