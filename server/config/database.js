// const mongoose = require("mongoose");
// require("dotenv").config();

// // Load the MongoDB URL from the .env file
// const MONGODB_URL = process.env.MONGODB_URL;
// console.log("MongoDB URI:", MONGODB_URL);  // Debugging line

// // Check if MONGODB_URL is missing
// if (!MONGODB_URL) {
//   console.error("MongoDB URL is missing!");
// }

// exports.connect = () => {
//   mongoose
//     .connect(MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("DB Connection Success"))
//     .catch((err) => {
//       console.log("DB Connection Failed");
//       console.log(err);
//       process.exit(1);
//     });
// };






const mongoose = require('mongoose');
require('dotenv').config();


exports.connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Database connected succcessfully');
        })
        .catch(error => {
            console.log(`Error while connecting server with Database`);
            console.log(error);
            process.exit(1);
        })
};