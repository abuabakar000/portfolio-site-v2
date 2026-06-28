'use client';
import React, { useState } from 'react';

interface Props {
    email: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const CopyEmail = ({ email, className, style, children }: Props) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <>
            <button
                onClick={handleCopy}
                className={className}
                style={{ cursor: 'none', ...style }}
                type="button"
            >
                {children || email}
            </button>

            {/* Premium Notification Toast */}
            <div
                className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[999] pointer-events-none transition-all duration-500 ease-out ${
                    copied
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-4 scale-95'
                }`}
            >
                <div className="bg-background-light border border-border text-foreground px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 backdrop-blur-md">
                    <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-sm font-medium tracking-wide">
                        Email copied to clipboard!
                    </span>
                </div>
            </div>
        </>
    );
};

export default CopyEmail;
