const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    clerkID: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    image_Url: {
        type: String,
    },
    role: {
        type: String,
        enum: ["user", "moderator", "admin"],
        default: "user"
    },
},
    { timestamps: true })
    const user = model("user", userSchema)


    module.exports=user