import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white py-8 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Impulaw. All Rights Reserved.
                </p>
                <div className="flex gap-6">
                    <Link href="#" className="text-sm text-gray-500 hover:text-black">Privacy Policy</Link>
                    <Link href="#" className="text-sm text-gray-500 hover:text-black">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
