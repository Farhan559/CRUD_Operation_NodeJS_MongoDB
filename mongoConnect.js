const mongoose = require('mongoose');
const EmployeeModel = require('./employeeModel');

// Connection URL
const url = 'mongodb://127.0.0.1:27017/Company'; //


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;

// Add the Record
db.once('open', async () => {
    try{
    console.log('Connected to MongoDB');
        const newRecord = new EmployeeModel({
            employeeId:"2",
            name:"Asad",
            Designation:"Graphic Designer"
        })
       await newRecord.save();
       console.log('Record save successfully');
    }
        catch(error){
            console.error('Error saving Record'+error);
        }
       
    });
 

// Find the Record
db.once('open',async ()=>{
    try{
        // console.log('Connected to MongoDb');
        const foundEmployee = await EmployeeModel.findOne({employeeId:'1'});
        if(foundEmployee){
            console.log('Found Employee :',foundEmployee);
        }
        else{
            console.log('Employee not found');
        }

        // upadate the Record
        const updateEmployee = await EmployeeModel.findOneAndUpdate(
            {employeeId:'1'},
            {$set:{name:'Ali',Designation:'Software Engineer'}},
            {new: true}

        )
        console.log('updated Employee',updateEmployee);
        // Delete the Record
        const deleteEmployee = await EmployeeModel.findByIdAndDelete({employeeId:2})
       console.log('Delete Employee', deleteEmployee); 
    }
        catch(error){
        console.log('error'+error.message);

    }
    finally{
        mongoose.connection.close();        
    }
});
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

module.exports = db;
