"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                {/* Top */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-12 pb-12 border-b border-white/5">
                    <div>
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-8 h-8 bg-[#FDE047] rounded-lg flex items-center justify-center">
                                <span className="text-[#0a0a0a] font-black text-sm font-heading">I</span>
                            </div>
                            <span className="text-white text-lg font-bold font-heading">
                                Impulse
                            </span>
                        </div>
                        <p className="text-white/30 text-sm max-w-xs">
                            Get 1% better daily. Small discipline changes lead to massive results.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-x-10 gap-y-4">
                        <div>
                            <p className="text-xs text-white/20 uppercase tracking-[0.15em] font-medium mb-3">Product</p>
                            <ul className="space-y-2">
                                <li><Link href="#features" className="text-sm text-white/50 hover:text-white transition-colors">Features</Link></li>
                                <li><Link href="#how-it-works" className="text-sm text-white/50 hover:text-white transition-colors">How it Works</Link></li>
                                <li><Link href="#calculator" className="text-sm text-white/50 hover:text-white transition-colors">Calculator</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs text-white/20 uppercase tracking-[0.15em] font-medium mb-3">Download</p>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="https://apps.apple.com/us/app/impulse-focus-control-blocker/id6736623036" target="_blank" className="text-sm text-white/50 hover:text-white transition-colors">
                                        iOS App
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://chromewebstore.google.com/detail/impulse-focus-control-and/ihhgdadeplnooijnccogligfccjpahik" target="_blank" className="text-sm text-white/50 hover:text-white transition-colors">
                                        Chrome Extension
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs text-white/20 uppercase tracking-[0.15em] font-medium mb-3">Company</p>
                            <ul className="space-y-2">
                                <li><Link href="#mission" className="text-sm text-white/50 hover:text-white transition-colors">Mission</Link></li>
                                <li><Link href="https://impulsecontrolapp.com/blog" target="_blank" className="text-sm text-white/50 hover:text-white transition-colors">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20">
                    <span>&copy; {new Date().getFullYear()} Impulse. All rights reserved.</span>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-white/40 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white/40 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
