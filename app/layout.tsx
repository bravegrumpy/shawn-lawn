import "@/app/globals.css";
import { ubuntu  } from "@/fonts";
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <html lang="en-us">
            <UserProvider>
                <body className={`${ubuntu.className} bg-gradient-to-b from-emerald-200 dark:from-emerald-950 from-10% dark:from-10% via-lime-100 dark:via-lime-950 via-40% to-green-100 dark:to-green-950 to-80% bg-no-repeat`}>{children}</body>
            </UserProvider>
        </html>
    );
}