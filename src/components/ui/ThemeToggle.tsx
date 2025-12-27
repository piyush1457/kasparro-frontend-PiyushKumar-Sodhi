'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-9 w-9" />; // Placeholder to avoid layout shift
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="relative h-9 w-9 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-500" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
