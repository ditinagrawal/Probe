import React from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full mt-20 flex items-center justify-center">
            {children}
        </div>
    )
}