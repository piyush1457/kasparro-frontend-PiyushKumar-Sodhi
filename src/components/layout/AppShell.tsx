import Sidebar from './Sidebar';
import Navbar from './Navbar';

/**
 * AppShell Component
 * 
 * The main layout wrapper for the authenticated application area.
 * It provides the sidebar navigation and content area structure.
 * 
 * @param children - The page content to render within the shell.
 */
export default function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-6 transition-colors duration-300">
                    {children}
                </main>
            </div>
        </div>
    );
}
