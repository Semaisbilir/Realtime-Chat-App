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
            Name: "Document",
        },
    });
    // const alice = await prisma.users.upsert({
    //   where: { Email: 'alice@prisma.io' },
    //   update: {},
    //   create: {
    //     email: 'alice@prisma.io',
    //     name: 'Alice',
    //     posts: {
    //       create: {
    //         title: 'Check out Prisma with Next.js',
    //         content: 'https://www.prisma.io/nextjs',
    //         published: true,
    //       },
    //     },
    //   },
    // })
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
