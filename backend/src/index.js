import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'

dotenv.config();

const app = express();
app.use(cors({ origin: true }));

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoute)

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
    connectDB();
})