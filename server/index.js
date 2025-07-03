const express = require('express');
const app = express();

// packages
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

// connection to DB and cloudinary
const { connectDB } = require('./config/database');
const { cloudinaryConnect } = require('./config/cloudinary');

// routes
const userRoutes = require('./routes/user');
const profileRoutes = require('./routes/profile');
const paymentRoutes = require('./routes/Payments');
const courseRoutes = require('./routes/Course');
const contactUsRoute = require('./routes/Contact');

// middlewar
app.use(express.json()); 
app.use(cookieParser());
app.use(
  cors({
  origin: [
    "http://localhost:3000",
    "https://lalit-upskill.netlify.app",
    "https://upskill-frontend-exu8.onrender.com"
  ],
  credentials: true
})

);

// connections
connectDB();
cloudinaryConnect();

// mount routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

// default route
app.get('/', (req, res) => {
  res.send(`<div>
    This is Default Route  
    <p>Everything is OK</p>
  </div>`);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});
