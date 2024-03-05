'use server';

import { PrismaClient, Prisma } from '@prisma/client';

// Code for getting a secret from AWS
/*
import { 
    SecretsManager,
    GetSecretValueCommand,
    SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';


export async function getSecret(){
    const secret_name = "shawn-lawn-dev-db-secret-key";

    const client = new SecretsManagerClient({
        region: "us-east-1",
    });

    let response;

    try{
        response = await client.send(
            new GetSecretValueCommand({
                SecretId: secret_name,
                VersionStage: "AWSCURRENT",
            })
        );
    } catch (error) {
        throw error;
    }

    const secret = response.SecretString;
    return secret;
}

export async function Secret(){
    ****************************
      AWS Secret Function Call 
    //const secret = getSecret();
    //console.log(secret);
    ****************************
}
*/

//CRUD Actions
// TODO: Split this into the 4 CRUD functions #issue55

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

//export function authenticate(){}