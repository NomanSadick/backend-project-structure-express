const express = require('express');
const router = require('./src/Routes/api');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Require dotenv
dotenv.config(); // Load environment variables from config.env

// Security Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(rateLimit({ max: 100, windowMs: 60 * 60 * 1000 }));
app.use(mongoSanitize());

async function connectToDatabase() {
    const URI = "mongodb+srv://johan111:johan111@cluster0.rbbqn.mongodb.net/shopping-cart?retryWrites=true&w=majority";
    try {
        await mongoose.connect(URI);
        console.log("Connection Success");
    } catch (error) {
        console.error("Connection Error:", error);
    }
}

connectToDatabase();

// Routes setup goes here
app.use("/api", router);



app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;

