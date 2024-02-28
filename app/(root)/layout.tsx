import "./globals.css";
import { ubuntu  } from "@/fonts";
import { Provider } from 'next-auth/client';

export default function RootLayout({
    children,
    session
}: {
    children: React.ReactNode
}){
    return(
        <>
        <Provider session={session}
        <html lang="en-us">
            <body className={`${ubuntu.className} bg-gradient-to-b from-emerald-200 dark:from-emerald-950 from-10% dark:from-10% via-lime-100 dark:via-lime-950 via-40% to-green-100 dark:to-green-950 to-80% bg-no-repeat`}>{children}</body>
        </html>
        </Provider>
        </>
    );
}