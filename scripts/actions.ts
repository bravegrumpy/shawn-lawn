'use server';
import { PrismaClient, Prisma } from '@prisma/client';
//CRUD Actions
// TODO: Split this into the 4 CRUD functions
export default async function GetQuery() {
    console.log("prisma function started")
    const prisma = new PrismaClient();

    // Main function for CRUD actions
    async function main(){
        console.log("Main Function is Executing...");

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
