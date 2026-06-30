import Navbar from "./_components/navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="min-h-screen">{children}<Navbar/></main>
            </body>
        </html>
    );
}