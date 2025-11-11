const Notice = require("../models/noticeModel");

const noticeCreateHandler = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res.status(201).json({
      statusCode: 201,
      message: "Notice create Successfully",
      data: notice,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      statusCode: 500,
      message: "failed to create notice",
      error: error,
    });
  }
};

const noticeFindHandler = async (req, res) => {
  try {
    const allNotice = await Notice.find();
    if (!allNotice || allNotice.length === 0) {
      res.status(404).json({
        statusCode: 500,
        message: "Notice not found",
        error: error,
      });
    }
    res.status(200).json({
      statusCode: 200,
      message: "Notice return successfully",
      data: allNotice,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      error: error,
    });
  }
};
const singleNoticeFindHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const notice = await Notice.findById(id);
    if (!notice) {
      res.status(404).json({
        statusCode: 404,
        message: "Notice not found",
        error: error,
      });
    }
    res.status(200).json({
      statusCode: 200,
      message: "single Notice find successfull",
      data: notice,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      error: error,
    });
  }
};
const deleteNoticeHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await Notice.findByIdAndDelete(id);
    res.status(404).json({
      statusCode:404,
      message: "Notice delete sucessfull",
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      error: error,
    });
  }
};

const updateNoticeHandler = async (req, res)=>{
  try {
    const {id} = req.params;
    const updatedNotice =await Notice.findByIdAndUpdate(id, req.body, {new:true});
    res.status(202).json({
      statusCode:202,
      message: "Notice Updated sucessfull",
      data:updatedNotice,
    });
  } catch (error) {
     res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      error: error,
    });
  }
}

module.exports = {
  noticeCreateHandler,
  noticeFindHandler,
  singleNoticeFindHandler,
  deleteNoticeHandler,
  updateNoticeHandler
};
