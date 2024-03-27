import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const authOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};