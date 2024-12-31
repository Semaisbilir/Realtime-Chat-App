"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoleUserChat = exports.deleteUserFromChat = exports.addUserToChat = void 0;
const server_1 = require("../server");
const addUserToChat = async (req, res) => {
    try {
        const { ChatId, UserId, RoleId } = req.body;
        const chatUser = await server_1.prisma.chatuser.create({
            data: {
                ChatId,
                UserId,
                RoleId,
            },
        });
        res
            .status(201)
            .json({ status: 201, message: "User Created", data: chatUser });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.addUserToChat = addUserToChat;
const deleteUserFromChat = async (req, res) => {
    try {
        const { ChatId, UserId, RoleId } = req.body;
        await server_1.prisma.chatuser.delete({
            where: {
                ChatId_UserId_RoleId: {
                    ChatId: ChatId,
                    UserId: UserId,
                    RoleId: RoleId,
                },
            },
        });
        res.status(200).json({
            status: 200,
            message: "UserChat relation deleted",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.deleteUserFromChat = deleteUserFromChat;
const updateRoleUserChat = async (req, res) => {
    try {
        const { ChatId, UserId, RoleId } = req.body;
        await server_1.prisma.chatuser.delete({
            where: {
                ChatId_UserId_RoleId: {
                    ChatId: ChatId,
                    UserId: UserId,
                    RoleId: RoleId,
                },
            },
        });
        const chatUser = await server_1.prisma.chatuser.create({
            data: {
                ChatId,
                UserId,
                RoleId,
            },
        });
        res.status(200).json({
            status: 200,
            message: "User Updated",
            data: chatUser,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.updateRoleUserChat = updateRoleUserChat;
