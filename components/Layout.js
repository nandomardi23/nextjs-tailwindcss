import React from "react";

export default function Layout({ children }) {
    return (
        <div className=" flex antialiased font-sans tracking-tighter items-center justify-center min-h-screen bg-gray-100">
            {children}
        </div>
    );
}
