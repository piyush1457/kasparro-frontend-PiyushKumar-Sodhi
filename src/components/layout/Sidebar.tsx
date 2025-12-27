'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { BarChart3, LayoutDashboard, Layers, Network } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/app/audit', label: 'Audit', icon: layersIconWrapper },
    // Using a wrapper function or just the component directly. 
    // Let's just use the component.
    { href: '/app/architecture', label: 'Architecture', icon: Network },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r dark:border-zinc-800 flex flex-col h-screen sticky top-0 transition-colors duration-300">
      <div className="p-6 border-b dark:border-zinc-800">
        <h2 className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100">Kasparro</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">Brand Intelligence</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive
                  ? "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
              )}
            >
              <Icon className={clsx("h-5 w-5", isActive ? "text-blue-600" : "text-gray-400")} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
          Back
        </Link>
        <ThemeToggle />
      </div>
    </aside>
  );
}

function layersIconWrapper(props: any) {
  return <Layers {...props} />
}
