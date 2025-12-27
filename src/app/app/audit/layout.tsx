'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import auditModules from '@/data/audit-modules.json';
import { StatusIcon } from '@/components/ui/StatusIcon';
import { AuditStatus } from '@/types/audit';

export default function AuditLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-4rem)]">
            {/* Module Sidebar */}
            <aside className="w-full md:w-80 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 flex-shrink-0 transition-colors duration-300">
                <div className="p-4 border-b dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
                    <h2 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Audit Modules</h2>
                </div>
                <nav className="p-2 space-y-1">
                    {auditModules.map((module) => {
                        const href = `/app/audit/${module.id}`;
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={module.id}
                                href={href}
                                className={clsx(
                                    "flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors border border-transparent",
                                    isActive
                                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900/30"
                                        : "text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-zinc-200"
                                )}
                            >
                                <span className="truncate">{module.name}</span>
                                <StatusIcon status={module.status as AuditStatus} className="h-4 w-4" />
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Panel */}
            <main className="flex-1 p-6 md:p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
