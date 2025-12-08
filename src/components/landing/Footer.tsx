export function Footer() {
    return (
        <footer className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
                <div className="text-2xl font-bold font-heading text-slate-900">Impulse.</div>

                <p className="text-gray-500 text-sm max-w-md">
                    Get 1% Better Daily
                    <br />
                    <span className="opacity-60 font-light">Small discipline changes lead to massive results.</span>
                </p>

                <div className="text-xs text-gray-400 pt-8">
                    Copyright &copy; {new Date().getFullYear()} Impulse. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
