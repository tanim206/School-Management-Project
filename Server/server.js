const express = require('express');
require("dotenv").config();
const { clerkMiddleware } = require('@clerk/express');
const userRouter = require('./src/routes/userRouter');
const dbconnect = require('./src/config/dataBase');
const noticeRouter = require('./src/routes/noticeRouter');
const app = express();
const PORT = process.env.portNumber || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    secretKey: process.env.CLERK_SECRET_KEY
}))
app.get("/", (req, res) => {
    res.send("School Management Server is Running ...")
})

// ***** URL

app.use("/api/v1/user", userRouter) // 01
app.use("/api/v1/notice", noticeRouter) // 02


app.listen(PORT, async () => {
    try {
        await dbconnect()
        console.log(`Server is running at http://localhost:${PORT}`);
    } catch (error) {
        console.log("Failed to start the server due to a DB Connection Error", error);
        process.exit()
    }
})


