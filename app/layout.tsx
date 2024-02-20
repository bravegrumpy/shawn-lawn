import "./globals.css";
import StyledJsxRegistry from "./registry";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <html lang="en-us">
            <body className="bg-gradient-to-r from-indigo-500 to-pink-500">
                <StyledJsxRegistry>{children}</StyledJsxRegistry>
            </body>
        </html>
    );
}