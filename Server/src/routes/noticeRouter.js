const {Router} = require('express');
const { noticeCreateHandler, noticeFindHandler, singleNoticeFindHandler, deleteNoticeHandler, updateNoticeHandler } = require('../controller/noticeController');

const noticeRouter = Router();
noticeRouter.post("/create",noticeCreateHandler )
noticeRouter.get("/find",noticeFindHandler )
noticeRouter.get("/find-single/:id",singleNoticeFindHandler )
noticeRouter.delete("/delete/:id",deleteNoticeHandler)
noticeRouter.put("/update/:id",updateNoticeHandler)
module.exports= noticeRouter