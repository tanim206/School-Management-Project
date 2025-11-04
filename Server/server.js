const express = require('express');
require("dotenv").config();
const dbConnect = require('./src/config/dataBase');
const { clerkMiddleware } = require('@clerk/express');
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

app.listen(PORT, async () => {
    try {
        await dbConnect()
        console.log(`Server is running at http://localhost:${PORT}`);
    } catch (error) {
        console.log("Failed to start the server due to a DB Connection Error", error);
        process.exit()
    }
})


