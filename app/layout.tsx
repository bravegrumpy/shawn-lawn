import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en-us">
        <body className="bg-background">{children}</body>
    </html>
    </>
  );
}
