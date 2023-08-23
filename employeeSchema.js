const mongoose = require('mongoose');

    const EmployeeSchema = new mongoose.Schema({
        employeeId:{ type: Number, unique: true },
        name: String,
        Designation:String
    });

        module.exports = EmployeeSchema;