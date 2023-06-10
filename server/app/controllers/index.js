import UserModel from "../models/users";
import ChannelModel from "../models/channels";
import { sendResponse, sendError } from "../../utility";
import * as controllers from "./controllers";
module.exports = {
  createUser: async (req, res) => {
    const userObj = new UserModel(req.body);
    await userObj.saveData();
    sendResponse(res, userObj, "User added successfully", true, 200);
  },
  loginUser: async (req, res) => {
    const requestData = req.body;
    const isUserExist = await UserModel.findOneData({
      phoneNumber: requestData.phoneNumber,
      password: requestData.password,
    });
    if (!isUserExist) return sendError(res, {}, "Invalid credentials");
    sendResponse(res, isUserExist, "User logged in successfully", true, 200);
  },

  createChannel: async (req, res) => {
    const channelModel = new ChannelModel(req.body);
    await channelModel.saveData();
    sendResponse(res, channelModel, "Channel created successfully", true, 200);
  },
  getChannelList: async (req, res) => {
    const requestData = req.query;
    const channelList = await ChannelModel.findData({
      "channelUsers._id": requestData.userId,
    });
    sendResponse(res, channelList, "Channel list fetched", true, 200);
  },

  searchUser: async (req, res) => {
    const requestData = req.query;
    const isUserExist = await UserModel.findOneData({
      phoneNumber: requestData.phone,
    });
    if (!isUserExist) return sendError(res, {}, "No user found!");
    sendResponse(res, isUserExist, "User found successfully", true, 200);
  },

  sendMessage: async (req, res) => {},
};
