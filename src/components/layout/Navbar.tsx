export default function Navbar() {
    return (
        <header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b dark:border-zinc-800 h-16 flex items-center px-6 justify-between transition-colors duration-300 sticky top-0 z-10">
            <h1 className="font-bold text-lg text-gray-900 dark:text-zinc-100">Audit Console</h1>
            <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full shadow-lg ring-2 ring-white dark:ring-zinc-800"></div>
            </div>
        </header>
    );
}
