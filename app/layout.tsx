import "./globals.css";
import StyledJsxRegistry from "./registry";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <html lang="en-us">
            <body>
                <StyledJsxRegistry>{children}</StyledJsxRegistry>
            </body>
        </html>
    );
}