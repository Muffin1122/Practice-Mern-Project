// const mongoose = require("mongoose");

// const DBConfig = ()  =>  {

//     mongoose.connect(process.env.MONGODB_CLOUD)
//     .then( conn => console.log(`DB connected with ${conn.connection.host}`))
//     .catch( err => console.log(`DB connection failed ..... ${err.message}`));
    
// }

// module.exports = DBConfig;


const mongoose = require('mongoose');
const connectDB =  () => {
    mongoose.connect(process.env.MONGODB_CLOUD)
       .then( conn => console.log(`DB connected with ${conn.connection.host}`))
     .catch( err => console.log(`DB connection failed ..... ${err.message}`));
};

module.exports = connectDB;