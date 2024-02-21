'use server';
import { PrismaClient } from '@prisma/client';

export default async function GetQuery() {
    console.log("prisma function started")
    const prisma = new PrismaClient()

    async function main(){
        const newUser = await prisma.user.create({
            data: {
                email: 'testA@email.com',
                name: 'TestA'
            }
        })
        console.dir(newUser, { depth: null})
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
    console.log("prisma function finished")
}