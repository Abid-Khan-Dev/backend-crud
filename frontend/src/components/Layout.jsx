import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="h-screen flex flex-col">

            {/* Top Bar */}
            <header className="h-14 bg-slate-900 text-white flex items-center justify-between px-6">
                <h1 className="font-bold text-lg">My App</h1>
                <span className="text-sm">Admin</span>
            </header>

            {/* Body */}
            <div className="flex flex-1">

                {/* Sidebar */}
                <aside className="w-56 bg-slate-800 text-white p-4">
                    <ul className="space-y-2">
                        <li className="p-2 rounded bg-slate-700 cursor-pointer">
                            Home
                        </li>
                        <li className="p-2 rounded hover:bg-slate-700 cursor-pointer">
                            Users
                        </li>
                        <li className="p-2 rounded hover:bg-slate-700 cursor-pointer">
                            Reports
                        </li>
                        <li className="p-2 rounded hover:bg-slate-700 cursor-pointer">
                            Settings
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-slate-100 flex items-center justify-center">
                    <Outlet />

                </main>

            </div>
        </div>
    );
}
