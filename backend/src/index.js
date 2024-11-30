import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'
import { app, server } from './lib/socket.js';

dotenv.config();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoute)

server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
    connectDB();
})