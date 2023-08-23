const mongoose = require('mongoose');
const EmployeeSchema = require('./employeeSchema');

const EmployeeModel = mongoose.model('Employee',EmployeeSchema,'Employee');
module.exports = EmployeeModel;