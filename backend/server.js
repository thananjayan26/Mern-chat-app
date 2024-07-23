import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from '../backend/db/connectToMongoDB.js'

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json()); 
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    // root route http://localhost:8000/
    res.send("HEkjbjllo")
});


app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`server running on ${PORT}`)
});