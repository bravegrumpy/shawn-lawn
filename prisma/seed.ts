import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main(){
    const alice = await prisma.customer.upsert({
        where: {email: 'alice@prisma.io'},
        update: {},
        create: {
            email: 'alice@prisma.io',
            password: 'badPassword',
            name: 'Alice Prisma',
            address: {
                create: {
                    street: '1234 Alice Street',
                    city: 'Alice City',
                    zip: 'ABCDE',
                },
            },
        },
    })

    const bob = await prisma.customer.upsert({
        where: {email: 'bob@prisma.io'},
        update: {},
        create: {
            email: 'bob@prisma.io',
            password: 'lessBadPassword123',
            name: 'Bob Prisma',
            address: {
                create: {
                    street: '5678 Bob Lane',
                    city: 'Bob Town',
                    zip: 'FGHIJ',
                },
            },
        },
    })

    console.log({ alice, bob})
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })