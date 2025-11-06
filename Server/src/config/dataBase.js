const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
    throw new Error("DataBase URL (dbURL) is not define in the environment variables")
}
const dbconnect = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("database is connect successfull");
        mongoose.connection.on("error ", (error) => {
            console.error("Database conection error", error.message);

        })
    } catch (error) {
        console.error("Initial database connection error", error.message);
    }
}

module.exports = dbconnect