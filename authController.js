"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = exports.renderRegister = exports.renderLogin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const server_1 = require("../server");
const renderLogin = (req, res) => {
    res.render("auth", { title: "Login", email: "", password: "" });
};
exports.renderLogin = renderLogin;
const renderRegister = (req, res) => {
    res.render("auth", { title: "Register", email: "", password: "" });
};
exports.renderRegister = renderRegister;
const register = async (req, res) => {
    const { email } = req.body;
    const user = await server_1.prisma.user.findUnique({
        where: { email },
    });
    if (user) {
        res.render("auth", { title: "Register", error: "email in use" });
        return;
    }
    const salt = await bcrypt_1.default.genSalt();
    const password = await bcrypt_1.default.hash(req.body.password, salt);
    await server_1.prisma.user.create({
        data: {
            email,
            password,
        },
    });
    res.redirect("/auth/login");
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await server_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user || !(await bcrypt_1.default.compare(password, user.password))) {
        res.render("auth", {
            error: "Invalid Email or Password",
            title: "Login",
            email,
            password,
        });
        return;
    }
    console.log("login");
    req.session = { currentUser: { id: user.id, email } };
    //move to different page on login for now to the same one
    res.redirect("/");
};
exports.login = login;
const logout = async (req, res) => {
    req.session = null;
    res.redirect("/auth/login");
};
exports.logout = logout;
