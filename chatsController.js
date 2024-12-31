"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChat = exports.updateChat = exports.deleteChat = exports.getChatById = exports.queryChatById = exports.getChatsByUserId = void 0;
const server_1 = require("../server");
const fileController_1 = require("./fileController");
const getChatsByUserId = async (req, res) => {
    try {
        const UserId = Number(req.query.UserId);
        const chats = await server_1.prisma.chatuser.findMany({
            where: { UserId },
            select: {
                Chats: {
                    select: {
                        ChatId: true,
                        Name: true,
                        Description: true,
                        CreationDate: true,
                        File: true,
                        Messages: {
                            take: 1,
                            orderBy: {
                                CreationDate: "desc",
                            },
                        },
                    },
                },
            },
        });
        res.json(chats);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.getChatsByUserId = getChatsByUserId;
const queryChatById = async (ChatId) => {
    const chat = await server_1.prisma.chats.findUnique({
        where: {
            ChatId,
        },
        select: {
            ChatId: true,
            Name: true,
            Description: true,
            CreationDate: true,
            Users: true,
            Messages: true,
        },
    });
    const simplifiedChat = {
        ChatId: chat.ChatId,
        Name: chat.Name,
        Description: chat.Description,
        CreationDate: chat.CreationDate,
        FileCount: chat.Messages.filter((msg) => msg.FileId != null).length,
        UsersCount: chat.Users.length,
        MessagesCount: chat.Messages.length,
    };
    return simplifiedChat;
};
exports.queryChatById = queryChatById;
const getChatById = async (req, res) => {
    try {
        const ChatId = Number(req.query.ChatId);
        const simplifiedChat = await (0, exports.queryChatById)(ChatId);
        res.json(simplifiedChat);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.getChatById = getChatById;
const deleteChat = async (req, res) => {
    try {
        const { ChatId } = req.body;
        await server_1.prisma.chats.delete({
            where: {
                ChatId,
            },
        });
        res.status(200).json({
            status: 200,
            message: "chat deleted",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.deleteChat = deleteChat;
const updateChat = async (req, res) => {
    try {
        const { ChatId, Name, Description, Picture } = req.body;
        const newFile = await (0, fileController_1.validateAndCreateFile)(Picture);
        const updatedChat = await server_1.prisma.chats.update({
            where: {
                ChatId,
            },
            data: {
                Name,
                Description,
                PictureId: newFile.FileId ?? null,
            },
        });
        res.status(200).json({
            status: 200,
            message: "User Updated",
            data: updatedChat,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.updateChat = updateChat;
const createChat = async (req, res) => {
    try {
        const { Name, Description, Picture, CreationDate, Users } = req.body;
        const newFile = await (0, fileController_1.validateAndCreateFile)(Picture);
        const chat = await server_1.prisma.chats.create({
            data: {
                Name,
                Description,
                CreationDate,
                PictureId: newFile.FileId ?? null,
            },
        });
        await server_1.prisma.chatuser.createMany({
            data: Users,
        });
        res.status(201).json({ status: 201, message: "Chat Created", data: chat });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};
exports.createChat = createChat;
