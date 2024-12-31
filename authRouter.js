"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
authRouter.get("/login", authController_1.renderLogin);
authRouter.get("/register", authController_1.renderRegister);
authRouter.post("/login", authController_1.login);
authRouter.post("/register", authController_1.register);
authRouter.post("/logout", authController_1.logout);
exports.default = authRouter;
