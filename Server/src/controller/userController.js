const { Webhook } = require('svix');
const User = require('../models/userModel');
require('dotenv').config();

const clerkWebHooksHandle = async (req, res) => {
    console.log({clerkWebHooksHandle});
    try {
        const webHookSecret = process.env.CLERK_WEBHOOK_SECRET;
        if (!webHookSecret) {
            console.error("CLERK_WEBHOOK_SECRET not configured");
            return res.status(500).json({
                statusCode: 500,
                message: "CLERK_WEBHOOK_SECRET not configured",
            });
        }

        // Get Webhook headers
        const svixID = req.headers["svix-id"];
        const svixTimestamp = req.headers["svix-timestamp"];
        const svixSignature = req.headers["svix-signature"];

        if (!svixID || !svixTimestamp || !svixSignature) {
            return res.status(400).json({
                statusCode: 400,
                message: "Missing Webhook Headers",
            });
        }

        // Verify webhook
        const wh = new Webhook(webHookSecret);
        let evt;
        try {
            evt = wh.verify(JSON.stringify(req.body), {
                "svix-id": svixID,
                "svix-timestamp": svixTimestamp,
                "svix-signature": svixSignature,
            });
        } catch (err) {
            console.error("Webhook verification failed:", err.message);
            return res.status(400).json({
                statusCode: 400,
                message: "Invalid signature",
                error: err.message,
            });
        }

        // Clerk event data
        const { id, email_addresses, first_name, last_name, image_url } = evt.data;
        const eventType = evt.type;

        console.log(` Webhook received: ${eventType} for user ${id}`);

        switch (eventType) {
            case 'user.created':
                await userCreate(id, email_addresses, first_name, last_name, image_url);
                break;
            case 'user.updated':
                await userUpdate(id, email_addresses, first_name, last_name, image_url);
                break;
            case 'user.deleted':
                await userDelete(id);
                break;
            default:
                console.log(` Unhandled event type: ${eventType}`);
        }
        res.status(200).json({
            statusCode: 201,
            message: "Webhook handled successfully",

        });

    } catch (error) {
        console.error("Internal Server Error:", error.message);
        res.status(500).json({
            statusCode: 500,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

//  Create new user
const userCreate = async (clerkId, email, firstName, lastName, imageUrl) => {
    try {
        const newUser = new User({
            clerkId,
            email: email[0].email_address,
            firstName,
            lastName,
            image_Url: imageUrl,
            role: "user",
        });
        await newUser.save();
        console.log(` User created in MongoDB: ${clerkId}`);
    } catch (error) {
        console.log(` Error creating user:`, error.message);
        throw error;
    }
};

//  Update existing user
const userUpdate = async (clerkId, email, firstName, lastName, imageUrl) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { clerkId },
            {
                email: email[0].email_address,
                firstName,
                lastName,
                image_Url: imageUrl,
            },
            { new: true }
        );

        if (updatedUser) {
            console.log(`User updated in MongoDB: ${clerkId}`);
        } else {
            console.log(`User not found for update: ${clerkId}`);
        }
    } catch (error) {
        console.log(` Error updating user:`, error.message);
        throw error;
    }
};

//  Delete user
const userDelete = async (clerkId) => {
    try {
        const deletedUser = await User.findOneAndDelete({ clerkId });
        if (deletedUser) {
            console.log(` User deleted from MongoDB: ${clerkId}`);
        } else {
            console.log(` User not found for deletion: ${clerkId}`);
        }
    } catch (error) {
        console.log(` Error deleting user:`, error.message);
        throw error;
    }
};

module.exports = clerkWebHooksHandle;
