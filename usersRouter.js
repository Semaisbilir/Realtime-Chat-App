"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersController_1 = require("../controllers/usersController");
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.get("/getUserById", usersController_1.getUserById);
userRouter.get("/getUserByChatId", usersController_1.getUserByChatId);
userRouter.post("/", usersController_1.addUser);
userRouter.put("/", usersController_1.updateUser);
userRouter.delete("/", usersController_1.deleteUser);
exports.default = userRouter;
