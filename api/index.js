import express from "express";

import dotenv from 'dotenv'
import mongoose from 'mongoose'

// import routes
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
import hotelsRouter from "./routes/hotels.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB);
      console.log('Connected to MongoDB')
    } catch (error) {
      throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected');
})

// Middleware
app.use('api/auth', authRouter)
app.use('api/users', usersRouter)
app.use('api/rooms', roomsRouter)
app.use('api/hotels', hotelsRouter)


app.listen(8800, () => {
    connect()
    console.log('Connected to backend!');
})