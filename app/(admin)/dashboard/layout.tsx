"use client";
import Navbar from "./components/navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main className="min-h-screen p-2">
                {children}
            </main>
            <Navbar />
        </>
    );
}