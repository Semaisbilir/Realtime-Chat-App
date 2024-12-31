"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.filetypes.create({
        data: {
            Name: "Image",
        },
    });
    await prisma.filetypes.create({
        data: {
            Name: "Audio",
        },
    });
    await prisma.filetypes.create({
        data: {
            Name: "Video",
        },
    });
    await prisma.filetypes.create({
        data: {
            Name: "Document",
        },
    });
    await prisma.roles.create({
        data: {
            Name: "SuperAdmin",
            CanCreate: true,
            CanRead: true,
            CanUpdate: true,
            CanDelete: true,
        },
    });
    await prisma.roles.create({
        data: {
            Name: "Admin",
            CanCreate: true,
            CanRead: true,
            CanUpdate: false,
            CanDelete: true,
        },
    });
    await prisma.roles.create({
        data: {
            Name: "User",
            CanCreate: true,
            CanRead: true,
            CanUpdate: false,
            CanDelete: false,
        },
    });
    await prisma.files.create({
        data: {
            FileTypeId: 1,
            Name: "newimage.jpg",
            FileUrl: "https://img.freepik.com/foto-gratis/lindo-gatito-domestico-sienta-ventana-mirando-fuera-ia-generativa_188544-12519.jpg",
            CreationDate: new Date(),
        },
    });
    //--Example of Direct Message chat
    await prisma.chats.create({
        data: {
            Name: "Chat with Sam",
            Description: "Direct Message Chat",
            PictureId: null,
            CreationDate: new Date(),
        },
    });
    await prisma.users.create({
        data: {
            Email: "sam@example.com",
            Password: "password",
            Name: "Sam",
            About: "I am Sam",
            PictureId: null,
            CreationDate: new Date(),
            Status: true,
        },
    });
    await prisma.users.create({
        data: {
            Email: "leo@example.com",
            Password: "password",
            Name: "Leo",
            About: "I am Leo",
            PictureId: null,
            CreationDate: new Date(),
            Status: true,
        },
    });
    await prisma.chatuser.create({
        data: {
            ChatId: 1,
            UserId: 1,
            RoleId: 3,
        },
    });
    await prisma.chatuser.create({
        data: {
            ChatId: 1,
            UserId: 2,
            RoleId: 3,
        },
    });
    //	//--Example of Group chat
    await prisma.chats.create({
        data: {
            Name: "SafeComm Team",
            Description: "Group Chat",
            PictureId: 1,
            CreationDate: new Date(),
        },
    });
    await prisma.users.create({
        data: {
            Email: "sema@example.com",
            Password: "password",
            Name: "Sema",
            About: "I am Sema",
            PictureId: null,
            CreationDate: new Date(),
            Status: true,
        },
    });
    await prisma.users.create({
        data: {
            Email: "mateus@example.com",
            Password: "password",
            Name: "Mateus",
            About: "I am Mateus",
            PictureId: null,
            CreationDate: new Date(),
            Status: true,
        },
    });
    await prisma.chatuser.create({
        data: {
            ChatId: 2,
            UserId: 1,
            RoleId: 2,
        },
    });
    await prisma.chatuser.create({
        data: {
            ChatId: 2,
            UserId: 2,
            RoleId: 3,
        },
    });
    await prisma.chatuser.create({
        data: {
            ChatId: 2,
            UserId: 3,
            RoleId: 3,
        },
    });
    await prisma.chatuser.create({
        data: {
            ChatId: 2,
            UserId: 4,
            RoleId: 3,
        },
    });
    //--Example of Messages in Direct Message chat
    await prisma.messages.create({
        data: {
            ChatId: 1,
            UserId: 1,
            Content: "Hello Leo!",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    //INSERT INTO Messages (ChatId, UserId, Content, FileId, CreationDate) VALUES (1, 2, 'Hello Sam!', NULL, NOW());
    await prisma.messages.create({
        data: {
            ChatId: 1,
            UserId: 2,
            Content: "Hello Sam!",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    //INSERT INTO Messages (ChatId, UserId, Content, FileId, CreationDate) VALUES (1, 1, 'How are you?', NULL, NOW());
    await prisma.messages.create({
        data: {
            ChatId: 1,
            UserId: 1,
            Content: "How are you?",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    //--Example of Messages in Group chat
    await prisma.messages.create({
        data: {
            ChatId: 2,
            UserId: 1,
            Content: "Hello Sema!",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    await prisma.messages.create({
        data: {
            ChatId: 2,
            UserId: 2,
            Content: "Hello",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    await prisma.messages.create({
        data: {
            ChatId: 2,
            UserId: 3,
            Content: "Hello",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    await prisma.messages.create({
        data: {
            ChatId: 2,
            UserId: 4,
            Content: "Hello",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    await prisma.messages.create({
        data: {
            ChatId: 2,
            UserId: 1,
            Content: "How are you?",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    await prisma.messages.create({
        data: {
            ChatId: 2,
            UserId: 2,
            Content: "How are you?",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    await prisma.messages.create({
        data: {
            ChatId: 2,
            UserId: 3,
            Content: "How are you?",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    await prisma.messages.create({
        data: {
            ChatId: 2,
            UserId: 4,
            Content: "How are you?",
            FileId: null,
            CreationDate: new Date(),
        },
    });
    //--Example of Saw Messages
    await prisma.usersawmessages.create({
        data: {
            UserId: 1,
            MessageId: 1,
        },
    });
    await prisma.usersawmessages.create({
        data: {
            UserId: 2,
            MessageId: 1,
        },
    });
    await prisma.usersawmessages.create({
        data: {
            UserId: 1,
            MessageId: 2,
        },
    });
    await prisma.usersawmessages.create({
        data: {
            UserId: 2,
            MessageId: 2,
        },
    });
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
