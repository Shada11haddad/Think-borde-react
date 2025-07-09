import React from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react"; // تأكدي أن lucide-react مثبت
import ThemeToggle from "./ThemeToggle"; // زر التبديل بين الوضعين

function Navbar() {
    return (
        <header className="bg-base-100 border-b border-base-content/20 shadow-sm">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
                        Think Board!
                    </h1>

                    <div className="flex items-center gap-4">
                        <ThemeToggle /> {/* ✅ زر التبديل هنا */}
                        
                        <Link to="/CreatePage" className="btn btn-primary">
                            <PlusIcon className="w-5 h-5" />
                            <span>New Note</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
