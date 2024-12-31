"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
class Socket {
    server;
    io;
    socket;
    constructor(server) {
        this.server = server;
        this.io = new socket_io_1.Server(server, { cors: { origin: "*" } });
    }
    initializeSocket() {
        // check authentication
        this.io.on("connection", (socket) => {
            this.socket = socket;
            // loop to join every chat that the user is already
        });
    }
    joinChat(userId, chatId) {
        // check the user and the chatId (database)
        // userId -> chatUser? next : insert into chatUser userId, chatId
        this.socket.join("join chat", chatId);
    }
    leaveChat(userId, chatId) {
        // check the user and the chatId (database)
        // userId -> chatUser? remove userId from chatUser : user not found error
        this.socket.leave("leave chat", chatId);
    }
    sendMessage(userId, chatId, msg) {
        // check the user and the chatId (database)
        // insert msg to message table
        this.io.to(chatId).emit("send message", msg);
    }
}
exports.default = Socket;
