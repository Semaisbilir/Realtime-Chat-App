"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUsers = void 0;
const server_1 = require("../server");
const getUsers = async (_, res) => {
    const users = await server_1.prisma.user.findMany();
    res.json(users);
};
exports.getUsers = getUsers;
const addUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await server_1.prisma.user.create({
        data: {
            email: email,
            password: password,
        },
    });
    res.status(201).json({ status: 201, message: "User Created", data: user });
};
exports.addUser = addUser;
const updateUser = async (req, res) => {
    const { password, id } = req.body;
    const updatedUser = await server_1.prisma.user.update({
        where: {
            id: id,
        },
        data: {
            password: password,
        },
    });
    res.status(200).json({
        status: 201,
        message: "User Updated",
        data: updatedUser,
    });
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const id = req.body.id;
    const deleteUser = await server_1.prisma.user.delete({
        where: {
            id: id,
        },
    });
    res.status(200).json({
        status: 200,
        message: "User deleted",
        data: deleteUser,
    });
};
exports.deleteUser = deleteUser;
