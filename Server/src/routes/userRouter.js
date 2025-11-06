const {Router} = require('express');
const clerkWebHooksHandle = require('../controller/userController');
const userRouter = Router();


//  http://localhost:4000/api/v1/clerk-webhook
userRouter.post("/clerk-webhook",clerkWebHooksHandle )


module.exports= userRouter