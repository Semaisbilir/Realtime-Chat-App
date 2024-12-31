"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatsController_1 = require("../controllers/chatsController");
const chatuserController_1 = require("../controllers/chatuserController");
const chatRouter = express_1.default.Router();
chatRouter.get("/getChatsByUserId", chatsController_1.getChatsByUserId);
chatRouter.get("/", chatsController_1.getChatById);
chatRouter.post("/addUserToChat", chatuserController_1.addUserToChat);
chatRouter.post("/createChat", chatsController_1.createChat);
chatRouter.put("/", chatsController_1.updateChat);
chatRouter.delete("/", chatsController_1.deleteChat);
exports.default = chatRouter;
