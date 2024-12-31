"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.updateMessage = exports.deleteMessage = exports.getMessagesByChatId = void 0;
const server_1 = require("../server");
const fileController_1 = require("./fileController");
const getMessagesByChatId = async (req, res) => {
    try {
        const ChatId = Number(req.query.ChatId);
        const messages = await server_1.prisma.messages.findMany({
            where: {
                ChatId,
            },
            select: {
                ChatId: true,
                User: {
                    select: {
                        UserId: true,
                        Name: true,
                        File: true,
                    },
                },
                Content: true,
                File: true,
                CreationDate: true,
            },
        });
        res.json(messages);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.getMessagesByChatId = getMessagesByChatId;
const deleteMessage = async (req, res) => {
    try {
        const { MessageId } = req.body;
        await server_1.prisma.messages.delete({
            where: {
                MessageId,
            },
        });
        res.status(200).json({
            status: 200,
            message: "Message deleted",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.deleteMessage = deleteMessage;
const updateMessage = async (req, res) => {
    try {
        const { MessageId, ChatId, UserId, Content, File } = req.body;
        const file = await (0, fileController_1.validateAndCreateFile)(File);
        const updatedMessage = await server_1.prisma.messages.update({
            where: {
                MessageId,
            },
            data: {
                ChatId,
                UserId,
                Content,
                FileId: file.FileId ?? null,
            },
        });
        res.status(200).json({
            status: 200,
            message: "Message Updated",
            data: updatedMessage,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.updateMessage = updateMessage;
const sendMessage = async (req, res) => {
    try {
        const { ChatId, UserId, Content, File } = req.body;
        const file = await (0, fileController_1.validateAndCreateFile)(File);
        const message = await server_1.prisma.messages.create({
            data: {
                ChatId,
                UserId,
                Content,
                FileId: file.FileId ?? null,
                CreationDate: new Date(),
            },
        });
        res
            .status(201)
            .json({ status: 201, message: "Message Created", data: message });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.sendMessage = sendMessage;
