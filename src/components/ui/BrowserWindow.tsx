import React from "react";
import { cn } from "@/lib/utils";

interface BrowserWindowProps {
    children: React.ReactNode;
    className?: string;
    url?: string;
}

export function BrowserWindow({ children, className, url = "impulse.app" }: BrowserWindowProps) {
    return (
        <div className={cn("relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800", className)}>
            {/* Browser Toolbar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>

                {/* Address Bar */}
                <div className="flex-1 mx-4">
                    <div className="w-full max-w-md mx-auto h-6 bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] text-slate-400 font-mono">
                        <span className="opacity-50">https://</span>
                        <span>{url}</span>
                    </div>
                </div>

                <div className="w-12" /> {/* Spacer for balance */}
            </div>

            {/* Content Area */}
            <div className="relative w-full aspect-video bg-slate-50">
                {children}
            </div>
        </div>
    );
}
