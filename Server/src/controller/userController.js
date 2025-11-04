const { webHook } = require('svix')

const clerkWebHooksHandle = async (req, res) => {
    try {
        const webHookSecret = process.env.CLERK_WEBHOOK_SECRET;
        if (!webHookSecret) {
            console.error("CLERK_SECRET_KEY not configured");
            res.status(500).json({
                statusCode: 500,
                message: "CLERK_SECRET_KEY not configured",
                error: error,
            })
        }
        //Get WebHOOK headers
        const svixID = req.headers["svix-id"];
        const svixTimestamp = req.headers["svix-timestamp"];
        const svixSignature = req.headers["svix-signature"];

        if (!svixID || svixTimestamp || svixSignature) {
            res.status(500).json({
                statusCode: 404,
                message: "Missing Webhook Hearders",
                error: error,
            })
        }
        // Create Webhok Intance
        const wh = new webHook(webHookSecret);
        let evt;
        try {
            evt = wh.verify(JSON.stringify(req.body), {
                "svix-id": svixID,
                "svix-timestamp": svixTimestamp,
                "svix-signature": svixSignature,
            });
        } catch (err) {
            console.error("webhook verification failed".err.message);
            res.status(404).json({
                statusCode: 404,
                message: "Invalid Signature",
                error: err,
            })
        }
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Internal Server Error",
            error: error,
        })
    }
}

module.exports =clerkWebHooksHandle 