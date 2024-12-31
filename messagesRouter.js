"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messagesController_1 = require("../controllers/messagesController");
const messageRouter = express_1.default.Router();
messageRouter.get("/getMessagesByChatId", messagesController_1.getMessagesByChatId);
messageRouter.post("/", messagesController_1.sendMessage);
messageRouter.put("/", messagesController_1.updateMessage);
messageRouter.delete("/", messagesController_1.deleteMessage);
exports.default = messageRouter;
