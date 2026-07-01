import Navbar from "./components/navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="min-h-screen p-2">{children}<Navbar/></main>
            </body>
        </html>
    );
}