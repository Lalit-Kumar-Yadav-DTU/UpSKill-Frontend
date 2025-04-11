const Razorpay = require("razorpay");

// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });

const RAZORPAY_KEY = "rzp_test_abcd"

const RAZORPAY_SECRET = "12345abcde"

exports.instance = new Razorpay({
	key_id: RAZORPAY_KEY,
	key_secret: RAZORPAY_SECRET,
});




// require("dotenv").config(); // Load the environment variables from .env file

// const Razorpay = require("razorpay");

// exports.instance = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY, // Get the key from environment variable
//   key_secret: process.env.RAZORPAY_SECRET, // Get the secret from environment variable
// });
