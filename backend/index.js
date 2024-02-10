import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { userRoutes } from './routes/user-routes.js';
import { eventRoutes } from './routes/event-routes.js';
import { registrationRoutes } from './routes/registration-routes.js';

dotenv.config();

connectDB();

const app = express();
const serverHttp = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/user",userRoutes);
app.use("/event",eventRoutes);
app.use("/register",registrationRoutes);
// Enable CORS
app.use(cors());


});

serverHttp.listen(6000,() => console.log("Server is started on port 6000"));